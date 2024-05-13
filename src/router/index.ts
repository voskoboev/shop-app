import { createRouter, createWebHistory } from 'vue-router'
import ViewHome from '@/views/ViewHome.vue'
// import ViewCategoryProducts from '@/views/ViewCategoryProducts.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ViewHome
    },
    {
      path: '/products',
      name: 'products',
      component: () => import('../views/ViewCategoryProducts.vue')
    }
  ]
})

export default router
