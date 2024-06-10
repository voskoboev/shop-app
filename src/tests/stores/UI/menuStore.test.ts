import { describe, it, expect, vi } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useMenuStore } from '@/stores/UI/menuStore'

const mediumTabletWindowWidth = 768
const lowerThanMediumTabletWindowWidth = 767
const heigherThanMediumTabletWindowWidth = 769
const stopScrollSelectorName = 'stopScroll'

describe('menuStore', () => {
  setActivePinia(createPinia())

  const menuStore = useMenuStore()

  const body = document.body
  const bodyCssClasses = body.classList

  it('Changes menu state if window inner width is less than medium tables size value', () => {
    vi.stubGlobal('innerWidth', lowerThanMediumTabletWindowWidth)

    menuStore.changeMenuStateDependingOnWindowWidth()

    expect(menuStore.isMobileMenuOpen).toBe(false)
  })

  it('Changes menu state if window inner width is equel to medium tables size value', () => {
    vi.stubGlobal('innerWidth', mediumTabletWindowWidth)

    menuStore.changeMenuStateDependingOnWindowWidth()

    expect(menuStore.isMobileMenuOpen).toBe(false)
  })

  it('Changes menu state if window inner width is more than medium tables size value', () => {
    vi.stubGlobal('innerWidth', heigherThanMediumTabletWindowWidth)

    menuStore.changeMenuStateDependingOnWindowWidth()

    expect(menuStore.isMobileMenuOpen).toBe(true)
  })

  it('Adds window resize listener on call of addWindowResizeListener method', () => {
    window.addEventListener = vi.fn()

    menuStore.addWindowResizeListener()

    expect(window.addEventListener).toHaveBeenCalledWith('resize', expect.any(Function))
  })

  it('Removes window resize listener on call of removeWindowResizeListener method', () => {
    window.removeEventListener = vi.fn()

    menuStore.removeWindowResizeListener()

    expect(window.removeEventListener).toHaveBeenCalledWith('resize', expect.any(Function))
  })

  it('Checks menu opening status and checks stop scroll selector on body after openMobileMenu is called', () => {
    menuStore.openMobileMenu()

    expect(menuStore.isMobileMenuOpen).toBe(true)
    expect(bodyCssClasses).toContain(stopScrollSelectorName)
  })

  it('Checks menu opening status and checks stop scroll selector on body after closeMobileMenu is called', () => {
    menuStore.closeMobileMenu()

    expect(menuStore.isMobileMenuOpen).toBe(false)
    expect(bodyCssClasses).not.toContain(stopScrollSelectorName)
  })
})
