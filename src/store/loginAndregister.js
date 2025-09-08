import {defineStore} from 'pinia'
import {ref, computed } from 'vue'

export const useLoginStore = defineStore('loginAndregister', () => {
    
    const user = ref(null)

    const userName = computed(
        () => user.value ? user.value.name : '游客')

    const isLoggedIn = ref(false)

    //登录操作
    async function login(userData) {
        return new Promise((resolve) => {
            setTimeout(() => {
                isLoggedIn.value = true
                user.value = userData
                console.log('用户已登录', user.value)
                resolve(true)
            }, 1000)
        })
    }

    function logout() {
        isLoggedIn.value = false
        user.value = null
        console.log('用户已退出')
    }
    return {
        isLoggedIn,
        userName,
        user,
        userName,
        login,
        logout
    }
})