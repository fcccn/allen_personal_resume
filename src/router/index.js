import Vue from 'vue'
import Router from 'vue-router'
const Index = () => import('@/components/Index')
const Test = () => import('@/components/Test')

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/bytest',
      name: 'Test',
      component: Test
    }
  ]
})
