import { createApp } from 'vue'

import './style.scss'
import './assets/styles/style.css'
import router from './router/index.ts'
import App from './App.vue'


const app = createApp(App)

app.use(router)

app.mount('#app')