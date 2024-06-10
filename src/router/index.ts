import { createRouter, createWebHistory } from 'vue-router'
import { useBeforeEachGuards } from '@/composables/router/useBeforeEachGuards'
import ViewHome from '@/views/ViewHome.vue'
import { type RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: ViewHome
  },
  {
    path: '/category/:id',
    name: 'category',
    component: () => import('@/views/ViewCategory.vue')
  },
  {
    path: '/products/:id',
    name: 'product-details',
    component: () => import('@/views/ViewProductDetails.vue')
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

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

useBeforeEachGuards(router)

export default router
