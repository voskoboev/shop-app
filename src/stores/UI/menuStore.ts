import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useMenuStore = defineStore('menu', () => {
  const body = document.body
  const stopScrollSelectorName = 'stopScroll'
  const mediumTabletWindowWidth = 768
  const isMobileMenuOpen = ref(true)

  const changeMenuStateDependingOnWindowWidth = () => {
    if (window.innerWidth <= mediumTabletWindowWidth) {
      isMobileMenuOpen.value = false
    } else {
      isMobileMenuOpen.value = true
    }
  }

  const addWindowResizeListener = () => {
    window.addEventListener('resize', changeMenuStateDependingOnWindowWidth)
  }

  const removeWindowResizeListener = () => {
    window.removeEventListener('resize', changeMenuStateDependingOnWindowWidth)
  }

  const disableBodyScroll = () => {
    body.classList.add(stopScrollSelectorName)
  }

  const enableBodyScroll = () => {
    body.classList.remove(stopScrollSelectorName)
  }

  const openMobileMenu = () => {
    isMobileMenuOpen.value = true
    disableBodyScroll()
  }

  const closeMobileMenu = () => {
    isMobileMenuOpen.value = false
    enableBodyScroll()
  }

  return {
    changeMenuStateDependingOnWindowWidth,
    addWindowResizeListener,
    removeWindowResizeListener,
    isMobileMenuOpen,
    openMobileMenu,
    closeMobileMenu
  }
})
