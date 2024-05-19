import { createRouter, createWebHistory } from 'vue-router'
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
      component: () => import('../views/ViewProductDetails.vue')
    },
    {
      path: '/category/:id',
      name: 'category',
      component: () => import('../views/ViewCategory.vue')
    },
    {
      path: '/cart',
      component: () => import('../views/ViewCart.vue')
    }
  ]
})

export default router
