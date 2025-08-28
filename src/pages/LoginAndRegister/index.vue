<script setup>
import {ref, onMounted} from 'vue'
import { useRouter } from 'vue-router'
import LoginAndRegister from './components/LoginAndRegister.vue'

const router = useRouter()
const activeNum = ref(0)

//导航栏的显示效果
const showHeader = ref(true)
//获取滚动条的高度
const getScrollTop = () => {
  //不同浏览器获取的方式不同
  let scrollTop = 
  document.documentElement.scrollTop 
  || window.pageYOffset 
  || document.body.scrollTop

  return scrollTop
}

const initScroll = () => {
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
    if (scrollType === 1 && currentScrollTop > 150) {
      showHeader.value = false
    } else showHeader.value = true
  })
}

onMounted(() => {
  initScroll()
})
</script>

<template>
     <!-- 顶部导航栏 -->
    <header id="main-header" class="bg-white shadow-nav" :v-show="showHeader">
        <div class="container mx-auto px-4">
            <div class="flex items-center justify-between h-16">
                <!-- Logo -->
                <div id="logo" class="flex items-center">
                    <a href="P-HOME.html" class="flex items-center">
                        <span class="text-primary text-2xl font-bold mr-1">lec</span>
                        <span class="text-gray-800 text-2xl font-bold">tech</span>
                    </a>
                </div>
                
                <!-- 右侧导航 -->
                <div class="flex items-center">
                    <a href="P-LOGIN.html" class="text-gray-600 hover:text-primary">已有账号？去登录</a>
                </div>
            </div>
        </div>
    </header>
  <div>
    <LoginAndRegister ref="loginRegisterRef"></LoginAndRegister>
  </div>
</template>

<style scoped>
  .btn-primary-effect {
      transition: all 0.2s ease;
  }
  
  .btn-primary-effect:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 8px rgba(79, 70, 229, 0.3);
  }
  
  .form-input-focus:focus {
      outline: none;
      border-color: #4F46E5;
      box-shadow: 0 0 0 2px rgba(79, 70, 229, 0.2);
  }
  
  .tab-active {
      color: #4F46E5;
      border-bottom: 2px solid #4F46E5;
  }
  
  .tab-inactive {
      color: #6B7280;
      border-bottom: 2px solid transparent;
  }
  
  .tab-inactive:hover {
      color: #4B5563;
  }
</style>