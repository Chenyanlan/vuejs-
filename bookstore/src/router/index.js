import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import Login from '@/components/Login'
import Shouye from '@/components/Shouye'
import Home from '@/components/Home'
import Detail from '@/components/Detail'
import Register from '@/components/Register'
import Userhome from '@/components/Userhome'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path:'/login',
      name:'Login',
      component:Login
    },
    {
      path:'/detail',
      name:'Detail',
      component:Detail
    },
    {
      path:'/register',
      name:'Register',
      component:Register
    },
    {
      path:'/home',
      name:'Home',
      component:Home
    },
    {
      path:'/shouye',
      name:'Shouye',
      component:Shouye
    },
    {
      path:'/userhome',
      name:'Userhome',
      component:Userhome
    }
  ]
})
