/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'

const userRouter = {
  path: '/user',
  component: Layout,
  redirect: 'noredirect',
  name: 'User',
  alwaysShow: true,
  meta: {
    title: 'user',
    icon: 'user'
  },
  children: [
    {
      path: 'addUser',
      component: () => import('@/views/users/addUser'),
      name: 'addUser',
      meta: { title: 'addUser', noCache: true, view_id: 'main-addUser' }
    },
    {
      path: 'showUser',
      component: () => import('@/views/users/showUser'),
      name: 'showUser',
      meta: { title: 'showUser', noCache: true, view_id: 'main-showUser' }
    }
  ]
}

export default userRouter
