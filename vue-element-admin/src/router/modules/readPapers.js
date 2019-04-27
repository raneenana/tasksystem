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
      title: 'waitClass', noCache: true, view_id: 'main-examPaperClassList' }
  },
  {
    path: 'classmate',
    component: () => import('@/views/readPapers/classmate'), // Parent router-view
    name: 'classmate',
    meta: { title: 'classmate', noCache: true, view_id: 'main-examPaperClassmate' },
    hidden: true
  },
  {
    path: 'getscore',
    component: () => import('@/views/readPapers/getscore'), // Parent router-view
    name: 'getscore',
    meta: { title: 'getscore', noCache: true, view_id: 'wain-examinationPapers' },
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
