import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Class from '@/components/Class'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/class',
      name: 'Class',
      component: Class
    }
  ]
})
