<template>
  <main class="flex-grow w-2xl flex items-center justify-center py-12 px-4">
    <div id="register-container" class="bg-white rounded-xl shadow-card p-8 w-full max-w-md">
      <div class="text-center mb-8">
        <h2 class="text-2xl font-bold text-gray-800">注册 lectech</h2>
        <p class="text-gray-500 mt-2">加入技术交流社区，分享你的知识</p>
      </div>
      
      <div id="register-tabs" class="flex border-b border-gray-200 mb-6">
        <button
          @click="currentTab = 'email'"
          :class="{'tab-active': currentTab === 'email', 'tab-inactive': currentTab !== 'email'}"
          class="flex-1 py-3 text-center font-medium bg-white focus:outline-none"
        >
          邮箱注册
        </button>
        <button
          @click="currentTab = 'phone'"
          :class="{'tab-active': currentTab === 'phone', 'tab-inactive': currentTab !== 'phone'}"
          class="flex-1 py-3 text-center font-medium bg-white focus:outline-none"
        >
          手机号注册
        </button>
      </div>
      
      <form v-if="currentTab === 'email'" @submit.prevent="handleEmailRegister" class="space-y-5 text-left">
        <FormInput v-model="emailForm.username" type="text"></FormInput>
        <FormInput v-model="emailForm.email" type="email" ></FormInput>

        <div>
          <Password
          v-model="emailForm.password"
          :prePassword="emailForm.password"
          type="password"
          ></Password>
          <Password
          v-model="emailForm.confirmPassword"
          :prePassword="emailForm.password"
          type="rePassword"
          ></Password>
        </div>
        
        <div class="flex items-start">
          <input type="checkbox" id="agree-terms" v-model="emailForm.agreeTerms" class="mt-1 h-4 w-4 text-primary border-gray-300 rounded focus:ring-primary" required>
          <label for="agree-terms" class="ml-2 block text-sm text-gray-600">
            我已阅读并同意 <a href="#" @click.prevent="showTerms" class="text-primary hover:underline">用户协议</a> 和 <a href="#" @click.prevent="showPrivacy" class="text-primary hover:underline">隐私政策</a>
          </label>
        </div>
        
        <button type="submit" class="w-full bg-primary hover:bg-secondary text-white py-3 rounded-lg font-medium btn-primary-effect">注册</button>
      </form>
      
      <form v-if="currentTab === 'phone'" @submit.prevent="handlePhoneRegister" class="space-y-5 text-left">
        <FormInput v-model="phoneForm.username" type="text"></FormInput>
        <FormInput v-model="phoneForm.phoneNumber" type="tel" ></FormInput>
        
        <div>
          <label for="verification-code" class="block text-sm font-medium text-gray-700 mb-1">验证码</label>
          <div class="flex space-x-3">
            <input type="text" id="verification-code" v-model="phoneForm.verificationCode" class="flex-1 px-4 py-3 rounded-lg border border-gray-300 form-input-focus" placeholder="请输入验证码" required>
            <button
              type="button"
              @click="sendVerificationCode"
              :disabled="countdown > 0"
              :class="{'bg-gray-200 cursor-not-allowed': countdown > 0}"
              class="px-4 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 font-medium"
            >
              {{ countdown > 0 ? `${countdown}s后重新获取` : '获取验证码' }}
            </button>
          </div>
        </div>
        
        <div>
          <Password
          v-model="phoneForm.password"
          :prePassword="phoneForm.password"
          type="password"
          ></Password>
          <Password
          v-model="phoneForm.confirmPassword"
          :prePassword="phoneForm.password"
          type="rePassword"
          ></Password>
        </div>
        
        <div class="flex items-start">
          <input type="checkbox" id="phone-agree-terms" v-model="phoneForm.agreeTerms" class="mt-1 h-4 w-4 text-primary border-gray-300 rounded focus:ring-primary" required>
          <label for="phone-agree-terms" class="ml-2 block text-sm text-gray-600">
            我已阅读并同意 <a href="#" @click.prevent="showTerms" class="text-primary hover:underline">用户协议</a> 和 <a href="#" @click.prevent="showPrivacy" class="text-primary hover:underline">隐私政策</a>
          </label>
        </div>
        
        <button type="submit" class="w-full bg-primary hover:bg-secondary text-white py-3 rounded-lg font-medium btn-primary-effect">注册</button>
      </form>
      
      <div class="mt-8">
        <div class="flex items-center justify-center">
          <span class="h-px bg-gray-300 flex-grow"></span>
          <span class="px-4 text-sm text-gray-500">其他方式登录</span>
          <span class="h-px bg-gray-300 flex-grow"></span>
        </div>
        
        <div class="flex justify-center space-x-6 mt-4">
          <button @click="handleSocialLogin('wechat')" class="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-xl text-green-600 hover:bg-gray-200">
            <i class="fab fa-weixin"></i>
          </button>
          <button @click="handleSocialLogin('qq')" class="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-xl text-blue-500 hover:bg-gray-200">
            <i class="fab fa-qq"></i>
          </button>
          <button @click="handleSocialLogin('github')" class="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-xl text-gray-800 hover:bg-gray-200">
            <i class="fab fa-github"></i>
          </button>
        </div>
      </div>
    </div>
  </main>

</template>

<script setup>
import { ref , defineProps, onBeforeUpdate, defineEmits} from 'vue';
import { getCurrentInstance } from 'vue';
import Password from '@/components/Password.vue'
import FormInput from '@/components/FormInput.vue';
import { errorMessages } from 'vue/compiler-sfc';
import { useRouter } from 'vue-router';

//切换到登录页面
const emits = defineEmits(['changeState'])
const switchToLogin = () => {
  emits('changeState')
}

const router = useRouter()
const {proxy} = getCurrentInstance()

const currentTab = ref('email');
const countdown = ref(0);

//用户输入的信息
const emailForm = ref({
  username: '',
  email: '',
  password: '',
  confirmPassword: '',
  agreeTerms: false
});
const phoneForm = ref({
  username: '',
  phoneNumber: '',
  verificationCode: '',
  password: '',
  confirmPassword: '',
  agreeTerms: false
});
const passwordFieldType = ref({
  email: 'password',
  phone: 'password'
});

const togglePasswordVisibility = (formType) => {
  passwordFieldType.value[formType] = passwordFieldType.value[formType] === 'password' ? 'text' : 'password';
};

const sendVerificationCode = () => {
  if (!phoneForm.value.phoneNumber) {
    alert('请输入手机号');
    return;
  }
  
  // 模拟发送验证码，启动倒计时
  countdown.value = 60;
  const timer = setInterval(() => {
    countdown.value--;
    if (countdown.value <= 0) {
      clearInterval(timer);
    }
  }, 1000);
};

const handleEmailRegister = () => {
  // 表单验证逻辑
  if (!emailForm.value.username || !emailForm.value.email || !emailForm.value.password || !emailForm.value.confirmPassword) {
    alert('请填写完整信息');
    return;
  }
  
  if (!emailForm.value.agreeTerms) {
    alert('请阅读并同意用户协议和隐私政策');
    return;
  }
  
  if (emailForm.value.password !== emailForm.value.confirmPassword) {
    alert('两次输入的密码不一致')
    return;
  }
  // 模拟注册成功
  alert('注册成功，请登录');
  switchToLogin()
  // 实际项目中应调用API进行注册
  // 注册成功后可跳转到登录页或主页
  // window.location.href = 'P-LOGIN.html';

};

const handlePhoneRegister = () => {
  // 表单验证逻辑
  if (!phoneForm.value.username || !phoneForm.value.phoneNumber || !phoneForm.value.verificationCode || !phoneForm.value.password || !phoneForm.value.confirmPassword) {
    alert('请填写完整信息');
    return;
  }
  
  if (!phoneForm.value.agreeTerms) {
    alert('请阅读并同意用户协议和隐私政策');
    return;
  }
  if (!phoneForm.value.password !== phoneForm.value.confirmPassword) {
    alert('两次输入的密码不一致')
    return;
  }
  // 模拟注册成功
  alert('注册成功，请登录');
  switchToLogin()
  // 实际项目中应调用API进行注册
  // 注册成功后可跳转到登录页或主页
  // window.location.href = 'P-LOGIN.html';
};

const handleSocialLogin = (platform) => {
  alert(`${platform}登录功能暂未实现`);
  // 实际项目中应调用第三方登录API
};

const showTerms = () => {
  alert('用户协议页面暂未实现');
};

const showPrivacy = () => {
  alert('隐私政策页面暂未实现');
};
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