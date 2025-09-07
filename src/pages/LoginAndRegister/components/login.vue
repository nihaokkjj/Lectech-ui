<template>
    <!-- 主内容区 -->
    <main class="flex-1 w-2xl flex items-center justify-center px-4 py-12">
        <div id="login-container" class="bg-white rounded-xl shadow-card w-full max-w-md p-8">
            <div id="login-header" class="text-center mb-8">
                <h2 class="text-2xl font-bold text-gray-800">登录 lectech</h2>
                <p class="text-gray-500 mt-2">欢迎回来，请登录您的账号</p>
            </div>
            
            <form @submit.prevent = "handleLogin" class="text-left space-y-6">
                <div class="space-y-2">
                    <label for="username" class="block text-sm font-medium text-gray-700">用户名/邮箱/手机号</label>
                    <div class="relative">
                        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <i class="fas fa-user text-gray-400"></i>
                        </div>
                        <input type="text" v-model="username" name="username" class="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg form-input-focus" placeholder="请输入用户名/邮箱/手机号" required>
                    </div>
                </div>
                <!-- 密码组件 -->
                <Password
                v-model="emailForm.password"
                :prePassword="emailForm.password"
                type="password"
                ></Password>
                
                <div class="flex items-center justify-between">
                    <div class="flex items-center">
                        <input type="checkbox" id="remember-me" name="remember-me" class="h-4 w-4 text-primary border-gray-300 rounded focus:ring-primary">
                        <label for="remember-me" class="ml-2 block text-sm text-gray-700">记住密码</label>
                    </div>
                    <a href="#" class="text-sm text-primary hover:text-secondary">忘记密码？</a>
                </div>
                
                <div>
                    <button 
                    type="submit" 
                    class="w-full bg-primary hover:bg-secondary text-white py-3 rounded-lg btn-primary-effect">
                        登录
                    </button>
                </div>
                
                <div  class="text-center flex mx-26">
                    <span class="text-gray-600">还没有账号？</span>
                    <div @click="switchToRegister" class=" text-primary hover:text-secondary font-medium">立即注册</div>
                </div>
            </form>
        </div>
    </main>

</template>

<script setup>
import { useRouter } from 'vue-router';
import { ref, onMounted , defineEmits, getCurrentInstance} from 'vue'
import Password from '@/components/Password.vue'
import {useLoginStore} from '@/store/loginAndregister'
import { storeToRefs } from 'pinia';

const { proxy } = getCurrentInstance()
const store = useLoginStore()
const router = useRouter()

const emits = defineEmits(['changeState'])

const switchToRegister = () => {
  // 当用户点击“立即注册”时，触发事件
  emits('changeState')
}
//登录逻辑
const username = ref('') //用户名
const handleLogin = async () => {
    if(username.value) { //具体的登录逻辑还有没实现, 等待后端中...
        const success = await store.login({userName: username.value})
        if (success) {
            router.replace('/')
        }
    }
}

//密码数据
const emailForm = ref({
  password: ''
});

</script>

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
</style>
