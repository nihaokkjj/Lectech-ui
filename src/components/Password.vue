<script setup>
import { ref, getCurrentInstance, defineProps, watch, computed } from 'vue'
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

const emit = defineEmits(['update: modelValue'])
//数据
const password = ref('')
const errorMessage = ref('')

//监听密码变换
watch(password, (newValue) => {
  emit('update:modelValue', newValue)
  validate()
})

//提示信息
const placeholderText = computed(() => props.type === 'password' ? '设置密码' : '请再次输入密码')

//密码显示与隐藏切换
const passwordFieldType = ref( 'password');

const togglePasswordVisibility = () => {
  passwordFieldType.value = passwordFieldType.value === 'password' ? 'text' : 'password';
};

//两次密码的校验
const validate = () => {
    errorMessage.value = '';
    if (!password.value) {
        errorMessage.value = '请输入密码';
        return false;
    }
    if (props.type === 'password') {
        const passwordValidationResult = proxy.Verify.password( password.value, '密码需包含数字和字母,可以含有特殊字符,要求8-18位');
        if (passwordValidationResult) {
            errorMessage.value = passwordValidationResult;
            return false;
        }
    } else if (props.type === 'rePassword') {
        if (password.value !== props.prePassword) {
            errorMessage.value = '两次输入的密码不一致';
            return false;
        }
    }
    return true;
};   

</script>

<template>
<div>
    <label for="password" 
    class="block text-sm font-medium text-gray-700 mb-1">
    {{ type === 'password' ? '密码' : '请再次输入密码' }}
  </label>
    <div class="relative text-center">
    <input 
     v-model="password" 
     :type="passwordFieldType"
     class="w-full px-4 py-3 rounded-lg border border-gray-300 form-input-focus" 
     :class="{'form-input-error': errorMessage}"
     :placeholder="placeholderText"
     required>
    <button 
     type="button"
     @click="togglePasswordVisibility"
     class="absolute bg-white right-3 text-gray-400 hover:text-gray-600">
        <i :class="passwordFieldType === 'password' ? 'far fa-eye-slash':'far fa-eye'"></i>
    </button>
    </input>
    </div>
    <p v-if="errorMessage" class="mt-2 text-red-600">{{ errorMessage }}</p>
  </div>
</template>

<style scoped>
button {
    outline: none;
}
/* 默认边框颜色 */
.form-input-focus {
  outline: none;
  border-color: #4F46E5;
}

/* 输入框获得焦点时的边框颜色 */
.form-input-focus:focus {
  outline: none;
  border-color: #4F46E5;
  box-shadow: 0 0 0 2px rgba(79, 70, 229, 0.2);
  }
  .form-input-error {
    border-color: #EF4444; /* red-500 */
}
</style>