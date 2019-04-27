import Layout from '@/layout'
const examRouter = {
  path: '/exam',
  component: Layout,
  redireact: 'noredirect',
  name: 'Exam',
  meta: {
    title: 'exam',
    icon: 'sliders'
  },
  children: [
    {
      path: 'addQuestion',
      component: () => import('@/views/exam/addQuestion'),
      name: 'addQuestion',
      meta: {
        title: 'addQuestion',
        noCache: true, // ['main-addQuestions', 'main-addExam', 'main-editQuestions']
        view_id: 'main-addExam'
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
        view_id: 'main-watchQuestions'
      }
    },
    {
      path: 'detail',
      component: () => import('@/views/exam/details'),
      meta: {
        title: 'detail',
        noCache: true,
        hidden: true
        // ,
        // view_id: '12312'
      }
    }
  ]
}
export default examRouter
