import { createRouter, createWebHistory } from 'vue-router'
import ArticleDetail from '../pages/ArticleDetail'
import Publish from '../pages/Publish'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Profile from '../pages/Profile'
import Ranking from '../pages/Ranking'
import Register from '../pages/Register'
import Search from '../pages/Search'
import Topic from '../pages/Topic'

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
        }
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
