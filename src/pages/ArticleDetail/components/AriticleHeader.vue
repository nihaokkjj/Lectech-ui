<script setup>

import { ref } from 'vue'




</script>

<template>
     <!-- 文章头部信息 -->
            <section id="article-header" class="bg-white rounded-xl shadow-card p-6 mb-6">
                <div class="flex items-center text-sm text-gray-500 mb-4">
                    <a href="P-HOME.html" class="hover:text-primary">首页</a>
                    <span class="mx-2">/</span>
                    <a href="#" id="article-category-link" class="hover:text-primary">前端开发</a>
                    <span class="mx-2">/</span>
                    <span>文章详情</span>
                </div>
                
                <h1 id="article-title" class="text-2xl md:text-3xl font-bold text-gray-900 mb-4" style="text-align: left;">Vue 3 + TypeScript + Vite 项目最佳实践指南</h1>
                
                <div class="flex flex-wrap items-center mb-4">
                    <span id="article-category" class="bg-purple-100 text-purple-600 text-xs font-medium py-1 px-2 rounded-full mr-3">前端开发</span>
                    <span id="article-date" class="text-gray-500 text-sm mr-4"><i class="far fa-clock mr-1"></i>2023-10-22</span>
                    <span id="article-views" class="text-gray-500 text-sm mr-4"><i class="far fa-eye mr-1"></i>1.8k 浏览</span>
                    <span id="article-comments" class="text-gray-500 text-sm"><i class="far fa-comment mr-1"></i>36 评论</span>
                </div>
                
                <div class="flex flex-wrap gap-2 mb-6">
                    <a href="#" id="tag-vue3" class="tag text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded-full">Vue3</a>
                    <a href="#" id="tag-typescript" class="tag text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded-full">TypeScript</a>
                    <a href="#" id="tag-vite" class="tag text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded-full">Vite</a>
                    <a href="#" id="tag-frontend" class="tag text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded-full">前端框架</a>
                    <a href="#" id="tag-bestpractice" class="tag text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded-full">最佳实践</a>
                </div>
                
                <div class="flex items-center justify-between">
                    <div class="flex items-center">
                        <a href="#" id="author-profile-link">
                            <img id="author-avatar" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=64&q=80" alt="作者头像" class="w-10 h-10 rounded-full object-cover">
                        </a>
                        <div class="ml-3">
                            <a href="#" id="author-name" class="text-gray-800 font-medium hover:text-primary">Alex Zhang</a>
                            <p id="author-bio" class="text-gray-500 text-xs">前端开发工程师 | 3年经验</p>
                        </div>
                    </div>
                    <button id="follow-author-btn" class="bg-primary bg-opacity-10 text-primary px-4 py-1.5 rounded-full text-sm font-medium hover:bg-opacity-20 transition-all">
                        <i class="fas fa-plus mr-1"></i>关注作者
                    </button>
                </div>
            </section>
</template>

<style lang="scss" scoped>
@import '../../../style.scss';

#article-header {
  background-color: #fff;
  border-radius: $rounded-xl;
  box-shadow: $shadow-card;
  padding: 1.5rem;
  margin-bottom: 1.5rem;

  // 基础工具类样式
  .bg-white {
    background-color: #fff;
  }

  .rounded-xl {
    border-radius: $rounded-xl;
  }

  .shadow-card {
    box-shadow: $shadow-card;
  }

  .p-6 {
    padding: 1.5rem;
  }

  .mb-6 {
    margin-bottom: 1.5rem;
  }

  .flex {
    display: flex;
  }

  .items-center {
    align-items: center;
  }

  .text-sm {
    font-size: $text-sm;
    color: $gray-500; // 明确设置默认颜色
  }

  .text-gray-500 {
    color: $gray-500;
  }

  .mb-4 {
    margin-bottom: 1rem;
  }

  // 悬停效果 - 只在悬停时改变颜色
  .hover\:text-primary {
    color: $gray-500; // 默认颜色
    
    &:hover {
      color: $primary; // 悬停时的颜色
    }
  }

  .mx-2 {
    margin-left: 0.5rem;
    margin-right: 0.5rem;
  }

  #article-title {
    font-size: 1.5rem;
    font-weight: 700;
    color: $gray-900;
    margin-bottom: 1rem;

    @media (min-width: 768px) {
      font-size: 1.875rem;
    }
  }

  .text-2xl {
    font-size: 1.5rem;
  }

  .md\:text-3xl {
    @media (min-width: 768px) {
      font-size: 1.875rem;
    }
  }

  .font-bold {
    font-weight: 700;
  }

  .text-gray-900 {
    color: $gray-900;
  }

  .flex-wrap {
    flex-wrap: wrap;
  }

  .mr-3 {
    margin-right: 0.75rem;
  }

  .mr-4 {
    margin-right: 1rem;
  }

  .text-xs {
    font-size: $text-xs;
  }

  .text-purple-600 {
    color: #9333ea;
  }

  .font-medium {
    font-weight: 500;
  }

  .py-1 {
    padding-top: 0.25rem;
    padding-bottom: 0.25rem;
  }

  .px-2 {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }

  .rounded-full {
    border-radius: 9999px;
  }

  .bg-purple-100 {
    background-color: #ede9fe;
  }

  .gap-2 {
    gap: 0.5rem;
  }

  .justify-between {
    justify-content: space-between;
  }

  .ml-3 {
    margin-left: 0.75rem;
  }

  .text-gray-800 {
    color: $gray-800;
  }

  .text-gray-600 {
    color: $gray-600;
  }

  .bg-gray-100 {
    background-color: $gray-100;
  }

  // 特定样式类
  .py-1\.5 {
    padding-top: 0.375rem;
    padding-bottom: 0.375rem;
  }

  .px-4 {
    padding-left: 1rem;
    padding-right: 1rem;
  }

  .bg-primary {
    background-color: $primary;
  }

  .bg-opacity-10 {
    opacity: 0.1;
  }

  // 修复文字颜色问题 - 移除或注释掉这个通用定义
  /* 
  .text-primary {
    color: $primary;
  }
  */

  .hover\:bg-opacity-20 {
    &:hover {
      opacity: 0.2;
    }
  }

  .transition-all {
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
  }

  .w-10 {
    width: 2.5rem;
  }

  .h-10 {
    height: 2.5rem;
  }

  .object-cover {
    object-fit: cover;
  }

  .tag {
    display: inline-block;
  }
  
  .mr-1 {
    margin-right: 0.25rem;
  }

  #follow-author-btn {
    background-color: $gray-100;
    opacity: 1;
    color: $primary; 
    padding-left: 1rem;
    padding-right: 1rem;
    padding-top: 0.375rem;
    padding-bottom: 0.375rem;
    border-radius: 9999px;
    font-size: $text-sm;
    font-weight: 500;
    
    &:hover {
      opacity: 1;
      background-color: $gray-200;
    }
    
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
  }
}
</style>