/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'

const examRouter = {
  path: '/classes',
  component: Layout,
  redirect: 'noredirect',
  name: 'Classes',
  meta: {
    title: 'classes',
<<<<<<< HEAD
    icon: 'table',
    view_id: 'main-student,main-room,main-grade'
=======
    icon: 'table'
    // view_id: 'main-grade,main-student,main-room'
>>>>>>> 4387b27472b77ef2d7c1a1656c5d81b5bd128db2
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
<<<<<<< HEAD
      meta: { title: 'classroom', noCache: true, view_id: 'main-room' }
=======
      meta: { title: 'classroom', noCache: true, view_id: 'main-student' }
>>>>>>> 4387b27472b77ef2d7c1a1656c5d81b5bd128db2
    },
    {
      path: 'student',
      component: () => import('@/views/classes/student'),
      name: 'student',
<<<<<<< HEAD
      meta: { title: 'student', noCache: true, view_id: 'main-student' }
=======
      meta: { title: 'student', noCache: true, view_id: 'main-room' }
>>>>>>> 4387b27472b77ef2d7c1a1656c5d81b5bd128db2
    }
  ]
}

export default examRouter
