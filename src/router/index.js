import { createRouter, createWebHistory } from 'vue-router'
<<<<<<< HEAD
import ArticleDetail from '../pages/ArticleDetail/index.vue'
import Layout from '../pages/Layout/index.vue'
import Publish from '../pages/Publish/index.vue'
import Home from '../pages/Home/index.vue'
import Login from '../pages/Login/index.vue'
import Profile from '../pages/Profile/index.vue'
import Ranking from '../pages/Ranking/index.vue'
import Register from '../pages/Register/index.vue'
import Search from '../pages/Search/index.vue'
import Topic from '../pages/Topic/index.vue'
=======
import ArticleDetail from '../pages/ArticleDetail'
import Publish from '../pages/Publish'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Profile from '../pages/Profile'
import Ranking from '../pages/Ranking'
import Register from '../pages/Register'
import Search from '../pages/Search'
import Topic from '../pages/Topic'
>>>>>>> 084d5f85ad260568e270eec528c0100d4f315b9b

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  //path, component
  routes: [
    {
      path: '/',
      component: Layout,
      children: [
        {
          path: '',
          component: Home,
        },
        {
          path: 'topic/:id',
          component: Topic,
        },
        {
          path: 'ranking/:id',
          component: Ranking,
        },
        {
          path: 'profile/:id',
          component: Profile,
        },       
        {
          path: 'search/:id',
          component: Search,
        },        
        {
          path: 'publish/:id',
          component: Publish,
        },
        {
          path: 'detail/:id',
          components: ArticleDetail,
<<<<<<< HEAD
        },
=======
        }
>>>>>>> 084d5f85ad260568e270eec528c0100d4f315b9b
      ]
    },
    {
      path: '/login',
      component: Login,
    },
    {
      path: '/register',
      component: Register,
    }
  ],
})

export default router
