/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'

const examRouter = {
  path: '/classes',
  component: Layout,
  redirect: 'noredirect',
  name: 'Classes',
  meta: {
    title: 'classes',
    icon: 'table'
    // view_id: 'main-grade,main-student,main-room'
  },
  children: [
    {
      path: 'class',
      component: () => import('@/views/classes/class'),
      name: 'class',
      meta: { title: 'class', noCache: true, view_id: 'main-grade' }
    },
    {
      path: 'classroom',
      component: () => import('@/views/classes/classroom'),
      name: 'classroom',
      meta: { title: 'classroom', noCache: true, view_id: 'main-room' }
    },
    {
      path: 'student',
      component: () => import('@/views/classes/student'),
      name: 'student',
      meta: { title: 'student', noCache: true, view_id: 'main-student' }
    }
  ]
}

export default examRouter
