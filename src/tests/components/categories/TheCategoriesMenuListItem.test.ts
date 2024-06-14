import { mount } from '@vue/test-utils'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { RouterLink } from 'vue-router'
import TheCategoriesMenuListItem from '@/components/categories/TheCategoriesMenuListItem.vue'
import { type ICategory } from '@/types/categories/ICategory'
import { type IRouteCategory } from '@/types/router/IRouteCategory'
import { type TVueWrapperInstance } from '@/types/tests/TVueWrapperInstance'

const mockCategory: ICategory = {
  id: 1,
  name: 'Name',
  thumbnailUrl: 'thumbnailUrl'
}

const mockMicroMarkupListPosition = 1
const mockRouteParams = { id: 1 }

const mockRoute: IRouteCategory = {
  name: 'category',
  params: mockRouteParams
}

describe('TheCategoriesMenuListItem', () => {
  let wrapper: TVueWrapperInstance<typeof TheCategoriesMenuListItem>

  beforeEach(() => {
    vi.mock('vue-router', () => ({
      useRoute: () => ({
        params: mockRouteParams
      }),
      RouterLink: {
        props: {
          to: Object
        }
      }
    }))

    wrapper = mount(TheCategoriesMenuListItem, {
      global: {
        components: {
          RouterLink
        }
      },
      props: {
        category: mockCategory,
        microMarkupListPosition: mockMicroMarkupListPosition
      }
    })
  })

  it('Renders the component', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('Checks category and microMarkupListPosition props with valid data', () => {
    expect(wrapper.props('category')).toEqual(mockCategory)
    expect(wrapper.props('microMarkupListPosition')).toEqual(mockMicroMarkupListPosition)
  })

  it('Renders the router link child component', () => {
    const routerLink = wrapper.findComponent(RouterLink)

    expect(routerLink.exists()).toBe(true)
  })

  it('Renders the router link child component with valid data', () => {
    const routerLink = wrapper.findComponent(RouterLink)

    expect(routerLink.props('to')).toEqual(mockRoute)
  })
})
