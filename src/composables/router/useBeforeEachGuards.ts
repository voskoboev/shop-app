import { type Router } from 'vue-router'
import { useMenuStore } from '@/stores/UI/menuStore'

export function useBeforeEachGuards(router: Router) {
  router.beforeEach((_, from, next) => {
    const menuStore = useMenuStore()

    if (from.path === '/') {
      menuStore.closeMobileMenu()
      menuStore.removeWindowResizeListener()
    }

    next()
  })
}
