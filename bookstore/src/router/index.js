import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import Login from '@/components/Login'
import ViewPage from '@/components/ViewPage'
import DataTable from '@/components/DataTable'
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
      path:'/viewpage',
      name:'ViewPage',
      component:ViewPage
    },
    {
      path:'/datatable',
      name:'DataTable',
      component:DataTable
    }
  ]
})
