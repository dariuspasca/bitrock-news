import { createRouter, createWebHistory } from 'vue-router'
import FeedView from '@/views/FeedView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: FeedView
    }
  ]
})

export default router
