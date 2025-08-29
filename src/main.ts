import { createApp } from 'vue'

import './assets/styles/style.css'
import router from './router/index.ts'
import App from './App.vue'
import Verify from './utils/Verify.ts'

const app = createApp(App)
app.config.globalProperties.Verify = Verify

app.use(router)

app.mount('#app')