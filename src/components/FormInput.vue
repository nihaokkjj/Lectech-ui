<script setup>
import {getCurrentInstance, watch, ref, defineProps, defineExpose } from 'vue';

const {proxy} = getCurrentInstance()
//type有三种类型:email, tel(phone),text(username) 
const props = defineProps({
    modelValue: String,
    type: { 
        type: String,
        required: false,
    },
})

let msgId = ''
if (props.type === 'email') {
    msgId = '邮箱'
} else if (props.type === 'tel') {
    msgId = '手机号'
} else msgId = '用户名'

//输入提示词
const placeholderText = '请输入'+ msgId
//错误信息提示
const errorMessage = ref('')
//监听用户输入
const emits = defineEmits(['update:modelValue'])
watch (
    () =>  props.modelValue, 
    (newValue) => {
    validate(newValue)
} )

//信息校验
const validate = (value) => {
    errorMessage.value = ''
    if(!value) {
        errorMessage.value = '请输入' + msgId
        return false
    }
    if (props.type === 'email') {
        const emailValidateResult = proxy.Verify.email(value, '请输入正确的邮箱' )
        if(emailValidateResult) {
            errorMessage.value = emailValidateResult
            return false
        } 
    }  else if (props.type === 'tel') {
            const telValidateResult = proxy.Verify.phone(value, '请输入正确的电话号码')
            if(telValidateResult) {
                errorMessage.value = telValidateResult
                return false
            }
        } else if (props.type === 'text') {
        // 对于用户名，如果值存在，则验证通过
        // 错误信息保持为空，直接返回 true
        return true;
    }
        errorMessage.value = ''
        return true
    }

defineExpose({errorMessage})
</script>

<template>
    <div>
        <label 
        for="email" 
        class="block text-sm font-medium text-gray-700 mb-1">
        {{ msgId }}
    </label>
        <input 
        :type="props.type" 
        :value="props.modelValue" 
        @input="emits('update:modelValue', $event.target.value)"
        class="w-full px-4 py-3 rounded-lg border border-gray-300 form-input-focus" 
        :class="{'form-input-error': errorMessage}"
        :placeholder="placeholderText" 
        required>
    </div>
    <p v-if="errorMessage"class="mt-2 text-red-600">{{errorMessage}}</p>
</template>

<style scoped>
  .form-input-error {
    border-color: #EF4444; /* red-500 */
  }
</style>