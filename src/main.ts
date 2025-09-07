import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './assets/styles/style.css'
import router from './router/index.ts'
import App from './App.vue'
import Verify from './utils/Verify.ts'

const pinia = createPinia()
const app = createApp(App)
app.config.globalProperties.Verify = Verify

app.use(pinia)
app.use(router)

app.mount('#app')