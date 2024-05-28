import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'
import { useCategoriesStore } from '@/stores/categoriesStore'
import TheCategoriesMenuList from '@/components/categories/TheCategoriesMenuList.vue'
import TheCategoriesMenuListItem from '@/components/categories/TheCategoriesMenuListItem.vue'

const mockAllCategories = [
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
  setActivePinia(createPinia())

  const categoriesStore = useCategoriesStore()

  categoriesStore.allCategories = mockAllCategories

  const wrapper = mount(TheCategoriesMenuList)
  const menuListItems = wrapper.findAllComponents(TheCategoriesMenuListItem)

  it('Renders component', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('Renders correct number of categories list item child components', () => {
    expect(menuListItems).toHaveLength(2)
  })

  it('Renders categories list items with valid data', () => {
    expect(menuListItems[0].props('category')).toEqual(mockAllCategories[0])
    expect(menuListItems[1].props('category')).toEqual(mockAllCategories[1])
  })
})
