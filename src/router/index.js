import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

function lazyLoad (view) {
  return () => import(`@/components/${view}.vue`)
}

export default new Router({
  base: '/vue-first-app/',
  mode: 'history',
  routes: [
    {
      path: '*',
      name: 'NotFoundComponent',
      component: lazyLoad('NotFoundComponent')
    },
    {
      path: '/',
      name: 'Home',
      component: lazyLoad('Home')
    },
    {
      path: '/Contact',
      name: 'Contact',
      component: lazyLoad('Contact')
    },
    {
      path: '/Test',
      name: 'Test',
      component: lazyLoad('Test')
    }
  ]
})
