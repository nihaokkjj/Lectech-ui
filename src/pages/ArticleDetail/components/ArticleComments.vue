<script setup>
import { ref, onMounted } from 'vue'

// 评论数据
const comments = ref([])
const totalComments = ref(0)
const currentPage = ref(1)
const totalPages = ref(5)
const newComment = ref('')

// 用户信息
const currentUser = ref({
  id: 1,
  name: 'Current User',
  avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=64&q=80'
})

// Mock数据
const mockComments = [
  {
    id: 1,
    author: {
      id: 101,
      name: 'David Chen',
      avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=64&q=80'
    },
    content: '非常详细的指南，特别是TypeScript的最佳实践部分对我帮助很大。我一直在纠结如何正确定义组件的props和emits，这篇文章给了我很好的参考。',
    createdAt: '2023-10-22',
    likes: 24,
    floor: 1,
    isLiked: false,
    replies: [
      {
        id: 1001,
        author: {
          id: 1,
          name: 'Alex Zhang',
          avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=64&q=80',
          isAuthor: true
        },
        content: '谢谢支持！TypeScript确实能大大提升开发体验，尤其是在大型项目中。如果有任何问题，欢迎继续交流。',
        createdAt: '2023-10-22',
        likes: 8,
        isLiked: false
      }
    ]
  },
  {
    id: 2,
    author: {
      id: 102,
      name: 'Sarah Lin',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=64&q=80'
    },
    content: '关于Pinia的使用部分讲得很清晰，比Vuex简洁多了。不过我想问一下，在大型项目中，如何组织多个store？有没有什么推荐的结构？',
    createdAt: '2023-10-22',
    likes: 16,
    floor: 2,
    isLiked: false,
    replies: []
  },
  {
    id: 3,
    author: {
      id: 103,
      name: 'Emily Wang',
      avatar: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=64&q=80'
    },
    content: '文章中提到的性能优化技巧很实用，特别是v-memo的使用，之前都不知道有这个指令。另外想问一下，对于大型列表渲染，有没有其他推荐的优化方法？',
    createdAt: '2023-10-21',
    likes: 12,
    floor: 3,
    isLiked: false,
    replies: []
  }
]

// 模拟接口
const commentAPI = {
  // 获取评论列表
  async getComments(page = 1, pageSize = 10) {
    // 模拟网络延迟
    await new Promise(resolve => setTimeout(resolve, 500))
    
    // 返回mock数据
    return {
      data: mockComments,
      total: 36,
      page,
      pageSize
    }
  },
  
  // 发表评论
  async postComment(content) {
    
    await new Promise(resolve => setTimeout(resolve, 300))
    
    
    return {
      id: mockComments.length + 1,
      author: currentUser.value,
      content,
      createdAt: new Date().toISOString().split('T')[0],
      likes: 0,
      floor: mockComments.length + 1,
      isLiked: false,
      replies: []
    }
  },
  
  
  async likeComment(commentId) {
    
    await new Promise(resolve => setTimeout(resolve, 200))
    
   
    return { success: true }
  },
  
 
  async replyComment(commentId, content) {
    
    await new Promise(resolve => setTimeout(resolve, 300))
    
   
    return {
      id: Math.floor(Math.random() * 10000),
      author: currentUser.value,
      content,
      createdAt: new Date().toISOString().split('T')[0],
      likes: 0,
      isLiked: false
    }
  }
}


const fetchComments = async (page = 1) => {
  try {
    const response = await commentAPI.getComments(page)
    comments.value = response.data
    totalComments.value = response.total
    currentPage.value = page
  } catch (error) {
    console.error('获取评论失败:', error)
  }
}

// 发表评论
const submitComment = async () => {
  if (!newComment.value.trim()) return
  
  try {
    const comment = await commentAPI.postComment(newComment.value)
    comments.value.unshift(comment)
    totalComments.value += 1
    newComment.value = ''
  } catch (error) {
    console.error('发表评论失败:', error)
  }
}

// 点赞评论
const likeComment = async (comment) => {
  try {
    await commentAPI.likeComment(comment.id)
    comment.isLiked = !comment.isLiked
    comment.likes += comment.isLiked ? 1 : -1
  } catch (error) {
    console.error('点赞失败:', error)
  }
}

// 点赞回复
const likeReply = async (reply) => {
  try {
    await commentAPI.likeComment(reply.id)
    reply.isLiked = !reply.isLiked
    reply.likes += reply.isLiked ? 1 : -1
  } catch (error) {
    console.error('点赞失败:', error)
  }
}

// 回复评论
const replyToComment = async (comment, content) => {
  try {
    const reply = await commentAPI.replyComment(comment.id, content)
    comment.replies.push(reply)
  } catch (error) {
    console.error('回复失败:', error)
  }
}

// 页面切换
const changePage = (page) => {
  if (page >= 1 && page <= totalPages.value) {
    fetchComments(page)
  }
}

// 初始化
onMounted(() => {
  fetchComments()
})
</script>

<template>
  <!-- 评论区 -->
  <section id="comments-section" class="bg-white rounded-xl shadow-card p-6 mb-6" style="text-align: left;">
    <h3 class="text-xl font-bold text-gray-800 mb-6">评论 ({{ totalComments }})</h3>
    
    <!-- 评论输入框 -->
    <div id="comment-form" class="mb-8">
      <div class="flex items-start space-x-4">
        <img :src="currentUser.avatar" alt="用户头像" class="w-10 h-10 rounded-full object-cover flex-shrink-0">
        <div class="flex-1">
          <textarea 
            id="comment-input" 
            v-model="newComment"
            placeholder="写下你的评论..." 
            class="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none" 
            rows="3"
          ></textarea>
          <div class="flex justify-end mt-2">
            <button 
              id="submit-comment-btn" 
              @click="submitComment"
              :disabled="!newComment.trim()"
              class="bg-primary hover:bg-secondary text-white px-4 py-2 rounded-lg btn-primary-effect"
              :class="{ 'opacity-50 cursor-not-allowed': !newComment.trim() }"
            >
              发表评论
            </button>
          </div>
        </div>
      </div>
    </div>
    
    <!-- 评论列表 -->
    <div id="comments-list" class="space-y-6">
      <!-- 评论项 -->
      <div 
        v-for="comment in comments" 
        :key="comment.id" 
        :id="`comment-${comment.id}`" 
        class="comment-item pb-6"
      >
        <div class="flex items-start space-x-4">
          <a :href="`#comment-${comment.id}-author-link`" :id="`comment-${comment.id}-author-link`">
            <img :src="comment.author.avatar" :alt="`${comment.author.name}头像`" class="w-10 h-10 rounded-full object-cover flex-shrink-0">
          </a>
          <div class="flex-1">
            <div class="flex items-center justify-between mb-1">
              <div>
                <a 
                  :href="`#comment-${comment.id}-author-name`" 
                  :id="`comment-${comment.id}-author-name`" 
                  class="font-medium text-gray-900 hover:text-primary"
                >
                  {{ comment.author.name }}
                  <span v-if="comment.author.isAuthor" class="text-xs text-gray-500 ml-1">(作者)</span>
                </a>
                <span class="text-gray-500 text-sm ml-2">{{ comment.createdAt }}</span>
              </div>
              <div class="text-gray-500 text-sm">{{ comment.floor }}楼</div>
            </div>
            <p :id="`comment-${comment.id}-content`" class="text-gray-700 mb-3">{{ comment.content }}</p>
            <div class="flex items-center space-x-4">
              <button 
                :id="`comment-${comment.id}-like-btn`" 
                @click="likeComment(comment)"
                class="text-gray-500 text-sm hover:text-primary flex items-center"
                :class="{ 'text-primary': comment.isLiked }"
              >
                <i class="far fa-thumbs-up mr-1"></i>
                <span :id="`comment-${comment.id}-like-count`">{{ comment.likes }}</span>
              </button>
              <button 
                :id="`comment-${comment.id}-reply-btn`" 
                class="text-gray-500 text-sm hover:text-primary flex items-center"
              >
                <i class="far fa-comment mr-1"></i>
                <span>回复</span>
              </button>
            </div>
            
            <!-- 回复列表 -->
            <div 
              v-if="comment.replies && comment.replies.length > 0"
              :id="`comment-${comment.id}-replies`" 
              class="mt-4 pl-6 border-l-2 border-gray-100 space-y-4"
            >
              <!-- 回复项 -->
              <div 
                v-for="reply in comment.replies" 
                :key="reply.id" 
                :id="`reply-${comment.id}-${reply.id}`" 
                class="flex items-start space-x-3"
              >
                <a :href="`#reply-${comment.id}-${reply.id}-author-link`" :id="`reply-${comment.id}-${reply.id}-author-link`">
                  <img :src="reply.author.avatar" :alt="`${reply.author.name}头像`" class="w-8 h-8 rounded-full object-cover flex-shrink-0">
                </a>
                <div class="flex-1">
                  <div class="flex items-center mb-1">
                    <a 
                      :href="`#reply-${comment.id}-${reply.id}-author-name`" 
                      :id="`reply-${comment.id}-${reply.id}-author-name`" 
                      class="font-medium text-gray-900 hover:text-primary"
                    >
                      {{ reply.author.name }}
                    </a>
                    <span v-if="reply.author.isAuthor" class="text-gray-500 text-xs ml-2">作者</span>
                    <span class="text-gray-500 text-sm ml-2">{{ reply.createdAt }}</span>
                  </div>
                  <p :id="`reply-${comment.id}-${reply.id}-content`" class="text-gray-700 text-sm">{{ reply.content }}</p>
                  <div class="flex items-center mt-1">
                    <button 
                      :id="`reply-${comment.id}-${reply.id}-like-btn`" 
                      @click="likeReply(reply)"
                      class="text-gray-500 text-xs hover:text-primary flex items-center"
                      :class="{ 'text-primary': reply.isLiked }"
                    >
                      <i class="far fa-thumbs-up mr-1"></i>
                      <span :id="`reply-${comment.id}-${reply.id}-like-count`">{{ reply.likes }}</span>
                    </button>
                    <button 
                      :id="`reply-${comment.id}-${reply.id}-reply-btn`" 
                      class="text-gray-500 text-xs hover:text-primary flex items-center ml-3"
                    >
                      <i class="far fa-comment mr-1"></i>
                      <span>回复</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- 分页 -->
    <div class="flex justify-center mt-8" v-if="totalPages > 1">
      <nav id="comments-pagination" class="flex items-center bg-white rounded-lg shadow-sm p-1">
        <a 
          href="#" 
          id="comments-prev-page" 
          @click.prevent="changePage(currentPage - 1)"
          class="w-9 h-9 flex items-center justify-center text-gray-500 rounded-lg hover:bg-gray-100"
          :class="{ 'opacity-50 pointer-events-none': currentPage === 1 }"
        >
          <i class="fas fa-chevron-left"></i>
        </a>
        
        <template v-for="page in totalPages" :key="page">
          <a 
            v-if="page === 1 || page === totalPages || (page >= currentPage - 1 && page <= currentPage + 1)"
            href="#" 
            :id="`comments-page-${page}`" 
            @click.prevent="changePage(page)"
            class="w-9 h-9 flex items-center justify-center text-gray-700 rounded-lg hover:bg-gray-100"
            :class="{ 'text-white bg-primary': page === currentPage }"
          >
            {{ page }}
          </a>
          
          <span 
            v-else-if="page === currentPage - 2 || page === currentPage + 2"
            class="w-9 h-9 flex items-center justify-center text-gray-500"
          >
            ...
          </span>
        </template>
        
        <a 
          href="#" 
          id="comments-next-page" 
          @click.prevent="changePage(currentPage + 1)"
          class="w-9 h-9 flex items-center justify-center text-gray-500 rounded-lg hover:bg-gray-100"
          :class="{ 'opacity-50 pointer-events-none': currentPage === totalPages }"
        >
          <i class="fas fa-chevron-right"></i>
        </a>
      </nav>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import '../../../style.scss';

#comments-section {
  background-color: white;
  border-radius: $rounded-xl;
  box-shadow: $shadow-card;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  
  @media (max-width: 768px) {
    padding: 1rem;
  }
}

/* 标题样式 */
.text-xl {
  font-size: $text-xl;
}

.font-bold {
  font-weight: 700;
}

.text-gray-800 {
  color: $gray-800;
}

.mb-6 {
  margin-bottom: 1.5rem;
}

/* 评论表单样式 */
#comment-form {
  margin-bottom: 2rem;
}

.flex {
  display: flex;
}

.items-start {
  align-items: flex-start;
}

.space-x-4 > * + * {
  margin-left: 1rem;
}

.w-10 {
  width: 2.5rem;
}

.h-10 {
  height: 2.5rem;
}

.rounded-full {
  border-radius: 50%;
}

.object-cover {
  object-fit: cover;
}

.flex-shrink-0 {
  flex-shrink: 0;
}

.flex-1 {
  flex: 1;
}

#comment-input {
  width: 100%;
  border: 1px solid $gray-300;
  border-radius: $rounded-xl;
  padding: 0.75rem;
  resize: none;
  font-family: $font-sans;
  
  &:focus {
    outline: none;
    border-color: transparent;
    box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.2);
  }
}

.mt-2 {
  margin-top: 0.5rem;
}

.justify-end {
  justify-content: flex-end;
}

#submit-comment-btn {
  background-color: $primary;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: $rounded-xl;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s ease;
  
  &:hover:not(:disabled) {
    background-color: $secondary;
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
}

/* 评论项样式 */
#comments-list {
  .space-y-6 > * + * {
    margin-top: 1.5rem;
  }
}

.comment-item {
  padding-bottom: 1.5rem;
  
  &:not(:last-child) {
    border-bottom: 1px solid $gray-200;
  }
}

.pb-6 {
  padding-bottom: 1.5rem;
}

#comment-1-author-link,
#comment-2-author-link,
#comment-3-author-link {
  display: block;
}

.font-medium {
  font-weight: 500;
}

.text-gray-900 {
  color: $gray-900;
}

.text-gray-500 {
  color: $gray-500;
}

.text-sm {
  font-size: $text-sm;
}

.ml-2 {
  margin-left: 0.5rem;
}

.mb-1 {
  margin-bottom: 0.25rem;
}

.mb-3 {
  margin-bottom: 0.75rem;
}

.text-gray-700 {
  color: $gray-100;
}

.flex-1 {
  flex: 1;
}

.items-center {
  align-items: center;
}

.justify-between {
  justify-content: space-between;
}

/* 回复相关样式 */
#comment-1-replies {
  margin-top: 1rem;
  padding-left: 1.5rem;
  border-left: 2px solid $gray-100;
  
  .space-y-4 > * + * {
    margin-top: 1rem;
  }
}

.w-8 {
  width: 2rem;
}

.h-8 {
  height: 2rem;
}

.text-xs {
  font-size: $text-xs;
}

.mr-1 {
  margin-right: 0.25rem;
}

.ml-3 {
  margin-left: 0.75rem;
}

.mt-1 {
  margin-top: 0.25rem;
}

/* 分页样式 */
.mt-8 {
  margin-top: 2rem;
}

#comments-pagination {
  display: flex;
  align-items: center;
  background-color: white;
  border-radius: 0.5rem;
  box-shadow: $shadow-card;
  padding: 0.25rem;
}

.w-9 {
  width: 2.25rem;
}

.h-9 {
  height: 2.25rem;
}

.rounded-lg {
  border-radius: 0.5rem;
}

.text-white {
  color: white;
}

.bg-primary {
  background-color: $primary;
}

.text-gray-700 {
  color: $gray-700;
}

/* 悬停效果 */
.hover\:text-primary:hover {
  color: $primary;
}

.hover\:bg-gray-100:hover {
  background-color: $gray-100;
}

/* 图标样式 */
.far,
.fas {
  font-size: $text-base;
}

/* 按钮通用样式 */
button {
  cursor: pointer;
  background: none;
  border: none;
  font-family: $font-sans;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .space-x-4 > * + * {
    margin-left: 0.75rem;
  }
  
  #comment-input {
    padding: 0.5rem;
    font-size: $text-sm;
  }
  
  #submit-comment-btn {
    padding: 0.4rem 0.8rem;
    font-size: $text-sm;
  }
  
  #comments-section {
    .text-xl {
      font-size: $text-lg;
    }
  }
  
  #comments-pagination {
    .w-9, .h-9 {
      width: 2rem;
      height: 2rem;
    }
  }
}

/* 工具类样式 */
.bg-white {
  background-color: white;
}

.shadow-card {
  box-shadow: $shadow-card;
}

.p-6 {
  padding: 1.5rem;
}

.rounded-xl {
  border-radius: $rounded-xl;
}

/* 新增样式 */
.cursor-not-allowed {
  cursor: not-allowed;
}

.opacity-50 {
  opacity: 0.5;
}

.pointer-events-none {
  pointer-events: none;
}
</style>