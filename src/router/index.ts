import { createRouter, createWebHistory } from 'vue-router'
import { useBeforeEachGuards } from '@/composables/router/useBeforeEachGuards'
import ViewHome from '@/views/ViewHome.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: ViewHome
    },
    {
      path: '/products/:id',
      name: 'product-details',
      component: () => import('@/views/VIewProductDetails.vue')
    },
    {
      path: '/category/:id',
      name: 'category',
      component: () => import('@/views/ViewCategory.vue')
    },
    {
      path: '/cart',
      component: () => import('@/views/ViewCart.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      component: () => import('@/views/ViewNotFound.vue')
    }
  ]
})

useBeforeEachGuards(router)

export default router
