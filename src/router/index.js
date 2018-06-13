import Vue from 'vue'
import Router from 'vue-router'
import home from '../page/home/home'
import pic from '../components/pic/pic'
import listPic from '../components/pic/listPic'
import headers from '../components/headers/headers'
import list from '../components/list/list'
import split from '../components/split/split'
import tabbars from '../components/tabbars/tabbars'
import listDetail from '../components/list/listDetail'
import tops from '../page/tops/tops'
import regist from '../page/regist/regist'
import login from '../page/login/login'
import goods from '../page/goods/goods'
//import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/pic',
      name: 'pic',
      component: pic
    },
    {
      path: '/headers',
      name: 'headers',
      component: headers
    },
    {
      path: '/list',
      name: 'list',
      component: list
    },{
      path: '/split',
      name: 'split',
      component: split
    },
    {
      path: '/listDetail',
      name: 'listDetail',
      component: listDetail
    },
    {
      path: '/tops',
      name: 'tops',
      component: tops
    },
    {
      path: '/listPic',
      name: 'listPic',
      component: listPic
    },
    {
      path: '/regist',
      name: 'regist',
      component: regist
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/goods',
      name: 'goods',
      component: goods
    },
    {
      path: '/tabbars',
      name: 'tabbars',
      component: tabbars
    }
  ]
})
