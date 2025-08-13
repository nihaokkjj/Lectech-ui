<script setup>
import {ref} from 'vue'

const list_title = ref([
  {name:'首页', num: 0, link: '/'},
  {name:'话题', num: 1, link: '/topic'},
  {name:'排行榜', num: 2, link: '/rank'},
])

const activeNum = ref(1)

</script>

<template>
  <!-- 顶部导航栏 -->
  <div class="main-header">
    <div class="container-content">
      <div class="header-items">
        <div class="logo">
          <a href="#">
            <span class="logo-lec">lec</span>
            <span class="logo-tech">tech</span>
          </a>
        </div>
        <!-- 主导航菜单 -->
        <nav id="main-nav" class="main-nav">
          <ul>
            <button class="nav-link" v-for="list in list_title" @click="activeNum = list.num">
              <router-link
                :to="list.link"
                :class="{'nav-link-active': activeNum === list.num}"
                >
                {{ list.name }}
              </router-link>
            </button>
          </ul>
        </nav>
        <!-- 搜索框 -->
        <div class="search-container">
            <i class="fas fa-search search-icon"></i>
            <input id="search-input" type="text" placeholder="搜索文章、话题或用户" class="search-input">
        </div>
           <!-- 未登录状态按钮 -->
        <div class="auth-buttons">
          <a href="#" id="login-btn" class="login-btn">登录</a>
          <a href="#" id="register-btn" class="register-btn">注册</a>
        </div>
          <!-- 已登录状态 - 默认隐藏 -->
        <div id="user-menu" class="user-menu">
          <a href="P-ARTICLE_PUBLISH.html" id="publish-btn" class="publish-btn">
            <i class="fas fa-pen-to-square"></i>
            <span>发布文章</span>
          </a>
          <div class="notifications-container">
            <button id="notifications-btn" class="notifications-btn">
              <i class="fas fa-bell text-xl"></i>
              <span class="notification-count">3</span>
            </button>
          </div>
          <!-- <div class="profile-container">
            <button id="profile-dropdown-btn" class="profile-dropdown-btn">
              <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80" alt="用户头像" class="profile-avatar">
              <span class="profile-name">JaneDoe</span>
              <i class="fas fa-chevron-down text-xs text-gray-400"></i>
            </button>
          </div> -->
        </div>
        <!-- 移动端菜单按钮 -->
        <button id="mobile-menu-btn" class="mobile-menu-btn">
          <i class="fas fa-bars text-xl"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* 导航栏顶部 */
.main-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 50;
  background-color: white;
  box-shadow: 0 2px 10px rgb(0, 0, 0.05, 0.05);
  align-items: center;
}

.container-content {
  max-width: 1280px; 
  margin-left: auto;
  margin-right: auto;
  padding-left: 1rem; 
  padding-right: 1rem; 
}

.header-items {
  display: flex; /* flex 对应 */
  align-items: center; /* items-center 对应 */
  justify-content: space-between; /* justify-between 对应 */
  height: 4rem; /* h-16 对应 */
}

/* Logo */
.logo {
  font-weight: 700;
  font-size: 24px;
  align-items: center;
}

.logo-lec {
  color: rgb(79, 70, 229);
  margin-right: 4px;
}

.logo-tech {
  color: #1f2937;
  margin-right: 4px;
}

/* 主导航菜单 */
.main-nav {
  position: relative;
  font-weight: 500;
  color: #1f2937;
  height: 4rem;
  transition: all 0.2s ease;
  display: none; 
  align-items: center; 
  gap: 2rem; 
}

@media (min-width: 768px) {
  .main-nav {
    display: flex; 
  }
}

.nav-link {
  position: relative;
  transition: all 0.2s ease;
  color: #4b5563;
  background-color: #fff; 
}

.nav-link:hover {
  color: rgb(79, 70, 229); 
}

.nav-link-active {
  color: rgb(79, 70, 229);
  font-weight: 500; 
}

/* 搜索框 */
.search-container {
  display: none;
  align-items: center; 
  flex: 1; 
  height: 2.5rem;
  background-color: #f3f4f6;
  border-radius: 9999px; 
  /* padding-left: 1.5rem;
  padding-right: 1rem; */
  padding: 0px;
  max-width: 28rem; 
  margin-left: 2rem; 
  margin-right: 2rem; 
  border: 1px solid #415475;
  transition: all 0.2s ease;
}

.search-container:hover {
    max-width: 28rem; /* 展开到完整的搜索框宽度 */
    background-color: #ffffff; /* 背景变白 */
    box-shadow: 0 0 0 2px #4F46E5; /* 添加蓝色边框效果 */
}

@media (min-width: 768px) {
  .search-container {
    display: flex; 
  }
}

.search-icon {
    color: #9ca3af; 
    font-size: 1rem;
    margin-right: 0.5rem; 
}

.search-input {
  border: none;
  outline: none;
  width: 100%;
  height: 100%;
  background: transparent; 
  color: #1f2937;
  font-size: 1rem;
}

.search-input:focus {
    border: none;
    outline: none;
}

/* 未登录状态按钮 */
.auth-buttons {
  display: flex;
  align-items: center; 
  gap: 1rem; 
}

.login-btn {
  color: #4b5563; 
}

.login-btn:hover {
  color: rgb(79, 70, 229); 
}

.register-btn {
  background-color: rgb(79, 70, 229); 
  color: #ffffff;
  padding: 0.5rem 1rem; /* px-4 py-2 对应 */
  border-radius: 0.5rem; /* rounded-lg 对应 */
  transition: all 0.2s ease;
}

.register-btn:hover {
  background-color: #4338ca; 
}

/* 已登录状态 - 默认隐藏 */
.user-menu {
  display: none; 
  align-items: center; 
  gap: 1rem; 
}

.publish-btn {
  display: flex; /* flex 对应 */
  align-items: center; /* items-center 对应 */
  gap: 0.25rem; /* space-x-1 对应 */
  color: rgb(79, 70, 229); /* text-primary 对应 */
}

.publish-btn:hover {
  color: #4338ca; /* hover:text-secondary 对应 */
}

.notification-count {
  position: absolute;
  top: 0;
  right: 0;
  background-color: #dc2626; /* bg-danger 对应 */
  color: #ffffff;
  font-size: 0.75rem; /* text-xs 对应 */
  line-height: 1rem;
  border-radius: 9999px; /* rounded-full 对应 */
  width: 1rem; /* w-4 对应 */
  height: 1rem; /* h-4 对应 */
  display: flex;
  align-items: center;
  justify-content: center;
}

.profile-avatar {
  width: 2rem; /* w-8 对应 */
  height: 2rem; /* h-8 对应 */
  border-radius: 9999px; /* rounded-full 对应 */
  object-fit: cover; /* object-cover 对应 */
}

.profile-name {
  color: #1f2937; /* text-gray-700 对应 */
  font-weight: 500; /* font-medium 对应 */
}

.profile-dropdown-btn {
  display: flex; /* flex 对应 */
  align-items: center; /* items-center 对应 */
  gap: 0.5rem; /* space-x-2 对应 */
}

.mobile-menu-btn {
  display: none; /* md:hidden 对应 */
  color: #4b5563; /* text-gray-600 对应 */
}

.mobile-menu-btn:hover {
  color: rgb(79, 70, 229); /* hover:text-primary 对应 */
}

@media (max-width: 767px) {
  .mobile-menu-btn {
    display: block;
  }
}

</style>