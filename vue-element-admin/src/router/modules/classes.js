/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'

const examRouter = {
  path: '/classes',
  component: Layout,
  redirect: 'noredirect',
  name: 'Charts',
  meta: {
    title: 'classes',
    icon: 'table'
  },
  children: [
    {
      path: 'class',
      component: () => import('@/views/classes/class'),
      name: 'KeyboardChart',
      meta: { title: 'class', noCache: true }
    },
    {
      path: 'classroom',
      component: () => import('@/views/classes/classroom'),
      name: 'LineChart',
      meta: { title: 'classroom', noCache: true }
    },
    {
      path: 'student',
      component: () => import('@/views/classes/student'),
      name: 'MixChart',
      meta: { title: 'student', noCache: true }
    }
  ]
}

export default examRouter
