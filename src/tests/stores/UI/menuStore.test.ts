import { describe, it, expect, vi, beforeEach } from 'vitest'
import { setActivePinia } from 'pinia'
import { createTestingPinia } from '@pinia/testing'
import { useMenuStore } from '@/stores/UI/menuStore'
import { type Store } from 'pinia'

const mediumTabletWindowWidth = 768
const lowerThanMediumTabletWindowWidth = 767
const heigherThanMediumTabletWindowWidth = 769
const stopScrollSelectorName = 'stopScroll'

describe('menuStore', () => {
  let menuStore: Store<any, any>

  beforeEach(() => {
    const testingPinia = createTestingPinia({
      stubActions: false
    })

    setActivePinia(testingPinia)

    menuStore = useMenuStore()
  })

  it('Changes the menu state if the window inner width is less than the medium tablet size value', () => {
    vi.stubGlobal('innerWidth', lowerThanMediumTabletWindowWidth)

    menuStore.changeMenuStateDependingOnWindowWidth()

    expect(menuStore.isMobileMenuOpen).toBe(false)
  })

  it('Changes the menu state if the window inner width is equel to medium tables size value', () => {
    vi.stubGlobal('innerWidth', mediumTabletWindowWidth)

    menuStore.changeMenuStateDependingOnWindowWidth()

    expect(menuStore.isMobileMenuOpen).toBe(false)
  })

  it('Changes the menu state if the window inner width is more than medium tables size value', () => {
    vi.stubGlobal('innerWidth', heigherThanMediumTabletWindowWidth)

    menuStore.changeMenuStateDependingOnWindowWidth()

    expect(menuStore.isMobileMenuOpen).toBe(true)
  })

  it('Adds the window resize listener on call of the addWindowResizeListener method', () => {
    window.addEventListener = vi.fn()

    menuStore.addWindowResizeListener()

    expect(window.addEventListener).toHaveBeenCalledWith('resize', expect.any(Function))
  })

  it('Removes the window resize listener on call of the removeWindowResizeListener method', () => {
    window.removeEventListener = vi.fn()

    menuStore.removeWindowResizeListener()

    expect(window.removeEventListener).toHaveBeenCalledWith('resize', expect.any(Function))
  })

  it('Checks the menu opening status and checks the stop scroll selector on the body after o thepenMobileMenu method is called', () => {
    menuStore.openMobileMenu()

    expect(menuStore.isMobileMenuOpen).toBe(true)
    expect(document.body.classList).toContain(stopScrollSelectorName)
  })

  it('Checks the menu opening status and checks the stop scroll selector on the body after the closeMobileMenu method is called', () => {
    menuStore.closeMobileMenu()

    expect(menuStore.isMobileMenuOpen).toBe(false)
    expect(document.body.classList).not.toContain(stopScrollSelectorName)
  })
})
