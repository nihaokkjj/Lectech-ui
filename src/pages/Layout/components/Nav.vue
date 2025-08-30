<script setup>
import {ref, onMounted} from 'vue'
import { useRouter } from 'vue-router'
import LoginAndRegister from '../../LoginAndRegister/index.vue'

const router = useRouter()

const list_title = ref([
  {name:'首页', num: 0, link: '/'},
  {name:'话题', num: 1, link: '/topic'},
  {name:'排行榜', num: 2, link: '/rank'},
])

const activeNum = ref(0)

//导航栏的显示效果
const showHeader = ref(true)
//获取滚动条的高度
const getScrollTop = () => {
  let scrollTop = //不同浏览器获取的方式不同
  document.documentElement.scrollTop 
  || window.pageYOffset 
  || document.body.scrollTop

  return scrollTop
}

const initScroll =() => {

  let initScrollTop = getScrollTop()
  let scrollType = 0

  window.addEventListener('scroll', () => {
    let currentScrollTop = getScrollTop()
    if (currentScrollTop > initScrollTop) {
      scrollType = 1
    } else {
      scrollType = 0
    }
    initScrollTop = currentScrollTop
    // console.log(scrollType === 1 ? 'shang' : 'xia')
    if (scrollType === 1 && currentScrollTop > 150) {
      showHeader.value = false
    } else showHeader.value = true
    })
   }

   //搜索跳转
   //存储搜索框里面的值
   const searchInput = ref('')

   const handleSearch = () => {
    //检查输入框里面是否有内容
    if (searchInput.value.trim() !== '') {
      //有内容. 路由跳转到'/search'
      router.push({
        path: '/search',
        query: {
          keyword: searchInput.value,
          categoryId: 'Frontend',
          tagIds:['Fronted','python','back'],
        }
      })
    }
}

//登录与注册弹窗
//1 登录, 0 注册
const loginShow = ref(false)

const loginRegisterRef = ref()
const loginRegister = (type) => {
  loginShow.value = true
  router.push({
    path: '/login',
    query: {
      detail: type
    }
  })
}

  onMounted(() => {
    initScroll()
  })

</script>

<template>
  <!-- 顶部导航栏 -->
  <div class="main-header" v-show=showHeader >
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
            <button 
            v-for="list in list_title" :key="list.num"
            style="background-color: #ffffff;  align-items: flex-start;"
            @click="activeNum = list.num">
              <router-link
                class="nav-link" 
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
            <input
             id="search-input"
              type="text" placeholder="搜索文章、话题或用户"
              v-model="searchInput"
              @keyup.enter="handleSearch"
              class="search-input"
               >
        </div>
           <!-- 未登录状态按钮 -->
        <div class="auth-buttons">
          <div href="#" id="login-btn" class="login-btn" @click="loginRegister('login')">登录</div>
          <div href="#" id="register-btn" class="register-btn" @click="loginRegister('register')">注册</div>
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
  <div v-show="loginShow">
    <LoginAndRegister ref="loginRegisterRef"></LoginAndRegister>
  </div>
</template>

<style scoped>
@import './scss/nav.scss'
</style>