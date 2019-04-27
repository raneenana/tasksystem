import Layout from '@/layout'
const readRouter = {
  path: '/readPapers',
  component: Layout,
  redirect: 'noredirect',
  name: 'readPapers',
  meta: {
    title: 'readPapers',
<<<<<<< HEAD
    icon: 'project',
    view_id: 'main-main-examPaperClassList,main-examPaperClassnate'
=======
    icon: 'project'
    // view_id: 'main-examPaperClassList'
>>>>>>> 4387b27472b77ef2d7c1a1656c5d81b5bd128db2
  },
  children: [{
    path: 'waitClass', // 待批班级
    component: () => import('@/views/readPapers/waitClass'),
    name: 'waitClass',
    meta: {
<<<<<<< HEAD
      title: 'waitClass',
      noCache: true,
      view_id: 'main-main-examPaperClassList'
    }
=======
      title: 'waitClass', noCache: true, view_id: 'main-examPaperClassList' }
>>>>>>> 4387b27472b77ef2d7c1a1656c5d81b5bd128db2
  },
  {
    path: 'classmate', // 待批学生
    component: () => import('@/views/readPapers/classmate'), // Parent router-view
    name: 'classmate',
<<<<<<< HEAD
    meta: { title: 'classmate', view_id: 'main-examPaperClassnate' },
=======
    meta: { title: 'classmate', noCache: true, view_id: 'main-examPaperClassmate' },
>>>>>>> 4387b27472b77ef2d7c1a1656c5d81b5bd128db2
    hidden: true
  },
  {
    path: 'getscore', // 提交批卷分数
    component: () => import('@/views/readPapers/getscore'), // Parent router-view
    name: 'getscore',
<<<<<<< HEAD
    meta: { title: 'getscore', view_id: 'main-examinationPapers' },
=======
    meta: { title: 'getscore', noCache: true, view_id: 'wain-examinationPapers' },
>>>>>>> 4387b27472b77ef2d7c1a1656c5d81b5bd128db2
    hidden: true
  },
  {
    path: 'wait',
    component: () => import('@/views/charts/keyboard'),
    name: 'wait',
    meta: {
      title: '',
      noCache: true
    }
  }
  ]
}
export default readRouter
