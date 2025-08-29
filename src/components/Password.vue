<script setup>
import { ref, getCurrentInstance, defineProps } from 'vue'
const {proxy} = getCurrentInstance()
const props = defineProps({
  prePassword: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true,
  }
})
//数据


const emailForm = ref({
  password: '',
});

//密码显示与隐藏切换
const passwordFieldType = ref({
  email: 'password',
  phone: 'password'
});

const togglePasswordVisibility = (formType) => {
  passwordFieldType.value[formType] = passwordFieldType.value[formType] === 'password' ? 'text' : 'password';
};

//两次密码的校验
const checkRePassword = (rule, value, callback) => {
    if (value !== props.prePassword) {
        callback(new Error('两次输入的密码不一致'));
        } else {
        callback();
    }
}

//校验规则
const rules = {
  Password: [
    {required: true, message: "请输入密码"},
    {
      validator: proxy.Verify.password, 
      message: "密码只能是数字, 字母, 特殊字符 要求8-18位"
    }
  ],
  rePassword:  [
    {required: true, message: "请再次输入密码"},
    {
      validator: checkRePassword, 
      message: "两次输入的密码不一致"
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
    :rules="rules[type]"
     id="password" 
     v-model="emailForm.password" 
     class="w-full px-4 py-3 rounded-lg border border-gray-300 form-input-focus" 
     :placeholder="type == 'Password' ? '请设置密码' :'请再次输入密码'"
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