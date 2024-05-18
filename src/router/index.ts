import { createRouter, createWebHistory } from 'vue-router'
import ViewHome from '@/views/ViewHome.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      // name: 'home',
      component: ViewHome
    },
    {
      path: '/products',
      // name: 'products',
      component: () => import('../views/ViewProductsCategory.vue')
    },
    {
      path: '/products/:id',
      name: 'product-details',
      component: () => import('../views/ViewProductDetails.vue')
    },
    {
      path: '/cart',
      // name: 'cart',
      component: () => import('../views/ViewCart.vue')
    }
  ]
})

export default router
