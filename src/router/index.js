import Vue from 'vue'
import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/home/home'
import Cart from '@/components/cart/cart'
import Mine from '@/components/mine/mine'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path:'/cart',
      name:'cart',
      component:Cart
    }
    ,
    {
      path:'/mine',
      name:'mine',
      component:Mine
    }
  ]
})

