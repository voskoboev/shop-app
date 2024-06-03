import { mount } from '@vue/test-utils'
import { describe, it, expect, vi } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'
import { useCategoriesStore } from '@/stores/categoriesStore'
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

  const categoriesStore = useCategoriesStore()

  categoriesStore.openMobileMenu = vi.fn()
  categoriesStore.closeMobileMenu = vi.fn()
  categoriesStore.changeMenuStateDependingOnWindowWidth = vi.fn()
  categoriesStore.addWindowResizeListener = vi.fn()

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
    expect(categoriesStore.changeMenuStateDependingOnWindowWidth).toHaveBeenCalled()
  })

  it('Calls addWindowResizeListener method when component mounted', async () => {
    await wrapper.vm.$nextTick()

    expect(categoriesStore.addWindowResizeListener).toHaveBeenCalled()
  })

  it('Renders categories menu list child component', () => {
    expect(menuList.exists()).toBe(true)
  })

  it('Renders nav by condition', async () => {
    categoriesStore.isMobileMenuOpen = true

    await wrapper.vm.$nextTick()

    const nav = wrapper.find('nav')

    expect(nav.exists()).toBe(true)
  })

  it('Triggers openMobileMenu method on open menu button on click', async () => {
    await buttonOpenMenu.trigger('click')

    expect(categoriesStore.openMobileMenu).toHaveBeenCalled()
  })

  it('Triggers closeMobileMenu method on close menu button on click', async () => {
    await buttonCloseMenu.trigger('click')

    expect(categoriesStore.closeMobileMenu).toHaveBeenCalled()
  })
})
