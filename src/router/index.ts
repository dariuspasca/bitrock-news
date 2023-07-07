import { createRouter, createWebHistory } from 'vue-router'
import FeedView from '@/views/FeedView.vue'
import supabase from '@/libs/supabase-client'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'feed',
      component: FeedView,
      meta: { requiresAuth: false }
    },
    {
      name: 'user',
      path: '/user/:username',
      component: () => import('../views/UserView.vue'),
      meta: { requiresAuth: false }
    },
    {
      name: 'login',
      path: '/login',
      component: () => import('../views/LoginView.vue'),
      meta: { requiresAuth: false }
    },
    {
      name: 'account',
      path: '/account',
      component: () => import('../views/AccountView.vue'),
      meta: { requiresAuth: true }
    }
  ]
})

router.beforeEach(async (to, from, next): Promise<void> => {
  const session = await supabase.auth.getSession()

  if (to.path === '/login' && session.data.session?.access_token) next('/')

  if (to.meta.requiresAuth && !session.data.session?.access_token) next('/login')
  else next()
})

export default router
