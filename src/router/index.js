import Vue from 'vue'
import VueRouter from 'vue-router'
import VueMeta from 'vue-meta'
import routes from './routes'
import {$wechat, isMina} from '@utils/mall-utils'
// import NProgress from 'nprogress/nprogress'

// NProgress.configure({showSpinner: false})

Vue.use(VueRouter)
Vue.use(VueMeta, {
  keyName: 'page'
})

const router = new VueRouter({
  routes,
  mode: 'history',
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return {x: 0, y: 0}
    }
  }
})

router.beforeEach((routeTo, routeFrom, next) => {
  // if (routeFrom.name !== null) {
  //   NProgress.start()
  // }
  if (routeTo.name === '404') {
    isMina && $wechat.reLaunch('','_404Page')
  }
  return next()
})

router.beforeResolve(async (routeTo, routeFrom, next) => {
  // try {
  //   for (const route of routeTo.matched) {
  //     await new Promise((resolve, reject) => {
  //       if (route.meta && route.meta.beforeResolve) {
  //         route.meta.beforeResolve(routeTo, routeFrom, (...args) => {
  //           if (args.length) {
  //             if (routeFrom.name === args[0].name) {
  //               NProgress.done()
  //             }
  //             next(...args)
  //             reject(new Error('Redirected'))
  //           } else {
  //             resolve()
  //           }
  //         })
  //       } else {
  //         resolve()
  //       }
  //     })
  //   }
  // } catch (error) {
  //   return
  // }
  next()
})

router.afterEach((routeTo, routeFrom) => {
  // NProgress.done()
})

export default router
