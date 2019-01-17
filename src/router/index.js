import Vue from 'vue'
import Router from 'vue-router'
import Example from '@/vuepage/example'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Example
    }
  ]
})
