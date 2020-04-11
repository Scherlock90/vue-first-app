import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

function lazyLoad (url, view) {
  return () => import(`@/components/${url}/${view}.vue`)
}

export default new Router({
  base: '/vue-first-app/',
  mode: 'history',
  routes: [
    {
      path: '*',
      name: 'NotFoundComponent',
      component: lazyLoad('not-found', 'NotFoundComponent')
    },
    {
      path: '/',
      name: 'Home',
      component: lazyLoad('home', 'Home')
    },
    {
      path: '/contact',
      name: 'Contact',
      component: lazyLoad('contact', 'Contact')
    },
    {
      path: '/about-me',
      name: 'About Me',
      component: lazyLoad('about-me', 'AboutMe')
    },
    {
      path: '/blog',
      name: 'Blog',
      component: lazyLoad('blog', 'Blog')
    }
    // {
    //   path: '/Test',
    //   name: 'Test',
    //   component: lazyLoad('testing-component', 'Test')
    // }
  ]
})
