<script setup>

const props = defineProps({
  show: {
    type: Boolean,
    default: true,
  }, 
  showClose: {
    type: Boolean,
    default: true,
  },
  width: {
    type: String,
    default: '30%'
  },
  top: {
    type: String,
    default: '50%'
  },
  buttons: {
    type: Array,
  },
  showCancle: {
    type: Boolean,
    default: true
  },

})

const emit = defineEmits(['close'])
const close = () => {
  console.log('guabi')
  emit('close')
}
</script>

<template>
      <form v-if="currentTab === 'email'" @submit.prevent="handleEmailRegister" class="form-container">
        <div>
          <label for="username" class="form-label">用户名</label>
          <input
            v-model="emailForm.username"
            type="text"
            id="username"
            name="username"
            class="form-input"
            placeholder="请设置用户名"
            required
          />
        </div>
        
        <div>
          <label for="email" class="form-label">邮箱</label>
          <input
            v-model="emailForm.email"
            type="email"
            id="email"
            name="email"
            class="form-input"
            placeholder="请输入邮箱"
            required
          />
        </div>
        
        <div>
          <label for="password" class="form-label">密码</label>
          <div class="input-container-relative">
            <input
              v-model="emailForm.password"
              :type="emailPasswordType"
              id="password"
              name="password"
              class="form-input"
              placeholder="请设置密码"
              required
            />
            <button type="button" @click="toggleEmailPassword" class="password-toggle-btn">
              <i :class="emailPasswordIcon"></i>
            </button>
          </div>
          <p class="password-hint">密码长度至少8位，包含字母和数字</p>
        </div>
        
        <div>
          <label for="confirm-password" class="form-label">确认密码</label>
          <input
            v-model="emailForm.confirmPassword"
            type="password"
            id="confirm-password"
            name="confirm-password"
            class="form-input"
            placeholder="请再次输入密码"
            required
          />
        </div>
        
        <div class="terms-container">
          <input
            v-model="emailForm.agreeTerms"
            type="checkbox"
            id="agree-terms"
            name="agree-terms"
            class="checkbox-input"
            required
          />
          <label for="agree-terms" class="terms-label">
            我已阅读并同意 <a href="#" @click.prevent="showTerms" class="terms-link">用户协议</a> 和 <a href="#" @click.prevent="showPrivacy" class="terms-link">隐私政策</a>
          </label>
        </div>
        
        <button type="submit" class="register-btn btn-primary-effect">注册</button>
      </form>
      
      <form v-if="currentTab === 'phone'" @submit.prevent="handlePhoneRegister" class="form-container">
        <div>
          <label for="phone-username" class="form-label">用户名</label>
          <input
            v-model="phoneForm.username"
            type="text"
            id="phone-username"
            name="phone-username"
            class="form-input"
            placeholder="请设置用户名"
            required
          />
        </div>
        
        <div>
          <label for="phone-number" class="form-label">手机号</label>
          <input
            v-model="phoneForm.phoneNumber"
            type="tel"
            id="phone-number"
            name="phone-number"
            class="form-input"
            placeholder="请输入手机号"
            required
          />
        </div>
        
        <div>
          <label for="verification-code" class="form-label">验证码</label>
          <div class="verification-code-container">
            <input
              v-model="phoneForm.verificationCode"
              type="text"
              id="verification-code"
              name="verification-code"
              class="form-input-flex"
              placeholder="请输入验证码"
              required
            />
            <button
              type="button"
              @click="sendVerificationCode"
              :disabled="isCodeSending"
              :class="['send-code-btn', isCodeSending ? 'sending' : '']"
            >
              {{ codeButtonText }}
            </button>
          </div>
        </div>
        
        <div>
          <label for="phone-password" class="form-label">密码</label>
          <div class="input-container-relative">
            <input
              v-model="phoneForm.password"
              :type="phonePasswordType"
              id="phone-password"
              name="phone-password"
              class="form-input"
              placeholder="请设置密码"
              required
            />
            <button type="button" @click="togglePhonePassword" class="password-toggle-btn">
              <i :class="phonePasswordIcon"></i>
            </button>
          </div>
          <p class="password-hint">密码长度至少8位，包含字母和数字</p>
        </div>
        
        <div>
          <label for="phone-confirm-password" class="form-label">确认密码</label>
          <input
            v-model="phoneForm.confirmPassword"
            type="password"
            id="phone-confirm-password"
            name="phone-confirm-password"
            class="form-input"
            placeholder="请再次输入密码"
            required
          />
        </div>
        
        <div class="terms-container">
          <input
            v-model="phoneForm.agreeTerms"
            type="checkbox"
            id="phone-agree-terms"
            name="phone-agree-terms"
            class="checkbox-input"
            required
          />
          <label for="phone-agree-terms" class="terms-label">
            我已阅读并同意 <a href="#" @click.prevent="showTerms" class="terms-link">用户协议</a> 和 <a href="#" @click.prevent="showPrivacy" class="terms-link">隐私政策</a>
          </label>
        </div>
        
        <button type="submit" class="register-btn btn-primary-effect">注册</button>
      </form>
</template>

<style scoped lang="scss">

</style>