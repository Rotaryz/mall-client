export default [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: () => lazyLoadView(import('@pages/home/home')),
  },
  // 测试页面注释
  {
    path: '/test-page',
    name: 'test-page',
    component: () => lazyLoadView(import('@pages/test-page/test-page')),
    children: [
      {
        path: '/sample',
        name: 'sample',
        component: () => lazyLoadView(import('@pages/sample/sample'))
      },
      {
        path: '/other-pages',
        name: 'other-pages',
        component: () => lazyLoadView(import('@pages/other-pages/other-pages'))
      },
    ]
  },
  {
    path: '/404',
    name: '404',
    component: require('@pages/_404/_404').default,
    props: true
  },
  {
    path: '*',
    redirect: '404'
  }
]

function lazyLoadView(AsyncView) {
  const AsyncHandler = () => ({
    component: AsyncView,
    loading: require('@pages/_loading/_loading').default,
    delay: 400,
    error: require('@pages/_timeout/_timeout').default,
    timeout: 1000*100
  })

  return Promise.resolve({
    functional: true,
    render(h, {data, children}) {
      // 将属性和方法传递给所有展示组件
      return h(AsyncHandler, data, children)
    }
  })
}
