import { mount } from '@vue/test-utils'
import { describe, it, expect, beforeEach } from 'vitest'
import { setActivePinia } from 'pinia'
import { createTestingPinia } from '@pinia/testing'
import { RouterLink } from 'vue-router'
import TheLayoutHeader from '@/components/layout/TheLayoutHeader.vue'
import { type TVueWrapperInstance } from '@/types/tests/TVueWrapperInstance'

describe('TheLayoutHeader', () => {
  let wrapper: TVueWrapperInstance<typeof TheLayoutHeader>

  beforeEach(() => {
    setActivePinia(createTestingPinia())

    wrapper = mount(TheLayoutHeader, {
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

  it('Renders router link child components', () => {
    const routerLinks = wrapper.findAllComponents(RouterLink)

    expect(routerLinks[0].exists()).toBe(true)
    expect(routerLinks[1].exists()).toBe(true)
  })
})
