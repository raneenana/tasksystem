import Layout from '@/layout'
const examRouter = {
  path: '/exam',
  component: Layout,
  redireact: 'noredirect',
  name: 'Exam',
  meta: {
    title: 'exam',
    icon: 'sliders'
    // view_id: 'main-watchQuestions,main-editQuestions,main-questionsType,main-addQuestions'
  },
  children: [
    {
      path: 'addQuestion',
      component: () => import('@/views/exam/addQuestion'),
      name: 'addQuestion',
      meta: {
        title: 'addQuestion',
        noCache: true,
        view_id: 'main-addQuestions'
      }
    },
    {
      path: 'questionType',
      component: () => import('@/views/exam/questionType'),
      name: 'questionType',
      meta: {
        title: 'questionType',
        noCache: true,
        view_id: 'main-questionsType'
      }
    },
    {
      path: 'papers',
      component: () => import('@/views/exam/papers'),
      name: 'papers',
      meta: {
        title: 'papers',
        noCache: true,
        view_id: 'main-watchQuestions,main-editQuestions'
      }
    },
    {
      path: 'detail',
      component: () => import('@/views/exam/details'),
      hidden: true,
      meta: {
        title: 'detail',
        noCache: true,
        view_id: 'main-questionsDetail'
      }
    }
  ]
}
export default examRouter
