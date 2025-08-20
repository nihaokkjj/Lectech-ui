<script setup>

</script>

<template>
     <!-- 顶部导航栏 -->
    <header id="main-header" class="bg-white shadow-nav fixed top-0 left-0 right-0 z-50">
        <div class="container mx-auto px-4">
            <div class="flex items-center justify-between h-16">
                <!-- Logo -->
                <div id="logo" class="flex items-center">
                    <a href="P-HOME.html" class="flex items-center">
                        <span class="text-primary text-2xl font-bold mr-1">lec</span>
                        <span class="text-gray-800 text-2xl font-bold">tech</span>
                    </a>
                </div>
                
                <!-- 主导航菜单 - 中等屏幕以上显示 -->
                <nav id="main-nav" class="hidden md:flex items-center space-x-8">
                    <a href="P-HOME.html" class="nav-link text-gray-600 hover:text-primary">首页</a>
                    <a href="P-TOPIC_DISCUSSION.html" class="nav-link active text-primary font-medium">话题</a>
                    <a href="P-RANKING.html" class="nav-link text-gray-600 hover:text-primary">排行榜</a>
                </nav>
                
                <!-- 搜索框 -->
                <div id="search-container" class="hidden md:flex flex-1 max-w-md mx-8">
                    <div class="relative w-full">
                        <input id="search-input" type="text" placeholder="搜索话题或讨论" class="w-full h-10 pl-10 pr-4 rounded-full bg-gray-100 border-none focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-all duration-200">
                        <i class="fas fa-search absolute left-3 top-3 text-gray-400"></i>
                    </div>
                </div>
                
                <!-- 未登录状态按钮 -->
                <div id="auth-buttons" class="flex items-center space-x-4">
                    <a href="P-LOGIN.html" class="text-gray-600 hover:text-primary">登录</a>
                    <a href="P-REGISTER.html" class="bg-primary hover:bg-secondary text-white px-4 py-2 rounded-lg btn-primary-effect">注册</a>
                </div>
                
                <!-- 已登录状态 - 默认隐藏 -->
                <div id="user-menu" class="hidden items-center space-x-4">
                    <a href="P-ARTICLE_PUBLISH.html" class="flex items-center space-x-1 text-primary hover:text-secondary">
                        <i class="fas fa-pen-to-square"></i>
                        <span>发布文章</span>
                    </a>
                    <div class="relative">
                        <button id="notifications-btn" class="text-gray-600 hover:text-primary relative p-1">
                            <i class="fas fa-bell text-xl"></i>
                            <span class="absolute top-0 right-0 bg-danger text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">3</span>
                        </button>
                    </div>
                    <div class="relative">
                        <button id="profile-dropdown-btn" class="flex items-center space-x-2">
                            <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80" alt="用户头像" class="w-8 h-8 rounded-full object-cover">
                            <span class="text-gray-700 font-medium">JaneDoe</span>
                            <i class="fas fa-chevron-down text-xs text-gray-400"></i>
                        </button>
                    </div>
                </div>
                
                <!-- 移动端菜单按钮 -->
                <button id="mobile-menu-btn" class="md:hidden text-gray-600 hover:text-primary">
                    <i class="fas fa-bars text-xl"></i>
                </button>
            </div>
        </div>
    </header>
</template>

<style lang="scss" scoped>
@import '../../../style.scss';

// 基础布局类
.container {
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  
  @media (min-width: 576px) {
    max-width: 540px;
  }
  
  @media (min-width: 768px) {
    max-width: 720px;
  }
  
  @media (min-width: 992px) {
    max-width: 960px;
  }
  
  @media (min-width: 1200px) {
    max-width: 1140px;
  }
}

.mx-auto {
  margin-right: auto;
  margin-left: auto;
}

.px-4 {
  padding-left: 1rem;
  padding-right: 1rem;
}

.flex {
  display: flex;
}

.items-center {
  align-items: center;
}

.justify-between {
  justify-content: space-between;
}

.h-16 {
  height: 4rem;
}

.space-x-8 > :not([hidden]) ~ :not([hidden]) {
  margin-left: 2rem;
}

.space-x-4 > :not([hidden]) ~ :not([hidden]) {
  margin-left: 1rem;
}

.space-x-1 > :not([hidden]) ~ :not([hidden]) {
  margin-left: 0.25rem;
}

.space-x-2 > :not([hidden]) ~ :not([hidden]) {
  margin-left: 0.5rem;
}

// 显示/隐藏控制
.hidden {
  display: none;
}

.md\:flex {
  @media (min-width: 768px) {
    display: flex;
  }
}

.md\:hidden {
  @media (min-width: 768px) {
    display: none;
  }
}

// 尺寸与间距
.max-w-md {
  max-width: 28rem;
}

.flex-1 {
  flex: 1;
}

.mx-8 {
  margin-left: 2rem;
  margin-right: 2rem;
}

.pl-10 {
  padding-left: 2.5rem;
}

.pr-4 {
  padding-right: 1rem;
}

.w-full {
  width: 100%;
}

.h-10 {
  height: 2.5rem;
}

.w-8 {
  width: 2rem;
}

.h-8 {
  height: 2rem;
}

.w-4 {
  width: 1rem;
}

.h-4 {
  height: 1rem;
}

.left-3 {
  left: 0.75rem;
}

.top-3 {
  top: 0.75rem;
}

.top-0 {
  top: 0;
}

.right-0 {
  right: 0;
}

// 文本样式
.text-primary {
  color: $primary;
}

.text-gray-800 {
  color: $gray-800;
}

.text-gray-600 {
  color: $gray-600;
}

.text-gray-700 {
  color: $gray-700;
}

.text-gray-400 {
  color: $gray-400;
}

.text-white {
  color: #ffffff;
}

.text-2xl {
  font-size: $text-2xl;
}

.text-xl {
  font-size: $text-xl;
}

.text-xs {
  font-size: $text-xs;
}

.font-bold {
  font-weight: 700;
}

.font-medium {
  font-weight: 500;
}

// 背景与边框
.bg-white {
  background-color: #ffffff;
}

.bg-gray-100 {
  background-color: $gray-100;
}

.bg-primary {
  background-color: $primary;
}

.bg-danger {
  background-color: $danger;
}

.border-none {
  border: none;
}

// 边框与圆角
.rounded-full {
  border-radius: 9999px;
}

.rounded-lg {
  border-radius: $rounded-xl; // 使用项目定义的变量
}

.rounded-xl {
  border-radius: $rounded-xl;
}

// 定位
.fixed {
  position: fixed;
}

.top-0 {
  top: 0;
}

.left-0 {
  left: 0;
}

.right-0 {
  right: 0;
}

.relative {
  position: relative;
}

.absolute {
  position: absolute;
}

.z-50 {
  z-index: 50;
}

// 阴影
.shadow-nav {
  box-shadow: $shadow-nav;
}

// 交互样式
.hover\:text-primary:hover {
  color: $primary;
}

.hover\:text-secondary:hover {
  color: $secondary;
}

.hover\:bg-secondary:hover {
  background-color: $secondary;
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

.focus\:bg-white:focus {
  background-color: #ffffff;
}

// 过渡动画
.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

.duration-200 {
  transition-duration: 200ms;
}

// 其他
.object-cover {
  object-fit: cover;
}

// 自定义组件样式
#main-header {
  background-color: #ffffff;
  box-shadow: $shadow-nav;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
}

.btn-primary-effect {
  box-shadow: $shadow-btn;
  transition: all 0.2s ease;
  
  &:hover {
    box-shadow: $shadow-hover;
    transform: translateY(-1px);
  }
}

.nav-link {
  position: relative;
  padding: 0.5rem 0;
  text-decoration: none;
  color: $gray-600;
  
  &.active {
    color: $primary;
    font-weight: 500;
  }
  
  &.active::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: $primary;
  }
  
  &:hover {
    color: $primary;
  }
}

// 输入框样式
#search-input {
  width: 100%;
  height: 2.5rem;
  padding-left: 2.5rem;
  padding-right: 1rem;
  border-radius: 9999px;
  background-color: $gray-100;
  border: none;
  transition: all 0.2s ease;
  
  &:focus {
    outline: none;
    background-color: #ffffff;
    box-shadow: 0 0 0 2px rgba($primary, 0.5);
  }
}

// 用户菜单相关样式
#user-menu {
  .relative {
    position: relative;
  }
  
  .absolute {
    position: absolute;
  }
}

// 通知按钮样式
#notifications-btn {
  position: relative;
  padding: 0.25rem;
  color: $gray-600;
  
  &:hover {
    color: $primary;
  }
  
  .absolute {
    position: absolute;
  }
  
  .top-0 {
    top: 0;
  }
  
  .right-0 {
    right: 0;
  }
  
  .bg-danger {
    background-color: $danger;
  }
  
  .text-white {
    color: #ffffff;
  }
  
  .text-xs {
    font-size: $text-xs;
  }
  
  .rounded-full {
    border-radius: 9999px;
  }
  
  .w-4 {
    width: 1rem;
  }
  
  .h-4 {
    height: 1rem;
  }
  
  .flex {
    display: flex;
  }
  
  .items-center {
    align-items: center;
  }
  
  .justify-center {
    justify-content: center;
  }
}

// 移动端菜单按钮
#mobile-menu-btn {
  color: $gray-600;
  
  &:hover {
    color: $primary;
  }
  
  @media (min-width: 768px) {
    display: none;
  }
}

// Logo样式
#logo {
  .text-primary {
    color: $primary;
  }
  
  .text-gray-800 {
    color: $gray-800;
  }
  
  .text-2xl {
    font-size: $text-2xl;
  }
  
  .font-bold {
    font-weight: 700;
  }
  
  .mr-1 {
    margin-right: 0.25rem;
  }
}

// 认证按钮样式
#auth-buttons {
  .text-gray-600 {
    color: $gray-600;
  }
  
  .hover\:text-primary:hover {
    color: $primary;
  }
  
  .bg-primary {
    background-color: $primary;
  }
  
  .hover\:bg-secondary:hover {
    background-color: $secondary;
  }
  
  .text-white {
    color: #ffffff;
  }
  
  .px-4 {
    padding-left: 1rem;
    padding-right: 1rem;
  }
  
  .py-2 {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
  }
  
  .rounded-lg {
    border-radius: $rounded-xl;
  }
}

// 搜索容器样式
#search-container {
  .relative {
    position: relative;
  }
  
  .w-full {
    width: 100%;
  }
  
  @media (min-width: 768px) {
    display: flex;
  }
}

// 响应式调整
@media (max-width: 767px) {
  .md\:hidden {
    display: none;
  }
}
</style>