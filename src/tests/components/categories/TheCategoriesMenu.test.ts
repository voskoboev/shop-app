import { mount } from '@vue/test-utils'
import { describe, it, expect, vi } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'
import { useMenuStore } from '@/stores/UI/menuStore'
import TheCategoriesMenu from '@/components/categories/TheCategoriesMenu.vue'
import TheCategoriesMenuList from '@/components/categories/TheCategoriesMenuList.vue'
import { type ICategory } from '@/types/categories/ICategory'

const mockCategories: ICategory[] = [
  {
    id: 1,
    name: 'name 1',
    thumbnailUrl: 'thumbnailUrl 1'
  },
  {
    id: 2,
    name: 'name 2',
    thumbnailUrl: 'thumbnailUr 2'
  }
]

describe('TheCategoriesMenu', () => {
  setActivePinia(createPinia())

  const menuStore = useMenuStore()

  menuStore.openMobileMenu = vi.fn()
  menuStore.closeMobileMenu = vi.fn()
  menuStore.changeMenuStateDependingOnWindowWidth = vi.fn()
  menuStore.addWindowResizeListener = vi.fn()

  const wrapper = mount(TheCategoriesMenu, {
    props: {
      categories: mockCategories
    }
  })
  const menuList = wrapper.findComponent(TheCategoriesMenuList)
  const buttons = wrapper.findAll('button')
  const buttonOpenMenu = buttons[0]
  const buttonCloseMenu = buttons[1]

  it('Renders component', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('Checks categories prop with valid data', () => {
    expect(wrapper.props('categories')).toEqual(mockCategories)
  })

  it('Calls changeMenuStateDependingOnWindowWidth method when component created', () => {
    expect(menuStore.changeMenuStateDependingOnWindowWidth).toHaveBeenCalled()
  })

  it('Calls addWindowResizeListener method when component mounted', async () => {
    await wrapper.vm.$nextTick()

    expect(menuStore.addWindowResizeListener).toHaveBeenCalled()
  })

  it('Renders categories menu list child component', () => {
    expect(menuList.exists()).toBe(true)
  })

  it('Renders nav by condition', async () => {
    menuStore.isMobileMenuOpen = true
    await wrapper.vm.$nextTick()

    const nav = wrapper.find('nav')

    expect(nav.exists()).toBe(true)
  })

  it('Triggers openMobileMenu method on open menu button on click', async () => {
    await buttonOpenMenu.trigger('click')

    expect(menuStore.openMobileMenu).toHaveBeenCalled()
  })

  it('Triggers closeMobileMenu method on close menu button on click', async () => {
    await buttonCloseMenu.trigger('click')

    expect(menuStore.closeMobileMenu).toHaveBeenCalled()
  })
})
