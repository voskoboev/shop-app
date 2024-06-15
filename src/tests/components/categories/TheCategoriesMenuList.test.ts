import { mount } from '@vue/test-utils'
import { describe, it, expect, beforeAll } from 'vitest'
import { setActivePinia } from 'pinia'
import { createTestingPinia } from '@pinia/testing'
import TheCategoriesMenuList from '@/components/categories/TheCategoriesMenuList.vue'
import TheCategoriesMenuListItem from '@/components/categories/TheCategoriesMenuListItem.vue'
import { type ICategory } from '@/types/categories/ICategory'
import { type TVueWrapperInstance } from '@/types/tests/TVueWrapperInstance'

const mockAllCategories: ICategory[] = [
  {
    id: 1,
    name: 'name 1',
    thumbnailUrl: 'thumbnailUrl 1'
  },
  {
    id: 2,
    name: 'name 2',
    thumbnailUrl: 'thumbnailUrl 2'
  }
]

describe('TheCategoriesMenuList', () => {
  let wrapper: TVueWrapperInstance<typeof TheCategoriesMenuList>

  beforeAll(() => {
    const testingPinia = createTestingPinia({
      initialState: {
        categories: {
          allCategories: mockAllCategories
        }
      }
    })

    setActivePinia(testingPinia)

    wrapper = mount(TheCategoriesMenuList, {
      global: {
        plugins: [testingPinia]
      }
    })
  })

  it('Renders the component', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('Renders the correct number of categories list item child components', () => {
    const menuListItems = wrapper.findAllComponents(TheCategoriesMenuListItem)

    expect(menuListItems).toHaveLength(2)
  })

  it('Renders categories list items with valid data', () => {
    const menuListItems = wrapper.findAllComponents(TheCategoriesMenuListItem)

    expect(menuListItems[0].props('category')).toEqual(mockAllCategories[0])
    expect(menuListItems[1].props('category')).toEqual(mockAllCategories[1])
  })
})
