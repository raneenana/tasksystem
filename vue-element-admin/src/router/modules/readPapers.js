import Layout from '@/layout'
const readRouter = {
  path: '/readPapers',
  component: Layout,
  redirect: 'noredirect',
  name: 'readPapers',
  meta: {
    title: 'readPapers',
    icon: 'project'
  },
  children: [{
    path: 'waitClass',
    component: () => import('@/views/readPapers/waitClass'),
    name: 'waitClass',
    meta: {
      title: 'waitClass',
      noCache: true
    }
  },
  {
    path: 'wait',
    component: () => import('@/views/charts/keyboard'),
    name: 'wait',
    meta: {
      title: '',
      noCache: true,
      hidden: true
    }
  }
  ]
}
export default readRouter
