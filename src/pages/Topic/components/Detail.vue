<script setup>

import Article from './Article.vue';
import Comment from './Comment.vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const backtotopics = () => {
    router.push('/');
}
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
                        <span id="detail-topic-title"># 大型语言模型与AI应用</span>
                    </h2>
                    <button id="follow-topic" class="text-primary border border-primary px-3 py-1 rounded-lg hover:bg-primary hover:bg-opacity-10 mr-2">
                        <i class="fas fa-plus mr-1"></i> 关注话题
                    </button>
                    <button id="share-topic" class="text-gray-600 hover:text-primary">
                        <i class="fas fa-share-alt"></i>
                    </button>
                </div>
                
                <!-- 话题详情内容 -->
                <div class="bg-white rounded-xl shadow-card p-5 mb-6">
                    <div id="topic-description" class="text-gray-700 mb-4" style="text-align: left;">
                        讨论大型语言模型(LLM)的发展趋势、应用场景及实践经验，分享最新的模型训练、微调和部署技术。欢迎分享您在AI领域的研究成果、实践经验或遇到的挑战。
                    </div>
                    <div class="flex flex-wrap gap-2 mb-4">
                        <span class="tag text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded-full">LLM</span>
                        <span class="tag text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded-full">AI</span>
                        <span class="tag text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded-full">GPT</span>
                        <span class="tag text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded-full">人工智能</span>
                    </div>
                    <div class="flex items-center justify-between text-sm text-gray-500">
                        <div class="flex items-center">
                            <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=64&q=80" alt="创建者头像" class="w-6 h-6 rounded-full object-cover">
                            <span class="ml-2">Sarah Lin 创建于 2023-10-20</span>
                        </div>
                        <div class="flex items-center">
                            <span><i class="fas fa-users mr-1"></i>1.2k人参与</span>
                            <span class="mx-3">|</span>
                            <span><i class="far fa-comment mr-1"></i>128条讨论</span>
                        </div>
                    </div>
                </div>
                
                <!-- 相关文章 -->
                <div class="mb-6">
                    <h3 class="text-lg font-bold text-gray-800 mb-3" style="text-align: left;">相关文章</h3>
                    <div class="bg-white rounded-xl shadow-card overflow-hidden">
                        <!-- 相关文章1 -->
                        <Article />
                        
                        <!-- 相关文章2 -->
                        <Article />
                        
                        <!-- 相关文章3 -->
                        <Article />
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
                            <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80" alt="用户头像" class="w-10 h-10 rounded-full object-cover">
                            <div class="ml-3 flex-1">
                                <textarea id="comment-input" class="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-primary resize-none" rows="3" placeholder="分享你的观点和经验..."></textarea>
                                <div class="flex justify-end mt-2">
                                    <button id="post-comment" class="bg-primary hover:bg-secondary text-white px-4 py-2 rounded-lg btn-primary-effect">
                                        发表评论
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- 评论列表 -->
                    <div class="bg-white rounded-xl shadow-card overflow-hidden">
                        <!-- 评论1 -->
                        <Comment />
                        
                        <!-- 评论2 -->
                        <Comment />
                        
                        <!-- 评论3 -->
                        <Comment />
                    </div>
                    
                    <!-- 分页 -->
                    <div class="flex justify-center mt-6">
                        <nav id="comment-pagination" class="flex items-center bg-white rounded-lg shadow-sm p-1">
                            <a href="#" id="comment-prev-page" class="w-9 h-9 flex items-center justify-center text-gray-500 rounded-lg hover:bg-gray-100">
                                <i class="fas fa-chevron-left"></i>
                            </a>
                            <a href="#" id="comment-page-1" class="w-9 h-9 flex items-center justify-center text-white bg-primary rounded-lg">1</a>
                            <a href="#" id="comment-page-2" class="w-9 h-9 flex items-center justify-center text-gray-700 rounded-lg hover:bg-gray-100">2</a>
                            <a href="#" id="comment-page-3" class="w-9 h-9 flex items-center justify-center text-gray-700 rounded-lg hover:bg-gray-100">3</a>
                            <span class="w-9 h-9 flex items-center justify-center text-gray-500">...</span>
                            <a href="#" id="comment-page-5" class="w-9 h-9 flex items-center justify-center text-gray-700 rounded-lg hover:bg-gray-100">5</a>
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