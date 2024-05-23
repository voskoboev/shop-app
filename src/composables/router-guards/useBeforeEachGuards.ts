import { type Router } from 'vue-router'
import { useCategoriesStore } from '@/stores/categoriesStore'

export function useBeforeEachGuards(router: Router) {
  router.beforeEach((_, from, next) => {
    const categoriesStore = useCategoriesStore()

    if (from.path === '/') {
      categoriesStore.closeMobileMenu()
      categoriesStore.removeWindowResizeListener()
    }

    next()
  })
}
