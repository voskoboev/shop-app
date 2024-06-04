import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import { RouterLink } from 'vue-router'
import ViewNotFound from '@/views/ViewNotFound.vue'

describe('ViewNotFound', () => {
  const wrapper = mount(ViewNotFound, {
    global: {
      components: {
        RouterLink
      },
      stubs: ['router-link']
    }
  })
  const routerLink = wrapper.findComponent(RouterLink)

  it('Renders component', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('Renders router link component', () => {
    expect(routerLink.exists()).toBe(true)
  })

  it('Renders router link component with valid data', () => {
    expect(routerLink.props('to')).toBe('/')
  })
})
