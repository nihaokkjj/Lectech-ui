import { createApp } from 'vue'
<<<<<<< HEAD
import './assets/styles/style.css'
import App from './App.vue'

import router from './router/index.js'


=======

import './style.scss'
import './assets/styles/style.css'
import router from './router/index.ts'
import App from './App.vue'


>>>>>>> contributor/main
const app = createApp(App)

app.use(router)

app.mount('#app')