import { mount } from '@vue/test-utils'
import { describe, it, expect, beforeEach } from 'vitest'
import { setActivePinia } from 'pinia'
import { createTestingPinia } from '@pinia/testing'
import { useMenuStore } from '@/stores/UI/menuStore'
import TheCategoriesMenu from '@/components/categories/TheCategoriesMenu.vue'
import TheCategoriesMenuList from '@/components/categories/TheCategoriesMenuList.vue'
import { type Store } from 'pinia'
import { type ICategory } from '@/types/categories/ICategory'
import { type TVueWrapperInstance } from '@/types/tests/TVueWrapperInstance'

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
  let wrapper: TVueWrapperInstance<typeof TheCategoriesMenu>
  let menuStore: Store<any, any>

  beforeEach(() => {
    const testingPinia = createTestingPinia()

    setActivePinia(testingPinia)

    wrapper = mount(TheCategoriesMenu, {
      global: {
        plugins: [testingPinia]
      },
      props: {
        categories: mockCategories
      }
    })

    menuStore = useMenuStore()
  })

  it('Renders the component', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('Checks the categories prop with valid data', () => {
    expect(wrapper.props('categories')).toEqual(mockCategories)
  })

  it('Calls the changeMenuStateDependingOnWindowWidth method when the component is created', () => {
    expect(menuStore.changeMenuStateDependingOnWindowWidth).toHaveBeenCalled()
  })

  it('Calls the addWindowResizeListener method when the component is created', () => {
    expect(menuStore.addWindowResizeListener).toHaveBeenCalled()
  })

  it('Renders the categories menu list child component', () => {
    const menuList = wrapper.findComponent(TheCategoriesMenuList)

    expect(menuList.exists()).toBe(true)
  })

  it('Renders the nav HTML element by condition', () => {
    menuStore.isMobileMenuOpen = true
    const nav = wrapper.find('nav')

    expect(nav.exists()).toBe(true)
  })

  it('Triggers the openMobileMenu method on the open menu button on click', async () => {
    const buttons = wrapper.findAll('button')
    const buttonOpenMenu = buttons[0]

    await buttonOpenMenu.trigger('click')

    expect(menuStore.openMobileMenu).toHaveBeenCalled()
  })

  it('Triggers the closeMobileMenu method on the close menu button on click', async () => {
    const buttons = wrapper.findAll('button')
    const buttonCloseMenu = buttons[1]

    await buttonCloseMenu.trigger('click')

    expect(menuStore.closeMobileMenu).toHaveBeenCalled()
  })
})
