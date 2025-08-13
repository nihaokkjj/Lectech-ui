import { createRouter, createWebHistory } from 'vue-router'
import ArticleDetail from '../pages/ArticleDetail/index.vue'
import Layout from '../pages/Layout/index.vue'
import Publish from '../pages/Publish/index.vue'
import Home from '../pages/Home/index.vue'
import Login from '../pages/Login/index.vue'
import Profile from '../pages/Profile/index.vue'
import Rank from '../pages/Rank/index.vue'
import Register from '../pages/Register/index.vue'
import Search from '../pages/Search/index.vue'
import Topic from '../pages/Topic/index.vue'

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
          path: 'topic/',
          component: Topic,
        },
        {
          path: 'rank/',
          component: Rank,
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
        },
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
