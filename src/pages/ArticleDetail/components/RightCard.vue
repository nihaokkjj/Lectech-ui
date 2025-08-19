<script setup>

import { ref,onMounted,onUnmounted } from 'vue'

// 定义关注状态
const isFollowing = ref(false);

// 切换关注状态
const toggleFollow = () => {
  isFollowing.value = !isFollowing.value;
  
  // 同步更新文章头部的关注按钮（如果存在的话）
  const mainFollowBtn = document.querySelector('#follow-author-btn');
  if (mainFollowBtn) {
    if (isFollowing.value) {
      mainFollowBtn.innerHTML = '<i class="fas fa-check mr-1"></i>已关注';
      mainFollowBtn.classList.remove('bg-primary', 'bg-opacity-10', 'text-primary');
      mainFollowBtn.classList.add('bg-gray-200', 'text-gray-600');
    } else {
      mainFollowBtn.innerHTML = '<i class="fas fa-plus mr-1"></i>关注作者';
      mainFollowBtn.classList.remove('bg-gray-200', 'text-gray-600');
      mainFollowBtn.classList.add('bg-primary', 'bg-opacity-10', 'text-primary');
    }
  }
};

// 目录滚动高亮相关
const activeSection = ref('');

// 监听滚动事件，高亮当前目录项
const handleScroll = () => {
  const sections = document.querySelectorAll('h2[id], h3[id]');
  const scrollPosition = window.scrollY + 100;

  for (let i = sections.length - 1; i >= 0; i--) {
    const section = sections[i];
    if (scrollPosition >= section.offsetTop) {
      activeSection.value = section.id;
      break;
    }
  }
};

// 平滑滚动到指定章节
const scrollToSection = (event, sectionId) => {
  event.preventDefault();
  const targetElement = document.getElementById(sectionId);
  if (targetElement) {
    window.scrollTo({
      top: targetElement.offsetTop - 80,
      behavior: 'smooth'
    });
  }
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  // 初始化当前活动章节
  handleScroll();
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

</script>

<template>
    <!-- 右侧面板 - 在大屏幕(≥1440px)上显示 -->
    <aside id="right-sidebar" class=" w-72 ml-6 flex-shrink-0"> <!-- hidden xl:block -->
        <!-- 作者信息卡片 -->
        <div class="bg-white rounded-xl shadow-card p-4 mb-6">
            <div class="flex flex-col items-center text-center mb-4">
                <img id="sidebar-author-avatar" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80" alt="作者头像" class="w-20 h-20 rounded-full object-cover mb-3">
                <h4 id="sidebar-author-name" class="text-gray-800 font-medium">Alex Zhang</h4>
                <p id="sidebar-author-bio" class="text-gray-500 text-sm mt-1">前端开发工程师 | 3年经验</p>
                 <button 
                  id="sidebar-follow-btn" 
                  @click="toggleFollow"
                  :class="[
                    'mt-3 px-6 py-1.5 rounded-full text-sm font-medium btn-primary-effect',
                    isFollowing 
                      ? 'bg-gray-200 text-gray-600 hover:bg-gray-300' 
                      : 'bg-primary text-white hover:bg-secondary'
                  ]"
                >
                    <i :class="[
                      'mr-1',
                      isFollowing ? 'fas fa-check' : 'fas fa-plus'
                    ]"></i>
                    {{ isFollowing ? '已关注' : '关注' }}
                </button>
            </div>
            <div class="flex justify-around text-center border-t border-gray-100 pt-4">
                <div>
                    <div id="sidebar-author-articles" class="text-gray-800 font-medium">42</div>
                    <div class="text-gray-500 text-xs">文章</div>
                </div>
                <div>
                    <div id="sidebar-author-followers" class="text-gray-800 font-medium">1.2k</div>
                    <div class="text-gray-500 text-xs">粉丝</div>
                </div>
                <div>
                    <div id="sidebar-author-likes" class="text-gray-800 font-medium">8.5k</div>
                    <div class="text-gray-500 text-xs">获赞</div>
                </div>
            </div>
        </div>
        
         <!-- 文章目录 -->
        <div class="bg-white rounded-xl shadow-card p-4 mb-6" style="text-align: left;">
            <h4 class="text-gray-800 font-medium mb-3">文章目录</h4>
            <ul id="article-toc" class="space-y-1 text-sm">
                <li>
                    <a 
                      href="#section-1" 
                      @click="scrollToSection($event, 'section-1')"
                      :class="[
                        'toc-item block py-1.5 px-3 rounded-lg',
                        activeSection === 'section-1' ? 'active' : ''
                      ]"
                    >
                      1. 项目初始化与配置
                    </a>
                    <ul class="pl-4 mt-1 space-y-1">
                        <li>
                          <a 
                            href="#section-1-1" 
                            @click="scrollToSection($event, 'section-1-1')"
                            :class="[
                              'toc-item block py-1 px-3 rounded-lg',
                              activeSection === 'section-1-1' ? 'active' : ''
                            ]"
                          >
                            1.1 创建项目
                          </a>
                        </li>
                        <li>
                          <a 
                            href="#section-1-2" 
                            @click="scrollToSection($event, 'section-1-2')"
                            :class="[
                              'toc-item block py-1 px-3 rounded-lg',
                              activeSection === 'section-1-2' ? 'active' : ''
                            ]"
                          >
                            1.2 推荐的项目结构
                          </a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a 
                      href="#section-2" 
                      @click="scrollToSection($event, 'section-2')"
                      :class="[
                        'toc-item block py-1.5 px-3 rounded-lg',
                        activeSection === 'section-2' ? 'active' : ''
                      ]"
                    >
                      2. TypeScript最佳实践
                    </a>
                    <ul class="pl-4 mt-1 space-y-1">
                        <li>
                          <a 
                            href="#section-2-1" 
                            @click="scrollToSection($event, 'section-2-1')"
                            :class="[
                              'toc-item block py-1 px-3 rounded-lg',
                              activeSection === 'section-2-1' ? 'active' : ''
                            ]"
                          >
                            2.1 定义组件Props
                          </a>
                        </li>
                        <li>
                          <a 
                            href="#section-2-2" 
                            @click="scrollToSection($event, 'section-2-2')"
                            :class="[
                              'toc-item block py-1 px-3 rounded-lg',
                              activeSection === 'section-2-2' ? 'active' : ''
                            ]"
                          >
                            2.2 定义组件Emits
                          </a>
                        </li>
                    </ul>
                </li>
                <li>
                  <a 
                    href="#section-3" 
                    @click="scrollToSection($event, 'section-3')"
                    :class="[
                      'toc-item block py-1.5 px-3 rounded-lg',
                      activeSection === 'section-3' ? 'active' : ''
                    ]"
                  >
                    3. 组件设计原则
                  </a>
                </li>
                <li>
                  <a 
                    href="#section-4" 
                    @click="scrollToSection($event, 'section-4')"
                    :class="[
                      'toc-item block py-1.5 px-3 rounded-lg',
                      activeSection === 'section-4' ? 'active' : ''
                    ]"
                  >
                    4. 状态管理
                  </a>
                </li>
                <li>
                  <a 
                    href="#section-5" 
                    @click="scrollToSection($event, 'section-5')"
                    :class="[
                      'toc-item block py-1.5 px-3 rounded-lg',
                      activeSection === 'section-5' ? 'active' : ''
                    ]"
                  >
                    5. 性能优化
                  </a>
                </li>
                <li>
                  <a 
                    href="#section-6" 
                    @click="scrollToSection($event, 'section-6')"
                    :class="[
                      'toc-item block py-1.5 px-3 rounded-lg',
                      activeSection === 'section-6' ? 'active' : ''
                    ]"
                  >
                    6. 测试策略
                  </a>
                </li>
                <li>
                  <a 
                    href="#section-7" 
                    @click="scrollToSection($event, 'section-7')"
                    :class="[
                      'toc-item block py-1.5 px-3 rounded-lg',
                      activeSection === 'section-7' ? 'active' : ''
                    ]"
                  >
                    7. 部署与构建优化
                  </a>
                </li>
                <li>
                  <a 
                    href="#section-8" 
                    @click="scrollToSection($event, 'section-8')"
                    :class="[
                      'toc-item block py-1.5 px-3 rounded-lg',
                      activeSection === 'section-8' ? 'active' : ''
                    ]"
                  >
                    8. 总结
                  </a>
                </li>
            </ul>
        </div>
        
        
        <!-- 热门评论 -->
        <div class="bg-white rounded-xl shadow-card p-4">
            <h4 class="text-gray-800 font-medium mb-3">热门评论</h4>
            <div class="space-y-4">
                <div id="hot-comment-1" class="p-3 bg-gray-50 rounded-lg">
                    <div class="flex items-center mb-2">
                        <img src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=64&q=80" alt="评论者头像" class="w-6 h-6 rounded-full object-cover">
                        <span class="text-gray-800 text-sm font-medium ml-2">David Chen</span>
                    </div>
                    <p class="text-gray-600 text-sm line-clamp-3">非常详细的指南，特别是TypeScript的最佳实践部分对我帮助很大。我一直在纠结如何正确定义组件的props和emits，这篇文章给了我很好的参考。</p>
                    <div class="flex items-center justify-between mt-2 text-xs">
                        <span class="text-gray-500">2023-10-22</span>
                        <span class="text-primary"><i class="far fa-thumbs-up mr-1"></i>24</span>
                    </div>
                </div>
                
                <div id="hot-comment-2" class="p-3 bg-gray-50 rounded-lg">
                    <div class="flex items-center mb-2">
                        <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=64&q=80" alt="评论者头像" class="w-6 h-6 rounded-full object-cover">
                        <span class="text-gray-800 text-sm font-medium ml-2">Sarah Lin</span>
                    </div>
                    <p class="text-gray-600 text-sm line-clamp-3">关于Pinia的使用部分讲得很清晰，比Vuex简洁多了。不过我想问一下，在大型项目中，如何组织多个store？有没有什么推荐的结构？</p>
                    <div class="flex items-center justify-between mt-2 text-xs">
                        <span class="text-gray-500">2023-10-22</span>
                        <span class="text-primary"><i class="far fa-thumbs-up mr-1"></i>16</span>
                    </div>
                </div>
            </div>
        </div>
    </aside>
</template>

<style lang="scss" scoped>
@import '../../../style.scss';

#right-sidebar {
    align-self: flex-start;
    
    .bg-white {
        background-color: #fff;
    }
    
    .rounded-xl {
        border-radius: $rounded-xl;
    }
    
    .rounded-2xl {
        border-radius: $rounded-2xl;
    }
    
    .rounded-full {
        border-radius: 9999px;
    }
    
    .shadow-card {
        box-shadow: $shadow-card;
    }
    
    .shadow-nav {
        box-shadow: $shadow-nav;
    }
    
    .shadow-btn {
        box-shadow: $shadow-btn;
    }
    
    .shadow-hover {
        box-shadow: $shadow-hover;
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
    
    .text-lg {
        font-size: $text-lg;
    }
    
    .text-xl {
        font-size: $text-xl;
    }
    
    .text-2xl {
        font-size: $text-2xl;
    }
    
    .font-medium {
        font-weight: 500;
    }
    
    .w-20 {
        width: 5rem;
    }
    
    .h-20 {
        height: 5rem;
    }
    
    .w-6 {
        width: 1.5rem;
    }
    
    .h-6 {
        height: 1.5rem;
    }
    
    .w-72 {
        width: 18rem;
    }
    
    .p-4 {
        padding: 1rem;
    }
    
    .p-3 {
        padding: 0.75rem;
    }
    
    .pt-4 {
        padding-top: 1rem;
    }
    
    .py-1\.5 {
        padding-top: 0.375rem;
        padding-bottom: 0.375rem;
    }
    
    .px-3 {
        padding-left: 0.75rem;
        padding-right: 0.75rem;
    }
    
    .py-1 {
        padding-top: 0.25rem;
        padding-bottom: 0.25rem;
    }
    
    .px-6 {
        padding-left: 1.5rem;
        padding-right: 1.5rem;
    }
    
    .mb-3 {
        margin-bottom: 0.75rem;
    }
    
    .mb-4 {
        margin-bottom: 1rem;
    }
    
    .mb-6 {
        margin-bottom: 1.5rem;
    }
    
    .ml-2 {
        margin-left: 0.5rem;
    }
    
    .ml-6 {
        margin-left: 1.5rem;
    }
    
    .mt-1 {
        margin-top: 0.25rem;
    }
    
    .mt-2 {
        margin-top: 0.5rem;
    }
    
    .mt-3 {
        margin-top: 0.75rem;
    }
    
    .mr-1 {
        margin-right: 0.25rem;
    }
    
    .pl-4 {
        padding-left: 1rem;
    }
    
    .space-y-1 > :not([hidden]) ~ :not([hidden]) {
        --tw-space-y-reverse: 0;
        margin-top: calc(0.25rem * calc(1 - var(--tw-space-y-reverse)));
        margin-bottom: calc(0.25rem * var(--tw-space-y-reverse));
    }
    
    .space-y-4 > :not([hidden]) ~ :not([hidden]) {
        --tw-space-y-reverse: 0;
        margin-top: calc(1rem * calc(1 - var(--tw-space-y-reverse)));
        margin-bottom: calc(1rem * var(--tw-space-y-reverse));
    }
    
    .flex {
        display: flex;
    }
    
    .hidden {
        display: none;
    }
    
    .block {
        display: block;
    }
    
    .items-center {
        align-items: center;
    }
    
    .justify-around {
        justify-content: space-around;
    }
    
    .justify-between {
        justify-content: space-between;
    }
    
    .flex-col {
        flex-direction: column;
    }
    
    .text-center {
        text-align: center;
    }
    
    .object-cover {
        object-fit: cover;
    }
    
    .line-clamp-3 {
        overflow: hidden;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
    }
    
    .bg-primary {
        background-color: $primary;
    }
    
    .bg-secondary {
        background-color: $secondary;
    }
    
    .bg-gray-50 {
        background-color: $gray-50;
    }
    
    .text-white {
        color: #fff;
    }
    
    .text-gray-500 {
        color: $gray-500;
    }
    
    .text-gray-600 {
        color: $gray-600;
    }
    
    .text-gray-800 {
        color: $gray-800;
    }
    
    .text-primary {
        color: $primary;
    }
    
    .border-t {
        border-top-width: 1px;
    }
    
    .border-gray-100 {
        border-color: $gray-100;
    }
    
    .hover\:bg-secondary:hover {
        background-color: $secondary;
    }
    
    .btn-primary-effect {
        transition: all 0.2s ease-in-out;
        
        &:hover {
            transform: translateY(-2px);
            box-shadow: $shadow-hover;
        }
    }
    
    .toc-item {
        color: $gray-600;
        transition: all 0.2s ease;
        
        &.active,
        &:hover {
            background-color: $primary;
            color: white;
        }
    }
    
    @media (min-width: 1280px) {
        .xl\:block {
            display: block;
        }
    }
}
</style>