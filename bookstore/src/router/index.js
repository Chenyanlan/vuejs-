import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import Login from '@/components/Login'
import ViewPage from '@/components/ViewPage'
import DataTable from '@/components/DataTable'
import Home from '@/components/Home'
import Detail from '@/components/Detail'
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
      path:'/datatable',
      name:'DataTable',
      component:DataTable
    },
    {
      path:'/home',
      name:'Home',
      component:Home
    }
  ]
})
