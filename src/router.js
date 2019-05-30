import Vue from 'vue'
import Router from 'vue-router'
import Snake from './components/Snake.vue'
import Home from './components/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/Snake',
      name: 'snake',
      component: Snake
    }
  ]
})
