<script setup>
import {ref, onMounted} from 'vue'
import { useRouter, useRoute } from 'vue-router'
import register from './components/register.vue'
import login from './components/login.vue'

const router = useRouter()
const route = useRoute()

// 使用一个 ref 来管理当前显示的页面状态 ('register' 或 'login')
let state = route.query.detail
const currentPage = ref(state)

// 切换到登录页面
const changeToLogin = () => {
  currentPage.value = 'login'
}

// 切换到注册页面
const changeToRegister = () => {
  currentPage.value = 'register'
}

// 跳转回首页
const returnHome  = ()=> {
  router.push('/')
}
//注册页面

//登录页面
const loginRef = ref()
const checkLogin = () => {
  state = 1
}
//跳转登录信息

</script>

<template>
  <div class="bg-gray-50 font-sans text-gray-800 min-h-screen flex flex-col">
    <header id="main-header" class="bg-white shadow-nav fixed top-0 inset-x-0 z-50">
      <div class="container mx-auto px-4">
        <div class="flex items-center justify-between h-16">
          <div id="logo" class="flex items-center">
            <div class="flex items-center" @click="returnHome">
              <span class="text-primary text-2xl font-bold mr-1">lec</span>
              <span class="text-gray-800 text-2xl font-bold">tech</span>
            </div>
          </div>
          
          <div class="flex items-center">
            <div
            @click="changeToLogin" 
            v-if="currentPage === 'register'"
            class="text-gray-600 hover:text-primary">已有账号？去登录</div>
          </div>
        </div>
      </div>
    </header>
    
    <div v-show="currentPage === 'register'" class="my-10">
      <register @changeState="changeToLogin"></register>
      </div>
      <div v-show="currentPage === 'login'" class="my-10">
      <login @changeState="changeToRegister"></login>
    </div>
    <!-- <LoginAndRegister ref="loginAndregisterRef"></LoginAndRegister> -->
        <!-- 底部版权信息 -->
    <footer id="main-footer" class="bg-white py-6">
        <div class="container mx-auto px-4">
            <div class="text-center">
                <p class="text-gray-500 text-sm">© 2023 lectech. All rights reserved.</p>
            </div>
        </div>
    </footer>
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