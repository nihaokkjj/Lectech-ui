<script setup>
import { ref, getCurrentInstance, defineProps } from 'vue'
const {proxy} = getCurrentInstance()
//数据
const passwordFieldType = ref({
  email: 'password',
  phone: 'password'
});

const emailForm = ref({
  password: '',
});
//密码显示与隐藏切换
const togglePasswordVisibility = (formType) => {
  passwordFieldType.value[formType] = passwordFieldType.value[formType] === 'password' ? 'text' : 'password';
};

//校验规则
const rules = {
  password: [
    {required: true, message: "请输入密码"},
    {
      validator: proxy.Verify.password, 
      message: "密码只能是数字, 字母, 特殊字符 要求8-18位"
    }
  ],
}
</script>

<template>
<div>
    <label for="password" 
    class="block text-sm font-medium text-gray-700 mb-1">密码</label>
    <div class="relative text-center">
    <input 
    :type="passwordFieldType.email"
    :rules="rules.password"
     id="password" 
     v-model="emailForm.password" 
     class="w-full px-4 py-3 rounded-lg border border-gray-300 form-input-focus" 
     placeholder="请设置密码" 
     required>
    <button 
     type="button"
     @click="togglePasswordVisibility('email')"
     class="absolute bg-white right-3 text-gray-400 hover:text-gray-600">
        <i :class="passwordFieldType.email === 'password' ? 'far fa-eye' : 'far fa-eye-slash'"></i>
    </button>
    </div>
</div>
</template>

<style scoped>
button {
    outline: none;
}
/* 默认边框颜色 */
.form-input-focus {
  border-color: #4F46E5;
}

/* 输入框获得焦点时的边框颜色 */
.form-input-focus:focus {
  outline: none;
  border-color: #4F46E5;
  box-shadow: 0 0 0 2px rgba(79, 70, 229, 0.2);
  }
</style>