<script setup>

import { useRouter } from 'vue-router';

import { ref, onMounted } from 'vue';

const router = useRouter();

const backtotopics = () => {
    router.push('/');
}

const initializeData = () => {
  relatedArticles.value = mockArticles
  comments.value = mockComments
  mockComments.forEach(comment => {
    replyStates.value[comment.id] = false
  })
}

onMounted(() => {
  initializeData()
})


// 话题数据
const topicData = ref({
  id: 1,
  title: '大型语言模型与AI应用',
  description: '讨论大型语言模型(LLM)的发展趋势、应用场景及实践经验，分享最新的模型训练、微调和部署技术。欢迎分享您在AI领域的研究成果、实践经验或遇到的挑战。',
  tags: ['LLM', 'AI', 'GPT', '人工智能'],
  creator: {
    name: 'Sarah Lin',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=64&q=80',
    createdAt: '2023-10-20'
  },
  stats: {
    participants: 1200,
    discussions: 128
  },
  isFollowed: false
})

// 添加 currentUser 数据
const currentUser = ref({
  name: 'Current User',
  avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80'
})

// 相关文章数据
const relatedArticles = ref([])

// 评论数据
const comments = ref([])

// 分页数据
const pagination = ref({
  currentPage: 1,
  totalPages: 5,
  totalComments: 36
})

// 排序选项
const sortOption = ref('latest')

// 新评论内容
const newComment = ref('')

// 回复相关数据
const replyStates = ref({})

// Mock数据
const mockArticles = [
  {
    id: 1,
    title: 'LLM大模型微调技术实战：从理论到实践',
    summary: '详细介绍了大型语言模型(LLM)的微调技术，包括LoRA、QLoRA等低资源微调方法，以及如何在消费级GPU上进行有效的模型定制训练。',
    author: {
      name: 'Sarah Lin',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=64&q=80'
    },
    stats: {
      views: 3100,
      likes: 458,
      comments: 72
    }
  },
  {
    id: 2,
    title: '大型语言模型在企业应用中的落地实践',
    summary: '探讨了大型语言模型在企业级应用中的实际落地案例，包括客服机器人、内容生成、知识管理等场景，以及如何解决数据安全、成本控制等问题。',
    author: {
      name: 'Michael Wu',
      avatar: 'https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=64&q=80'
    },
    stats: {
      views: 2800,
      likes: 386,
      comments: 58
    }
  },
  {
    id: 3,
    title: '开源LLM模型对比：Llama 2 vs Falcon vs MPT',
    summary: '全面对比了目前主流的开源大语言模型，包括性能、参数规模、训练数据、部署要求等方面，帮助开发者选择适合自己项目的模型。',
    author: {
      name: 'Alex Zhang',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=64&q=80'
    },
    stats: {
      views: 2500,
      likes: 342,
      comments: 45
    }
  }
]

const mockComments = [
  {
    id: 1,
    author: {
      name: 'Sarah Lin',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=64&q=80',
      createdAt: '2023-10-22 14:35'
    },
    content: '最近在尝试使用LoRA方法微调Llama 2模型，在消费级GPU上也能取得不错的效果。有没有人尝试过在更小的参数规模（7B或13B）上做领域适应的微调？想了解一下大家的经验和最佳实践。',
    likes: 45,
    isLiked: false,
    replies: [
      {
        id: 1001,
        author: {
          name: 'Alex Zhang',
          avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=64&q=80',
          createdAt: '2023-10-22 15:10'
        },
        content: '我最近在7B模型上做了医疗领域的微调，使用QLoRA方法，4位量化后在单张RTX 3090上就能跑。关键是准备高质量的领域数据，我发现指令微调比继续预训练效果更好，特别是对于特定任务。',
        likes: 12,
        isLiked: false
      },
      {
        id: 1002,
        author: {
          name: 'Michael Wu',
          avatar: 'https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=64&q=80',
          createdAt: '2023-10-22 16:25'
        },
        content: '补充一点，如果是做垂直领域的微调，建议先用领域数据做继续预训练，再用任务数据做指令微调，这样效果会更好。我们在金融领域试过这种方法，效果提升明显。',
        likes: 8,
        isLiked: false
      }
    ]
  },
  {
    id: 2,
    author: {
      name: 'David Chen',
      avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=64&q=80',
      createdAt: '2023-10-21 09:15'
    },
    content: '大家对于AI Agent的发展有什么看法？我觉得LLM+Agent是未来一个重要方向，特别是结合工具使用和环境交互的能力，可以大大扩展LLM的应用场景。最近看到一些开源项目如AutoGPT、BabyAGI等，都在这个方向上做探索。',
    likes: 38,
    isLiked: false,
    replies: [
      {
        id: 2001,
        author: {
          name: 'Jason Chen',
          avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=64&q=80',
          createdAt: '2023-10-21 10:30'
        },
        content: '完全同意，Agent是LLM走向实际应用的关键。不过目前还存在一些挑战，比如如何让Agent更可靠地执行复杂任务，如何处理长期规划和记忆等。我认为ReAct和Chain-of-Thought等提示工程技术在这方面很有潜力。',
        likes: 15,
        isLiked: false
      }
    ]
  },
  {
    id: 3,
    author: {
      name: 'Emily Wang',
      avatar: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=64&q=80',
      createdAt: '2023-10-20 16:45'
    },
    content: '分享一个我们团队最近在做的项目：使用LLM构建知识库问答系统。我们尝试了向量数据库+检索增强生成(RAG)的方案，效果比直接使用LLM好很多，特别是在处理专业领域知识时。有人有类似经验吗？我们现在遇到的主要问题是如何提高检索的精度和相关性。',
    likes: 27,
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
const submitComment = () => {
  if (newComment.value.trim() === '') return
  
  // 创建新评论对象
  const comment = {
    id: comments.value.length + 1,
    author: {
      name: currentUser.value.name,
      avatar: currentUser.value.avatar,
      createdAt: new Date().toLocaleDateString('zh-CN') + ' ' + new Date().toTimeString().slice(0, 5)
    },
    content: newComment.value,
    likes: 0,
    isLiked: false,
    replies: []
  }
  
  // 将新评论添加到评论列表的开头
  comments.value.unshift(comment)
  
  // 清空输入框
  newComment.value = ''
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


const submitReply = (commentId, replyContent) => {
  // 在实际应用中，replyContent 应该从输入框获取
  // 这里为了简化，我们使用一个固定值
  const replyInput = document.querySelector(`#reply-input-${commentId} textarea`)
  const content = replyInput ? replyInput.value : '回复内容'
  
  if (content.trim() === '') return
  
  // 找到对应的评论
  const comment = comments.value.find(c => c.id === commentId)
  if (comment) {
    // 创建新回复对象
    const reply = {
      id: Date.now(), // 使用时间戳作为唯一ID
      author: {
        name: currentUser.value.name,
        avatar: currentUser.value.avatar,
        createdAt: new Date().toLocaleDateString('zh-CN') + ' ' + new Date().toTimeString().slice(0, 5)
      },
      content: content,
      likes: 0,
      isLiked: false
    }
    
    // 将新回复添加到评论的回复列表中
    comment.replies.push(reply)
    
    // 清空输入框并隐藏回复区域
    if (replyInput) replyInput.value = ''
    replyStates.value[commentId] = false
  }
}

// 页面切换
const changePage = (page) => {
  if (page >= 1 && page <= totalPages.value) {
    fetchComments(page)
  }
}

// 模拟关注/取消关注的API
const followAPI = {
  async followTopic(topicId) {
    // 模拟网络请求
    await new Promise(resolve => setTimeout(resolve, 300))
    return { success: true }
  },
  
  async unfollowTopic(topicId) {
    // 模拟网络请求
    await new Promise(resolve => setTimeout(resolve, 300))
    return { success: true }
  }
}

// 添加关注话题的方法
const toggleFollow = async () => {
  try {
    if (topicData.value.isFollowed) {
      // 取消关注
      await followAPI.unfollowTopic(topicData.value.id)
      topicData.value.isFollowed = false
    } else {
      // 关注
      await followAPI.followTopic(topicData.value.id)
      topicData.value.isFollowed = true
    }
  } catch (error) {
    console.error('关注操作失败:', error)
  }
}

// 初始化
onMounted(() => {
  fetchComments()
})

</script>

<template>
    
            <!-- 话题详情视图 - 默认隐藏 -->
            <div id="topic-detail-view" > <!--class="hidden"-->
                <!-- 话题详情头部 -->
                <div class="flex items-center mb-4">
                    <button id="back-to-topics" class="text-gray-600 hover:text-primary mr-3" @click="backtotopics()">
                        <i class="fas fa-arrow-left"></i>
                    </button>
                    <h2 class="text-xl font-bold text-gray-800 flex-1" style="text-align: left">
                        <span id="detail-topic-title"># {{ topicData.title }}</span>
                    </h2>
                    <button 
  id="follow-topic" 
  class="text-primary border border-primary px-3 py-1 rounded-lg hover:bg-primary hover:bg-opacity-10 mr-2 transition-colors"
  @click="toggleFollow"
  :disabled="followingLoading"
>
  <i class="fas fa-spinner fa-spin mr-1" v-if="followingLoading"></i>
  <i class="fas fa-plus mr-1" v-else-if="!topicData.isFollowed"></i>
  {{ topicData.isFollowed ? '已关注' : '关注话题' }}
</button>
                    <button id="share-topic" class="text-gray-600 hover:text-primary">
                        <i class="fas fa-share-alt"></i>
                    </button>
                </div>
                
                <!-- 话题详情内容 -->
                <div class="bg-white rounded-xl shadow-card p-5 mb-6">
                    <div id="topic-description" class="text-gray-700 mb-4" style="text-align: left;">
                        {{ topicData.description }}
                    </div>
                    <div class="flex flex-wrap gap-2 mb-4">
                        <span v-for="(tag, index) in topicData.tags" :key="index" class="tag text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded-full">{{ tag }}</span>
                    </div>
                    <div class="flex items-center justify-between text-sm text-gray-500">
                        <div class="flex items-center">
                            <img :src="topicData.creator.avatar" alt="创建者头像" class="w-6 h-6 rounded-full object-cover">
                            <span class="ml-2">{{ topicData.creator.name }} 创建于 {{ topicData.creator.createdAt }}</span>
                        </div>
                        <div class="flex items-center">
                            <span><i class="fas fa-users mr-1"></i>{{ (topicData.stats.participants / 1000).toFixed(1) }}k人参与</span>
                            <span class="mx-3">|</span>
                            <span><i class="far fa-comment mr-1"></i>{{ topicData.stats.discussions }}条讨论</span>
                        </div>
                    </div>
                </div>
                
                <!-- 相关文章 -->
                <div class="mb-6" style="text-align: left;">
                    <h3 class="text-lg font-bold text-gray-800 mb-3">相关文章</h3>
                    <div class="bg-white rounded-xl shadow-card overflow-hidden">
                        <!-- 使用 v-for 动态渲染相关文章 -->
                        <div v-for="article in relatedArticles" :key="article.id" class="discussion-card p-4">
                            <div class="flex flex-col md:flex-row">
                                <div class="flex-1 min-w-0">
                                    <h4 class="text-base font-bold mb-1 hover:text-primary transition-colors">
                                        <a href="P-ARTICLE_DETAIL.html?article_id=1" :id="`related-article-${article.id}`">{{ article.title }}</a>
                                    </h4>
                                    <p class="text-gray-600 text-sm mb-2 line-clamp-2">{{ article.summary }}</p>
                                    <div class="flex items-center justify-between">
                                        <div class="flex items-center">
                                            <img :src="article.author.avatar" alt="作者头像" class="w-5 h-5 rounded-full object-cover">
                                            <span class="text-gray-700 text-xs ml-2">{{ article.author.name }}</span>
                                        </div>
                                        <div class="flex items-center space-x-3 text-gray-500 text-xs">
                                            <span><i class="far fa-eye mr-1"></i>{{ (article.stats.views / 1000).toFixed(1) }}k</span>
                                            <span><i class="far fa-thumbs-up mr-1"></i>{{ article.stats.likes }}</span>
                                            <span><i class="far fa-comment mr-1"></i>{{ article.stats.comments }}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- 讨论区 -->
                <div>
                    <div class="flex items-center justify-between mb-3">
                        <h3 class="text-lg font-bold text-gray-800">讨论区</h3>
                        <div class="flex items-center space-x-3">
                            <select id="discussion-sort" class="text-sm border border-gray-300 rounded-lg px-3 py-1.5 bg-white focus:outline-none focus:ring-2 focus:ring-primary">
                                <option value="latest">最新</option>
                                <option value="hot">热门</option>
                            </select>
                        </div>
                    </div>
                    
                    <!-- 发表评论 -->
<div class="bg-white rounded-xl shadow-card p-4 mb-4">
    <div class="flex">
        <img :src="currentUser.avatar" alt="用户头像" class="w-10 h-10 rounded-full object-cover">
        <div class="ml-3 flex-1">
            <textarea id="comment-input" class="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-primary resize-none" rows="3" placeholder="分享你的观点和经验..." v-model="newComment"></textarea>
            <div class="flex justify-end mt-2">
                <button id="post-comment" class="bg-primary hover:bg-secondary text-white px-4 py-2 rounded-lg btn-primary-effect" @click="submitComment" :disabled="!newComment.trim()">
                    发表评论
                </button>
            </div>
        </div>
    </div>
</div>
                    
                    <!-- 评论列表 -->
                    <div class="bg-white rounded-xl shadow-card overflow-hidden" style="text-align: left;">
                        <!-- 使用 v-for 动态渲染评论 -->
                        <div v-for="comment in comments" :key="comment.id" :id="`comment-${comment.id}`" class="discussion-card p-4">
                            <div class="flex">
                                <img :src="comment.author.avatar" :alt="`${comment.author.name}头像`" class="w-10 h-10 rounded-full object-cover">
                                <div class="ml-3 flex-1">
                                    <div class="flex items-center justify-between">
                                        <div class="flex items-center">
                                            <h4 class="font-medium text-gray-800">{{ comment.author.name }}</h4>
                                            <span class="text-xs text-gray-500 ml-2">{{ comment.author.createdAt }}</span>
                                        </div>
                                        <div class="flex items-center space-x-2">
                                            <button :id="`like-comment-${comment.id}`" class="text-gray-500 hover:text-primary" @click="likeComment(comment)" :class="{ 'text-primary': comment.isLiked }">
                                                <i class="far fa-thumbs-up mr-1"></i>{{ comment.likes }}
                                            </button>
                                            <button :id="`reply-comment-${comment.id}`" class="text-gray-500 hover:text-primary" @click="toggleReply(comment.id)">
                                                <i class="far fa-comment mr-1"></i>回复
                                            </button>
                                        </div>
                                    </div>
                                    <div class="text-gray-700 mt-2">
                                        {{ comment.content }}
                                    </div>
                                    
                                    <!-- 回复区域 -->
                                    <div v-if="comment.replies && comment.replies.length > 0" class="mt-3 pl-4 border-l-2 border-gray-200">
                      
                                        <div v-for="reply in comment.replies" :key="reply.id" :id="`reply-${comment.id}-${reply.id}`" class="mb-3">
                                            <div class="flex items-center justify-between">
                                                <div class="flex items-center">
                                                    <img :src="reply.author.avatar" :alt="`${reply.author.name}头像`" class="w-6 h-6 rounded-full object-cover">
                                                    <h5 class="font-medium text-gray-800 text-sm ml-2">{{ reply.author.name }}</h5>
                                                    <span class="text-xs text-gray-500 ml-2">{{ reply.author.createdAt }}</span>
                                                </div>
                                                <div class="flex items-center space-x-2">
                                                    <button :id="`like-reply-${comment.id}-${reply.id}`" class="text-gray-500 hover:text-primary text-xs" @click="likeReply(reply)" :class="{ 'text-primary': reply.isLiked }">
                                                        <i class="far fa-thumbs-up mr-1"></i>{{ reply.likes }}
                                                    </button>
                                                    <button :id="`reply-to-reply-${comment.id}-${reply.id}`" class="text-gray-500 hover:text-primary text-xs" @click="toggleReply(comment.id)">
                                                        <i class="far fa-comment mr-1"></i>回复
                                                    </button>
                                                </div>
                                            </div>
                                            <div class="text-gray-700 text-sm mt-1">
                                                {{ reply.content }}
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <!-- 将回复输入框部分替换为以下代码 -->
<!-- 回复输入框 - 根据状态显示/隐藏 -->
<div :id="`reply-input-${comment.id}`" class="mt-2" :class="{ 'hidden': !replyStates[comment.id] }">
    <div class="flex">
        <img :src="currentUser.avatar" alt="用户头像" class="w-6 h-6 rounded-full object-cover">
        <div class="ml-2 flex-1">
            <textarea class="w-full border border-gray-300 rounded-lg p-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary resize-none" rows="2" :placeholder="`回复 ${comment.author.name}...`"></textarea>
            <div class="flex justify-end mt-1">
                <button :id="`cancel-reply-${comment.id}`" class="text-gray-500 hover:text-gray-700 text-xs mr-2" @click="toggleReply(comment.id)">
                    取消
                </button>
                <button :id="`submit-reply-${comment.id}`" class="bg-primary hover:bg-secondary text-white px-3 py-1 rounded-lg text-xs" @click="submitReply(comment.id)">
                    回复
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
                    <div class="flex justify-center mt-6">
                        <nav id="comment-pagination" class="flex items-center bg-white rounded-lg shadow-sm p-1">
                            <a href="#" id="comment-prev-page" class="w-9 h-9 flex items-center justify-center text-gray-500 rounded-lg hover:bg-gray-100">
                                <i class="fas fa-chevron-left"></i>
                            </a>
                            <template v-for="page in pagination.totalPages" :key="page">
                                <a 
                                    v-if="page === 1 || page === pagination.totalPages || (page >= pagination.currentPage - 1 && page <= pagination.currentPage + 1)"
                                    href="#" 
                                    :id="`comment-page-${page}`" 
                                    class="w-9 h-9 flex items-center justify-center text-gray-700 rounded-lg hover:bg-gray-100"
                                    :class="{ 'text-white bg-primary': page === pagination.currentPage }"
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
                            <a href="#" id="comment-next-page" class="w-9 h-9 flex items-center justify-center text-gray-500 rounded-lg hover:bg-gray-100">
                                <i class="fas fa-chevron-right"></i>
                            </a>
                        </nav>
                    </div>
                </div>
            </div>
</template>



<style lang="scss" scoped>
@import '../../../style.scss';

.discussion-card {
  border-radius: $rounded-xl;
  box-shadow: $shadow-card;
  background-color: #fff;
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: $shadow-hover;
  }

  .line-clamp-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  h4 {
    a {
      text-decoration: none;
      color: inherit;

      &:hover {
        color: $primary;
      }
    }
  }

  img {
    border-radius: 50%;
  }

  .text-gray-600 {
    color: $gray-600;
  }

  .text-gray-700 {
    color: $gray-700;
  }

  .text-gray-500 {
    color: $gray-500;
  }

  .text-xs {
    font-size: $text-xs;
  }

  .text-sm {
    font-size: $text-sm;
  }

  .text-base {
    font-size: $text-base;
  }

  .font-bold {
    font-weight: 700;
  }

  .transition-colors {
    transition: color 0.2s ease;
  }

  .flex {
    display: flex;
  }

  .flex-col {
    flex-direction: column;
  }

  .md\:flex-row {
    @media (min-width: 768px) {
      flex-direction: row;
    }
  }

  .flex-1 {
    flex: 1;
  }

  .min-w-0 {
    min-width: 0;
  }

  .items-center {
    align-items: center;
  }

  .justify-between {
    justify-content: space-between;
  }

  .space-x-3 > :not([hidden]) ~ :not([hidden]) {
    margin-left: 0.75rem;
  }

  .mb-1 {
    margin-bottom: 0.25rem;
  }

  .mb-2 {
    margin-bottom: 0.5rem;
  }

  .ml-2 {
    margin-left: 0.5rem;
  }

  .w-5 {
    width: 1.25rem;
  }

  .h-5 {
    height: 1.25rem;
  }

  .rounded-full {
    border-radius: 50%;
  }

  .object-cover {
    object-fit: cover;
  }

  .p-4 {
    padding: 1rem;
  }
  .title{
    text-align: left;
    color: black
  }
}

.discussion-card {
  border-radius: $rounded-xl;
  box-shadow: $shadow-card;
  background-color: #fff;
  transition: box-shadow 0.3s ease;
  margin-bottom: 1rem;

  &:hover {
    box-shadow: $shadow-hover;
  }

  .w-10 {
    width: 2.5rem; // 10 * 0.25rem
  }

  .h-10 {
    height: 2.5rem; // 10 * 0.25rem
  }

  .w-6 {
    width: 1.5rem; // 6 * 0.25rem
  }

  .h-6 {
    height: 1.5rem; // 6 * 0.25rem
  }

  .rounded-full {
    border-radius: 50%;
  }

  .object-cover {
    object-fit: cover;
  }

  .ml-3 {
    margin-left: 0.75rem; // 3 * 0.25rem
  }

  .ml-2 {
    margin-left: 0.5rem; // 2 * 0.25rem
  }

  .mt-2 {
    margin-top: 0.5rem; // 2 * 0.25rem
  }

  .mt-3 {
    margin-top: 0.75rem; // 3 * 0.25rem
  }

  .mb-3 {
    margin-bottom: 0.75rem; // 3 * 0.25rem
  }

  .ml-4 {
    margin-left: 1rem; // 4 * 0.25rem
  }

  .mt-1 {
    margin-top: 0.25rem; // 1 * 0.25rem
  }

  .mr-1 {
    margin-right: 0.25rem; // 1 * 0.25rem
  }

  .mr-2 {
    margin-right: 0.5rem; // 2 * 0.25rem
  }

  .p-4 {
    padding: 1rem; // 4 * 0.25rem
  }

  .p-2 {
    padding: 0.5rem; // 2 * 0.25rem
  }

  .pl-4 {
    padding-left: 1rem; // 4 * 0.25rem
  }

  .px-3 {
    padding-left: 0.75rem; // 3 * 0.25rem
    padding-right: 0.75rem; // 3 * 0.25rem
  }

  .py-1 {
    padding-top: 0.25rem; // 1 * 0.25rem
    padding-bottom: 0.25rem; // 1 * 0.25rem
  }

  .flex {
    display: flex;
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

  .space-x-2 > :not([hidden]) ~ :not([hidden]) {
    margin-left: 0.5rem; // 2 * 0.25rem
  }

  .border-l-2 {
    border-left-width: 2px;
  }

  .border-gray-200 {
    border-color: $gray-200;
  }

  .border {
    border-width: 1px;
  }

  .border-gray-300 {
    border-color: $gray-300;
  }

  .rounded-lg {
    border-radius: 0.5rem;
  }

  .text-gray-800 {
    color: $gray-800;
  }

  .text-gray-700 {
    color: $gray-700;
  }

  .text-gray-500 {
    color: $gray-500;
  }

  .text-xs {
    font-size: $text-xs; // 0.75rem
  }

  .text-sm {
    font-size: $text-sm; // 0.875rem
  }

  .font-medium {
    font-weight: 500;
  }

  .resize-none {
    resize: none;
  }

  .focus\:outline-none:focus {
    outline: 2px solid transparent;
    outline-offset: 2px;
  }

  .focus\:ring-2:focus {
    --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
    --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
    box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
  }

  .focus\:ring-primary:focus {
    --tw-ring-opacity: 1;
    --tw-ring-color: rgba(79, 70, 229, var(--tw-ring-opacity)); // $primary
  }

  .bg-primary {
    background-color: $primary;
  }

  .hover\:bg-secondary:hover {
    background-color: $secondary;
  }

  .text-white {
    color: #fff;
  }

  .hover\:text-primary:hover {
    color: $primary;
  }

  .hover\:text-gray-700:hover {
    color: $gray-700;
  }

  .w-full {
    width: 100%;
  }

  .hidden {
    display: none;
  }

  textarea {
    font-family: $font-sans;
    
    &::placeholder {
      color: $gray-400;
    }
  }

  button {
    cursor: pointer;
    border: none;
    background: none;
    font-family: $font-sans;
  }
  .commenta{
    border-left-style: solid;
  }
  .mcomment{ 
    text-align: left;
  }
}

#topic-detail-view {
  font-family: $font-sans;
  display: block;
  padding-top: 3rem;
}
  // 基础文本样式
  .text-gray-600 {
    color: $gray-600;
  }
  
  .text-gray-800 {
    color: $gray-800;
  }
  
  .text-gray-700 {
    color: $gray-700;
  }
  
  .text-gray-500 {
    color: $gray-500;
  }
  
  .text-white {
    color: #fff;
  }
  
  .text-primary {
    color: $primary;
  }
  
  .text-sm {
    font-size: $text-sm;
  }
  
  .text-xs {
    font-size: $text-xs;
  }
  
  .text-xl {
    font-size: $text-xl;
  }
  
  .text-lg {
    font-size: $text-lg;
  }
  
  // 字体粗细
  .font-bold {
    font-weight: 700;
  }
  
  .font-medium {
    font-weight: 500;
  }
  
  // Flex 布局
  .flex {
    display: flex;
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
  
  .justify-end {
    justify-content: flex-end;
  }
  
  .flex-wrap {
    flex-wrap: wrap;
  }
  
  // 间距
  .mb-4 {
    margin-bottom: 1rem;
  }
  
  .mr-3 {
    margin-right: 0.75rem;
  }
  
  .mr-2 {
    margin-right: 0.5rem;
  }
  
  .mr-1 {
    margin-right: 0.25rem;
  }
  
  .ml-2 {
    margin-left: 0.5rem;
  }
  
  .ml-3 {
    margin-left: 0.75rem;
  }
  
  .mt-2 {
    margin-top: 0.5rem;
  }
  
  .mb-3 {
    margin-bottom: 0.75rem;
  }
  
  .mb-6 {
    margin-bottom: 1.5rem;
  }
  
  .mx-3 {
    margin-left: 0.75rem;
    margin-right: 0.75rem;
  }
  
  .mt-3 {
    margin-top: 0.75rem;
  }
  
  .ml-1 {
    margin-left: 0.25rem;
  }
  
  .mt-1 {
    margin-top: 0.25rem;
  }
  
  .space-x-3 > :not([hidden]) ~ :not([hidden]) {
    margin-left: 0.75rem;
  }
  
  .space-x-2 > :not([hidden]) ~ :not([hidden]) {
    margin-left: 0.5rem;
  }
  
  // 宽高
  .w-10 {
    width: 2.5rem;
  }
  
  .h-10 {
    height: 2.5rem;
  }
  
  .w-6 {
    width: 1.5rem;
  }
  
  .h-6 {
    height: 1.5rem;
  }
  
  .w-full {
    width: 100%;
  }
  
  .w-9 {
    width: 2.25rem;
  }
  
  .h-9 {
    height: 2.25rem;
  }
  
  // Padding
  .p-5 {
    padding: 1.25rem;
  }
  
  .p-4 {
    padding: 1rem;
  }
  
  .p-3 {
    padding: 0.75rem;
  }
  
  .p-2 {
    padding: 0.5rem;
  }
  
  .p-1 {
    padding: 0.25rem;
  }
  
  .px-3 {
    padding-left: 0.75rem;
    padding-right: 0.75rem;
  }
  
  .py-1 {
    padding-top: 0.25rem;
    padding-bottom: 0.25rem;
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
  
  .pl-4 {
    padding-left: 1rem;
  }
  
  .py-1\.5 {
    padding-top: 0.375rem;
    padding-bottom: 0.375rem;
  }
  
  // 边框
  .border {
    border: 1px solid;
  }
  
  .border-gray-300 {
    border-color: $gray-300;
  }
  
  .border-primary {
    border-color: $primary;
  }
  
  .border-l-2 {
    border-left-width: 2px;
  }
  
  .border-gray-200 {
    border-color: $gray-200;
  }
  
  // 圆角
  .rounded-full {
    border-radius: 9999px;
  }
  
  .rounded-lg {
    border-radius: $rounded-xl;
  }
  
  .rounded-xl {
    border-radius: $rounded-xl;
  }
  
  .rounded-2xl {
    border-radius: $rounded-2xl;
  }
  
  .rounded-3xl {
    border-radius: $rounded-3xl;
  }
  
  // 背景色
  .bg-white {
    background-color: #fff;
  }
  
  .bg-gray-100 {
    background-color: $gray-100;
  }
  
  .bg-primary {
    background-color: $primary;
  }
  
  // 阴影
  .shadow-card {
    box-shadow: $shadow-card;
  }
  
  .shadow-sm {
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  }
  
  // 其他样式
  .object-cover {
    object-fit: cover;
  }
  
  .resize-none {
    resize: none;
  }
  
  .overflow-hidden {
    overflow: hidden;
  }
  
  .focus\:outline-none:focus {
    outline: none;
  }
  
  .focus\:ring-2:focus {
    outline: 2px solid transparent;
    outline-offset: 2px;
  }
  
  .focus\:ring-primary:focus {
    --tw-ring-color: $primary;
  }
  
  .hover\:text-primary:hover {
    color: $primary;
  }
  
  .hover\:bg-primary:hover {
    background-color: $primary;
  }
  
  .hover\:bg-secondary:hover {
    background-color: $secondary;
  }
  
  .hover\:bg-gray-100:hover {
    background-color: $gray-100;
  }
  
  .hover\:text-gray-700:hover {
    color: $gray-700;
  }
  
  .bg-opacity-10 {
    --tw-bg-opacity: 0.1;
  }
  
  .hidden {
    display: none;
  }
  
  .gap-2 {
    gap: 0.5rem;
  }
  
  // 自定义组件样式
  .tag {
    font-size: $text-xs;
    color: $gray-600;
    background-color: $gray-100;
    padding: 0.25rem 0.5rem;
    border-radius: 9999px;
  }

  .discussion-card {
    border-bottom: 1px solid $gray-200;
    
    &:last-child {
      border-bottom: none;
    }
  }

  // 按钮悬停效果
  #follow-topic,
  #share-topic,
  #post-comment,
  [id^="submit-reply-"] {
    transition: all 0.2s ease-in-out;
    border-radius: $rounded-xl;
    
    &:hover {
      transform: translateY(-2px);
      box-shadow: $shadow-hover;
    }
  }

  #follow-topic {
    border: 1px solid $primary;
    color: $primary;
    
    &:hover {
      background-color: rgba($primary, 0.1);
    }
  }

  #share-topic {
    &:hover {
      color: $primary;
    }
  }

  #post-comment,
  [id^="submit-reply-"] {
    background-color: $primary;
    color: white;
    border-radius: $rounded-xl;
    padding: 0.5rem 1rem;
    
    &:hover {
      background-color: $secondary;
    }
  }

  // 分页样式
  #comment-pagination {
    a {
      transition: all 0.2s ease;
      border-radius: $rounded-xl;
      
      &:hover:not(.bg-primary) {
        background-color: $gray-100;
      }
    }
    
    .bg-primary {
      background-color: $primary;
    }
  }

  // 文本区域样式
  #comment-input,
  [id^="reply-input-"] textarea {
    transition: box-shadow 0.2s ease;
    border-radius: $rounded-xl;
    border: 1px solid $gray-300;
    
    &:focus {
      outline: none;
      border-color: $primary;
      box-shadow: 0 0 0 3px rgba($primary, 0.2);
    }
  }

  // 选择框样式
  #discussion-sort {
    border: 1px solid $gray-300;
    border-radius: $rounded-xl;
    
    &:focus {
      outline: none;
      border-color: $primary;
      box-shadow: 0 0 0 3px rgba($primary, 0.2);
    }
  }

  // 评论按钮样式
  [id^="like-comment-"],
  [id^="reply-comment-"],
  [id^="like-reply-"],
  [id^="reply-to-reply-"] {
    &:hover {
      color: $primary;
    }
  }

  // 取消和提交回复按钮
  [id^="cancel-reply-"] {
    &:hover {
      color: $gray-700;
    }
  }
  
  // 响应式调整
  @media (max-width: 768px) {
    .discussion-card {
      padding: 1rem;
    }
    
    #topic-detail-view {
      padding: 0 0.5rem;
    }
    
    #comment-input,
    [id^="reply-input-"] textarea {
      padding: 0.5rem;
    }
  }
</style>