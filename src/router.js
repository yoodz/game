import Vue from 'vue'
import Router from 'vue-router'
import Snake from './views/Snake.vue'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/snake',
      name: 'snake',
      component: Snake
    }
  ]
})
