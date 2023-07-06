import { createRouter, createWebHistory } from 'vue-router'
import FeedView from '@/views/FeedView.vue'

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
      component: () => import('../views/FeedView.vue'),
      meta: { requiresAuth: false }
    }
  ]
})

export default router
