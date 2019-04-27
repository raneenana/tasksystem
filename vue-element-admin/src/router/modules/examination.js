/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'

const examination = {
  path: '/examination',
  component: Layout,
  redirect: 'noredirect',
  name: 'examination',
  meta: {
    title: 'examination',
<<<<<<< HEAD
    icon: 'documentation',
    view_id: 'main-examList,main-addExam'
=======
    icon: 'documentation'
    // view_id: 'main-addExam,main-examList'
>>>>>>> 4387b27472b77ef2d7c1a1656c5d81b5bd128db2
  },
  children: [{
    path: 'addexamination',
    component: () =>
        import('@/views/examination/addexamination'),
    name: 'Addexamination',
    meta: { title: 'Addexamination', noCache: true, view_id: 'main-addExam' }
  },
  {
    path: 'listexamination',
    component: () =>
    import('@/views/examination/listexamination'),
    name: 'Listexamination',
    meta: { title: 'Listexamination', noCache: true, view_id: 'main-examList' }
  },
  {
    path: 'add',
    hidden: true,
    component: () =>
        import('@/views/examination/add'),
    name: 'add',
<<<<<<< HEAD
    meta: { title: 'add', noCache: true, view_id: 'main-examEdit' }
=======
    meta: { title: 'add', noCache: true, view_id: 'mian-examEdit' }
>>>>>>> 4387b27472b77ef2d7c1a1656c5d81b5bd128db2
  },
  {
    path: 'detail',
    hidden: true,
    component: () =>
        import('@/views/examination/detail'),
    name: 'detail',
<<<<<<< HEAD
    meta: { title: 'detail', noCache: true, view_id: 'main-examDetail' }
=======
    meta: { title: 'detail', noCache: true, view_id: 'mian-examDetail' }
>>>>>>> 4387b27472b77ef2d7c1a1656c5d81b5bd128db2
  }]
}

export default examination
