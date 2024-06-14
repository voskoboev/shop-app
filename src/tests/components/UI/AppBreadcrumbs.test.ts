import { mount } from '@vue/test-utils'
import { describe, it, expect, beforeEach } from 'vitest'
import { RouterLink } from 'vue-router'
import AppBreadcrumbs from '@/components/UI/AppBreadcrumbs.vue'
import { type IBreadcrumbsItem } from '@/types/router/IBreadcrumbsItem'
import { type TVueWrapperInstance } from '@/types/tests/TVueWrapperInstance'

const mockItems: IBreadcrumbsItem[] = [
  {
    path: '/products/1',
    name: 'Product'
  },
  {
    path: '/categories/1',
    name: 'Category'
  }
]

describe('AppBreadcrumbs', () => {
  let wrapper: TVueWrapperInstance<typeof AppBreadcrumbs>

  beforeEach(() => {
    wrapper = mount(AppBreadcrumbs, {
      global: {
        components: {
          RouterLink
        },
        stubs: ['router-link']
      },
      props: {
        items: mockItems
      }
    })
  })

  it('Renders the component', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('Checks the items prop with valid data', () => {
    expect(wrapper.props('items')).toEqual(mockItems)
  })

  it('Renders the correct number of router links', () => {
    const routerLinks = wrapper.findAllComponents(RouterLink)

    expect(routerLinks).toHaveLength(3)
  })

  it('Renders router links with valid data', () => {
    const routerLinks = wrapper.findAllComponents(RouterLink)

    expect(routerLinks[0].props('to')).toBe('/')
    expect(routerLinks[1].props('to')).toBe(mockItems[0].path)
    expect(routerLinks[2].props('to')).toBe(mockItems[1].path)
  })
})
