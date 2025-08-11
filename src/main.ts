import { createApp } from 'vue'
import './assets/styles/style.css'
import App from './App.vue'

import router from './router/index.js'


const app = createApp(App)

app.use(router)

app.mount('#app')