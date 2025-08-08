import { createApp } from 'vue'
<<<<<<< HEAD
// import './style.css'
import './assets/styles/style.css'
import router from './router/index.js'
import App from './App.vue'

=======
import './style.css'
import App from './App.vue'

import router from './router/index.js'


>>>>>>> 084d5f85ad260568e270eec528c0100d4f315b9b
const app = createApp(App)

app.use(router)

app.mount('#app')