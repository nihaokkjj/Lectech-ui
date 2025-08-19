<script setup>

import TopicCard from './TopicCard.vue';

import { ref, onMounted } from 'vue';

// 排序选项
const sortOption = ref('hot')

// 分页数据
const pagination = ref({
  currentPage: 1,
  totalPages: 8
})

const topics = ref([])


// Mock数据
const mockTopics = [
  {
    id: 1,
    title: '大型语言模型与AI应用',
    description: '讨论大型语言模型(LLM)的发展趋势、应用场景及实践经验，分享最新的模型训练、微调和部署技术。',
    tags: ['LLM', 'AI', 'GPT', '人工智能'],
    participants: 1200,
    comments: 128,
    createdAt: '2023-10-20',
    avatars: [
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=64&q=80',
      'https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=64&q=80',
      'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=64&q=80'
    ],
    extraParticipants: 8
  },
  {
    id: 2,
    title: '前端框架选型对比',
    description: 'React vs Vue vs Angular vs Svelte，各框架优缺点与适用场景分析，分享实际项目中的选型经验和最佳实践。',
    tags: ['React', 'Vue', 'Angular', 'Svelte'],
    participants: 856,
    comments: 92,
    createdAt: '2023-10-18',
    avatars: [
      'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=64&q=80',
      'https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=64&q=80',
      'https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=64&q=80'
    ],
    extraParticipants: 5
  },
  {
    id: 3,
    title: '微服务架构实践',
    description: '分享微服务架构设计、实现与优化的经验，解决实际项目中的挑战，包括服务拆分、通信、容错、监控等方面的最佳实践。',
    tags: ['微服务', '架构设计', 'Spring Cloud', 'Kubernetes'],
    participants: 732,
    comments: 78,
    createdAt: '2023-10-15',
    avatars: [
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=64&q=80',
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=64&q=80',
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=64&q=80'
    ],
    extraParticipants: 4
  },
  {
    id: 4,
    title: '移动端跨平台开发技术',
    description: '探讨Flutter、React Native、Uni-app等跨平台技术的优劣势，分享实际项目中的应用经验和性能优化技巧。',
    tags: ['Flutter', 'React Native', '跨平台', '移动开发'],
    participants: 615,
    comments: 64,
    createdAt: '2023-10-12',
    avatars: [
      'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=64&q=80',
      'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=64&q=80',
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=64&q=80'
    ],
    extraParticipants: 3
  },
  {
    id: 5,
    title: '云原生与DevOps实践',
    description: '讨论云原生架构、容器化、CI/CD、自动化测试等DevOps实践，分享企业级应用的云原生转型经验和挑战。',
    tags: ['云原生', 'DevOps', 'Docker', 'Kubernetes'],
    participants: 548,
    comments: 52,
    createdAt: '2023-10-10',
    avatars: [
      'https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=64&q=80',
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=64&q=80',
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=64&q=80'
    ],
    extraParticipants: 2
  }
]

const getTopics = async() => {
  topics.value = mockTopics
}

onMounted(() => {
  getTopics()
})

import { useRouter } from 'vue-router';


const router = useRouter();

// 跳转到话题详情页
const goToDetail = (topicId) => {
  router.push(`/topic-detail/${topicId}`)
}


</script>

<template>
    <!-- 话题列表视图 -->
        <div id="topics-list-view" style="padding-top: 4rem;">
            <div class="flex items-center justify-between mb-4">
                <h2 class="text-xl font-bold text-gray-800 flex items-center">
                    <i class="fas fa-comments text-primary mr-2"></i>
                    话题讨论
                </h2>
                <div class="flex items-center space-x-3">
                    <div class="hidden md:flex items-center bg-white rounded-lg shadow-sm"> <!--hidden md:flex-->
                        <button 
                          id="sort-hot" 
                          class="px-3 py-1.5 text-sm rounded-lg"
                          :class="sortOption === 'hot' ? 'text-primary bg-primary bg-opacity-10' : 'text-gray-600 hover:text-primary'"
                          @click="changeSort('hot')"
                        >
                          热门
                        </button>
                        <button 
                          id="sort-new" 
                          class="px-3 py-1.5 text-sm rounded-lg"
                          :class="sortOption === 'new' ? 'text-primary bg-primary bg-opacity-10' : 'text-gray-600 hover:text-primary'"
                          @click="changeSort('new')"
                        >
                          最新
                        </button>
                    </div>
                    <button id="create-topic-btn" class="bg-primary hover:bg-secondary text-white px-4 py-2 rounded-lg btn-primary-effect flex items-center">
                        <i class="fas fa-plus mr-2"></i>
                        <span>创建话题</span>
                    </button>
                </div>
            </div>
            
            <div class="bg-white rounded-xl shadow-card overflow-hidden">
              <!-- 使用 v-for 动态渲染话题列表 -->
              <div 
                v-for="(topic, index) in topics" 
                :key="topic.id" 
                :id="`topic-${topic.id}`" 
                class="topic-card p-5"
                :class="{ 'border-b border-gray-200': index < topics.length - 1 }"
              >
                <div class="flex flex-col md:flex-row">
                    <div class="flex-1 min-w-0">
                        <h3 class="text-lg font-bold mb-2 hover:text-primary transition-colors">
                            <a 
                              href="#" 
                              :id="`topic-title-${topic.id}`" 
                              class="topic-title" 
                              :data-topic-id="topic.id"
                              @click="goToDetail(topic.id)"
                            >
                              # {{ topic.title }}
                            </a>
                        </h3>
                        <p class="text-gray-600 text-sm mb-3">{{ topic.description }}</p>
                        <div class="flex flex-wrap gap-2 mb-3">
                            <span 
                              v-for="(tag, tagIndex) in topic.tags" 
                              :key="tagIndex"
                              class="tag text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded-full"
                            >
                              {{ tag }}
                            </span>
                        </div>
                        <div class="flex items-center justify-between">
                            <div class="flex items-center">
                                <div class="avatar-stack flex -space-x-3">
                                    <img 
                                      v-for="(avatar, avatarIndex) in topic.avatars" 
                                      :key="avatarIndex"
                                      :src="avatar" 
                                      :alt="`参与者头像${avatarIndex + 1}`" 
                                      class="avatar w-6 h-6 rounded-full object-cover border-2 border-white"
                                    >
                                    <div class="avatar w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center text-xs text-gray-600 border-2 border-white">+{{ topic.extraParticipants }}</div>
                                </div>
                                <span class="text-gray-500 text-xs ml-2">{{ (topic.participants / 1000).toFixed(1) }}k人参与</span>
                            </div>
                            <div class="flex items-center space-x-3 text-gray-500 text-sm">
                                <span><i class="far fa-comment mr-1"></i>{{ topic.comments }}</span>
                                <span><i class="far fa-clock mr-1"></i>{{ topic.createdAt }}</span>
                            </div>
                        </div>
                    </div>
                    <div class="mt-3 md:mt-0 md:ml-4 flex flex-col justify-center">
                        <button 
                          :id="`join-topic-${topic.id}`" 
                          class="join-topic-btn bg-primary hover:bg-secondary text-white px-4 py-2 rounded-lg btn-primary-effect" 
                          :data-topic-id="topic.id"
                          @click="joinTopic(topic.id)"
                        >
                            <i class="fas fa-plus mr-1"></i> 参与讨论
                        </button>
                    </div>
                </div>
              </div>
            </div>
            
            <!-- 分页 -->
            <div class="flex justify-center mt-6">
                <nav id="pagination" class="flex items-center bg-white rounded-lg shadow-sm p-1">
                    <a 
                      href="#" 
                      id="prev-page" 
                      class="w-9 h-9 flex items-center justify-center text-gray-500 rounded-lg hover:bg-gray-100"
                      :class="{ 'opacity-50 pointer-events-none': pagination.currentPage === 1 }"
                      @click.prevent="changePage(pagination.currentPage - 1)"
                    >
                        <i class="fas fa-chevron-left"></i>
                    </a>
                    
                    <template v-for="page in pagination.totalPages" :key="page">
                      <a 
                        v-if="page === 1 || page === pagination.totalPages || (page >= pagination.currentPage - 1 && page <= pagination.currentPage + 1)"
                        href="#" 
                        :id="`page-${page}`" 
                        class="w-9 h-9 flex items-center justify-center text-gray-700 rounded-lg hover:bg-gray-100"
                        :class="{ 'text-white bg-primary': page === pagination.currentPage }"
                        @click.prevent="changePage(page)"
                      >
                        {{ page }}
                      </a>
                      
                      <span 
                        v-else-if="page === pagination.currentPage - 2 || page === pagination.currentPage + 2"
                        class="w-9 h-9 flex items-center justify-center text-gray-500"
                      >
                        ...
                      </span>
                    </template>
                    
                    <a 
                      href="#" 
                      id="next-page" 
                      class="w-9 h-9 flex items-center justify-center text-gray-500 rounded-lg hover:bg-gray-100"
                      :class="{ 'opacity-50 pointer-events-none': pagination.currentPage === pagination.totalPages }"
                      @click.prevent="changePage(pagination.currentPage + 1)"
                    >
                        <i class="fas fa-chevron-right"></i>
                    </a>
                </nav>
            </div>
        </div>
</template>

<style lang="scss">
@import '../../../style.scss';


.topic-title{
  color: black;
  font-weight: 700;
}

.topic-card { 
    text-align: left;
}

.desc{
    text-align: left;
}

// 基础布局类
.flex {
  display: flex;
}

.flex-col {
  flex-direction: column;
}

.items-center {
  align-items: center;
}

.justify-between {
  justify-content: space-between;
}

.justify-center {
  justify-content: center;
}

.min-w-0 {
  min-width: 0;
}

.flex-1 {
  flex: 1;
}

// 显示控制类
.hidden {
  display: none;
}

.md\:flex {
  @media (min-width: 768px) {
    display: flex;
  }
}

.md\:flex-row {
  @media (min-width: 768px) {
    flex-direction: row;
  }
}

.md\:mt-0 {
  @media (min-width: 768px) {
    margin-top: 0;
  }
}

.md\:ml-4 {
  @media (min-width: 768px) {
    margin-left: 1rem;
  }
}

// 尺寸与间距类
.mt-3 {
  margin-top: 0.75rem;
}

.mb-4 {
  margin-bottom: 1rem;
}

.mb-2 {
  margin-bottom: 0.5rem;
}

.mb-3 {
  margin-bottom: 0.75rem;
}

.ml-2 {
  margin-left: 0.5rem;
}

.mr-2 {
  margin-right: 0.5rem;
}

.mr-1 {
  margin-right: 0.25rem;
}

.mt-6 {
  margin-top: 1.5rem;
}

.space-x-3 > * + * {
  margin-left: 0.75rem;
}

.-space-x-3 > * + * {
  margin-left: -0.75rem;
}

.gap-2 {
  gap: 0.5rem;
}

.p-5 {
  padding: 1.25rem;
}

.p-1 {
  padding: 0.25rem;
}

.p-4 {
  padding: 1rem;
}

.px-3 {
  padding-left: 0.75rem;
  padding-right: 0.75rem;
}

.py-1\.5 {
  padding-top: 0.375rem;
  padding-bottom: 0.375rem;
}

.px-4 {
  padding-left: 1rem;
  padding-right: 1rem;
}

.py-2 {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}

.px-2 {
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}

.py-1 {
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
}

.w-6 {
  width: 1.5rem;
}

.h-6 {
  height: 1.5rem;
}

.w-9 {
  width: 2.25rem;
}

.h-9 {
  height: 2.25rem;

}

.w-full {
  width: 100%;
}

// 文本样式类
.text-xl {
  font-size: $text-xl;
}

.text-lg {
  font-size: $text-lg;
}

.text-sm {
  font-size: $text-sm;
}

.text-xs {
  font-size: $text-xs;
}

.font-bold {
  font-weight: 700;
}

// 颜色类
.text-gray-800 {
  color: $gray-800;
}

.text-gray-600 {
  color: $gray-600;
}

.text-gray-500 {
  color: $gray-500;
}

.text-gray-700 {
  color: $gray-700;
}

.text-white {
  color: white;
}

.text-primary {
  color: $primary;
}

.bg-white {
  background-color: white;
}

.bg-gray-100 {
  background-color: $gray-100;
}

.bg-gray-200 {
  background-color: $gray-200;
}

.bg-primary {
  background-color: $primary;
}

// 背景透明度
.bg-opacity-10 {
  opacity: 0.6;  //0.1
}

// 圆角类
.rounded-lg {
  border-radius: 0.5rem;
}

.rounded-full {
  border-radius: 9999px;
}

.rounded-xl {
  border-radius: $rounded-xl;
}

// 边框类
.border-b {
  border-bottom: 1px solid;
}

.border-2 {
  border-width: 2px;
}

.border-gray-200 {
  border-color: $gray-200;
}

.border-white {
  border-color: white;
}

// 阴影类
.shadow-card {
  box-shadow: $shadow-card;
}

.shadow-sm {
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
}

// 溢出控制
.overflow-hidden {
  overflow: hidden;
}

// 对象适应
.object-cover {
  object-fit: cover;
}

// 过渡效果
.transition-colors {
  transition-property: color, background-color;
  transition-duration: 0.2s;
  transition-timing-function: ease;
}

// 悬停效果
.hover\:text-primary:hover {
  color: $primary;
}

.hover\:bg-secondary:hover {
  background-color: $secondary;
}

.hover\:bg-gray-100:hover {
  background-color: $gray-100;
}

// 按钮特效
.btn-primary-effect {
  box-shadow: $shadow-btn;
  transition: all 0.2s ease;
  
  &:hover {
    box-shadow: $shadow-hover;
    transform: translateY(-1px);
  }
}

// Flex wrap
.flex-wrap {
  flex-wrap: wrap;
}

// Cursor
.cursor-pointer {
  cursor: pointer;
}

  .card-hover {
            transition: all 0.3s ease;
        }
        
        .card-hover:hover {
            transform: translateY(-3px);
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
        }
        
        .tag {
            transition: all 0.2s ease;
        }
        
        .tag:hover {
            background-color: rgba(79, 70, 229, 0.1);
            color: #4F46E5;
        }
        
        .nav-link {
            position: relative;
            transition: all 0.2s ease;
        }
        
        .nav-link.active::after {
            content: '';
            position: absolute;
            bottom: -6px;
            left: 0;
            width: 100%;
            height: 2px;
            background-color: #4F46E5;
        }
        
        .nav-link:hover:not(.active)::after {
            content: '';
            position: absolute;
            bottom: -6px;
            left: 0;
            width: 100%;
            height: 2px;
            background-color: #6366F1;
            transform: scaleX(0.7);
            opacity: 0.7;
            transition: all 0.2s ease;
        }
        
        .btn-primary-effect {
            transition: all 0.2s ease;
        }
        
        .btn-primary-effect:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 8px rgba(79, 70, 229, 0.3);
        }
        
        .topic-card {
            transition: all 0.2s ease;
        }
        
        .topic-card:hover {
            background-color: rgba(243, 244, 246, 0.5);
        }
        
        .avatar-stack .avatar:not(:first-child) {
            margin-left: -12px;
        }
        
        .discussion-card {
            border-bottom: 1px solid #E5E7EB;
            transition: all 0.2s ease;
        }
        
        .discussion-card:hover {
            background-color: rgba(243, 244, 246, 0.5);
        }


#sort-hot {
  color:$primary;
  background-color: white;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: $gray-200;
    color: $primary;
    transform: translateY(-1px);
  }
  
  &:active {
    transform: translateY(1px);
    background-color: $gray-200;
  }
}

#sort-new {
  color: $gray-600;
  background-color: white;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: $gray-200;
    color: $primary;
    transform: translateY(-1px);
  }
  
  &:active {
    transform: translateY(1px);
  }
}

// 基础布局类
.flex {
  display: flex;
}

.flex-col {
  flex-direction: column;
}

.items-center {
  align-items: center;
}

.justify-between {
  justify-content: space-between;
}

.justify-center {
  justify-content: center;
}

.min-w-0 {
  min-width: 0;
}

.flex-1 {
  flex: 1;
}

// 显示控制类
.hidden {
  display: none;
}

.md\:flex {
  @media (min-width: 768px) {
    display: flex;
  }
}

.md\:flex-row {
  @media (min-width: 768px) {
    flex-direction: row;
  }
}

.md\:mt-0 {
  @media (min-width: 768px) {
    margin-top: 0;
  }
}

.md\:ml-4 {
  @media (min-width: 768px) {
    margin-left: 1rem;
  }
}

// 尺寸与间距类
.mt-3 {
  margin-top: 0.75rem;
}

.mb-4 {
  margin-bottom: 1rem;
}

.mb-2 {
  margin-bottom: 0.5rem;
}

.mb-3 {
  margin-bottom: 0.75rem;
}

.ml-2 {
  margin-left: 0.5rem;
}

.mr-2 {
  margin-right: 0.5rem;
}

.mr-1 {
  margin-right: 0.25rem;
}

.mt-6 {
  margin-top: 1.5rem;
}

.space-x-3 > * + * {
  margin-left: 0.75rem;
}

.-space-x-3 > * + * {
  margin-left: -0.75rem;
}

.gap-2 {
  gap: 0.5rem;
}

.p-5 {
  padding: 1.25rem;
}

.p-1 {
  padding: 0.25rem;
}

.p-4 {
  padding: 1rem;
}

.px-3 {
  padding-left: 0.75rem;
  padding-right: 0.75rem;
}

.py-1\.5 {
  padding-top: 0.375rem;
  padding-bottom: 0.375rem;
}

.px-4 {
  padding-left: 1rem;
  padding-right: 1rem;
}

.py-2 {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}

.px-2 {
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}

.py-1 {
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
}

.w-6 {
  width: 1.5rem;
}

.h-6 {
  height: 1.5rem;
}

.w-9 {
  width: 2.25rem;
}

.h-9 {
  height: 2.25rem;

}

.w-full {
  width: 100%;
}

// 文本样式类
.text-xl {
  font-size: $text-xl;
}

.text-lg {
  font-size: $text-lg;
}

.text-sm {
  font-size: $text-sm;
}

.text-xs {
  font-size: $text-xs;
}

.font-bold {
  font-weight: 700;
}

// 颜色类
.text-gray-800 {
  color: $gray-800;
}

.text-gray-600 {
  color: $gray-600;
}

.text-gray-500 {
  color: $gray-500;
}

.text-gray-700 {
  color: $gray-700;
}

.text-white {
  color: white;
}

.text-primary {
  color: $primary;
}

.bg-white {
  background-color: white;
}

.bg-gray-100 {
  background-color: $gray-100;
}

.bg-gray-200 {
  background-color: $gray-200;
}

.bg-primary {
  background-color: $primary;
}

// 背景透明度
.bg-opacity-10 {
  opacity: 100%;  //0.1
}

// 圆角类
.rounded-lg {
  border-radius: 0.5rem;
}

.rounded-full {
  border-radius: 9999px;
}

.rounded-xl {
  border-radius: $rounded-xl;
}

// 边框类
.border-b {
  border-bottom: 1px solid;
}

.border-2 {
  border-width: 2px;
}

.border-gray-200 {
  border-color: $gray-200;
}

.border-white {
  border-color: white;
}

// 阴影类
.shadow-card {
  box-shadow: $shadow-card;
}

.shadow-sm {
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
}

// 溢出控制
.overflow-hidden {
  overflow: hidden;
}

// 对象适应
.object-cover {
  object-fit: cover;
}

// 过渡效果
.transition-colors {
  transition-property: color, background-color;
  transition-duration: 0.2s;
  transition-timing-function: ease;
}

// 悬停效果
.hover\:text-primary:hover {
  color: $primary;
}

.hover\:bg-secondary:hover {
  background-color: $secondary;
}

.hover\:bg-gray-100:hover {
  background-color: $gray-100;
}

// 按钮特效
.btn-primary-effect {
  box-shadow: $shadow-btn;
  transition: all 0.2s ease;
  
  &:hover {
    box-shadow: $shadow-hover;
    transform: translateY(-1px);
  }
}

// Flex wrap
.flex-wrap {
  flex-wrap: wrap;
}

// Cursor
.cursor-pointer {
  cursor: pointer;
}

  .card-hover {
            transition: all 0.3s ease;
        }
        
        .card-hover:hover {
            transform: translateY(-3px);
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
        }
        
        .tag {
            transition: all 0.2s ease;
        }
        
        .tag:hover {
            background-color: rgba(79, 70, 229, 0.1);
            color: #4F46E5;
        }
        
        .nav-link {
            position: relative;
            transition: all 0.2s ease;
        }
        
        .nav-link.active::after {
            content: '';
            position: absolute;
            bottom: -6px;
            left: 0;
            width: 100%;
            height: 2px;
            background-color: #4F46E5;
        }
        
        .nav-link:hover:not(.active)::after {
            content: '';
            position: absolute;
            bottom: -6px;
            left: 0;
            width: 100%;
            height: 2px;
            background-color: #6366F1;
            transform: scaleX(0.7);
            opacity: 0.7;
            transition: all 0.2s ease;
        }
        
        .btn-primary-effect {
            transition: all 0.2s ease;
        }
        
        .btn-primary-effect:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 8px rgba(79, 70, 229, 0.3);
        }
        
        .topic-card {
            transition: all 0.2s ease;
        }
        
        .topic-card:hover {
            background-color: rgba(243, 244, 246, 0.5);
        }
        
        .avatar-stack .avatar:not(:first-child) {
            margin-left: -12px;
        }
        
        .discussion-card {
            border-bottom: 1px solid #E5E7EB;
            transition: all 0.2s ease;
        }
        
        .discussion-card:hover {
            background-color: rgba(243, 244, 246, 0.5);
        }


</style>