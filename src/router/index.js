import Vue from 'vue'
import Router from 'vue-router'
import index from '@/views/index'
import Market from '@/views/index/market'
import Assets from '@/views/assets'
import UserInfo from '@/views/userinfo'
import Login from '@/views/login'
import Register from '@/views/register'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      children:[
        {
          path: '/',
          name: 'Market',
          component: Market,
        }, {
          path:'/Assets',
          name: 'Assets',
          component: Assets,
        }, {
          path:'/UserInfo',
          name: 'UserInfo',
          component: UserInfo,
        }
      ]
    }, {
      path: '/Login',
      name: 'Login',
      component: Login
    }, {
      path: '/Register',
      name: 'Register',
      component: Register
    }
  ]
})
