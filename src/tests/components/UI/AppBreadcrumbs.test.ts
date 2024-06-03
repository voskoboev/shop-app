import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import { RouterLink } from 'vue-router'
import AppBreadcrumbs from '@/components/UI/AppBreadcrumbs.vue'
import { type IBreadcrumbsItem } from '@/types/router/IBreadcrumbsItem'

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
  const wrapper = mount(AppBreadcrumbs, {
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
  const routerLinks = wrapper.findAllComponents(RouterLink)

  it('Renders component', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('Checks items prop with valid data', () => {
    expect(wrapper.props('items')).toEqual(mockItems)
  })

  it('Renders correct number of router links', () => {
    expect(routerLinks).toHaveLength(3)
  })

  it('Renders router links with valid data', () => {
    expect(routerLinks[0].props('to')).toBe('/')
    expect(routerLinks[1].props('to')).toBe(mockItems[0].path)
    expect(routerLinks[2].props('to')).toBe(mockItems[1].path)
  })
})
