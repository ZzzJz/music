import {createRouter, createWebHistory} from 'vue-router';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('../view/common/login.vue')
    },
    {
      path: '/',
      redirect:'/index',
      component: () => import('@/components/tabBar.vue'),
      children: [{
        path: '/index',
        component: () => import('@/view/index.vue')
      },{
        path: '/music',
        component: () => import('@/view/music.vue')
      },{
        path: '/my',
        component: () => import('@/view/my.vue')
      },{
        path: '/attention',
        component: () => import('@/view/attention.vue')
      },{
        path: '/community',
        component: () => import('@/view/community.vue')
      }]
    }
  ]
})

router.beforeEach((to, from, next) => {
  // if()
  next()
})
export default router