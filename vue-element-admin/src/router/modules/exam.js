import Layout from '@/layout'
const examRouter = {
  path: '/exam',
  component: Layout,
  redireact: 'noredirect',
  name: 'Exam',
  meta: {
    title: 'exam',
<<<<<<< HEAD
    icon: 'sliders',
    view_id: 'main-watchQuestions,main-editQuestions,main-questionsType,main-addQuestions'
=======
    icon: 'sliders'
    // view_id: 'main-addQuestions main-questionsType main-watchQuestions'
>>>>>>> 4387b27472b77ef2d7c1a1656c5d81b5bd128db2
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
<<<<<<< HEAD
        view_id: 'main-watchQuestions,main-editQuestions'
=======
        view_id: 'main-watchQuestions'
>>>>>>> 4387b27472b77ef2d7c1a1656c5d81b5bd128db2
      }
    },
    {
      path: 'detail',
      component: () => import('@/views/exam/details'),
      hidden: true,
      meta: {
        title: 'detail',
        noCache: true,
<<<<<<< HEAD
        view_id: 'main-questionDetail'
=======
        view_id: 'main-questionsDetail'
>>>>>>> 4387b27472b77ef2d7c1a1656c5d81b5bd128db2
      }
    }
  ]
}
export default examRouter
