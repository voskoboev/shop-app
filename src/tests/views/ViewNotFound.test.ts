import { mount } from '@vue/test-utils'
import { describe, it, expect, beforeEach } from 'vitest'
import { RouterLink } from 'vue-router'
import ViewNotFound from '@/views/ViewNotFound.vue'
import type { TVueWrapperInstance } from '@/types/tests/TVueWrapperInstance'

describe('ViewNotFound', () => {
  let wrapper: TVueWrapperInstance<typeof ViewNotFound>

  beforeEach(() => {
    wrapper = mount(ViewNotFound, {
      global: {
        components: {
          RouterLink
        },
        stubs: ['router-link']
      }
    })
  })

  it('Renders the component', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('Renders the router link component', () => {
    const routerLink = wrapper.findComponent(RouterLink)

    expect(routerLink.exists()).toBe(true)
  })

  it('Renders the router link component with valid data', () => {
    const routerLink = wrapper.findComponent(RouterLink)

    expect(routerLink.props('to')).toBe('/')
  })
})
