import { mount } from '@vue/test-utils'
import { describe, it, expect, vi } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'
import { useCategoriesStore } from '@/stores/categoriesStore'
import TheCategoriesMenu from '@/components/categories/TheCategoriesMenu.vue'
import TheCategoriesMenuList from '@/components/categories/TheCategoriesMenuList.vue'

const mockCategories = [
  {
    id: 1,
    name: 'name 1',
    thumbnailUrl: 'thumbnailUrl'
  },
  {
    id: 2,
    name: 'name 2',
    thumbnailUrl: 'thumbnailUr2'
  }
]

describe('TheCategoriesMenu', () => {
  setActivePinia(createPinia())

  const categoriesStore = useCategoriesStore()

  const wrapper = mount(TheCategoriesMenu, {
    props: {
      categories: mockCategories
    }
  })
  const propCategories = wrapper.props('categories')
  const menuList = wrapper.findComponent(TheCategoriesMenuList)
  const buttons = wrapper.findAll('button')

  it('Renders component', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('Renders categories menu list child component', () => {
    expect(menuList.exists()).toBe(true)
  })

  it('Contains correct number of categories prop elements', () => {
    expect(propCategories).toHaveLength(2)
  })

  it('Contains categories prop with valid data', () => {
    expect(propCategories[0]).toEqual(propCategories[0])
    expect(propCategories[1]).toEqual(propCategories[1])
  })

  it('Triggers openMobileMenu method on open menu button ', async () => {
    const buttonOpenMenu = buttons[0]
    const openMenuSpy = vi.spyOn(categoriesStore, 'openMobileMenu')

    await buttonOpenMenu.trigger('click')

    expect(openMenuSpy).toHaveBeenCalled()
  })

  it('Triggers closeMobileMenu method on close menu button ', async () => {
    const buttonCloseMenu = buttons[1]
    const closeMenuSpy = vi.spyOn(categoriesStore, 'closeMobileMenu')

    await buttonCloseMenu.trigger('click')

    expect(closeMenuSpy).toHaveBeenCalled()
  })
})
