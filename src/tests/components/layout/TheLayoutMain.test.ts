import { mount } from '@vue/test-utils'
import { describe, it, expect, beforeEach } from 'vitest'
import { setActivePinia } from 'pinia'
import { createTestingPinia } from '@pinia/testing'
import { RouterView } from 'vue-router'
import TheLayoutMain from '@/components/layout/TheLayoutMain.vue'
import { type TVueWrapperInstance } from '@/types/tests/TVueWrapperInstance'

describe('TheLayoutMain', () => {
  let wrapper: TVueWrapperInstance<typeof TheLayoutMain>

  beforeEach(() => {
    setActivePinia(createTestingPinia())

    wrapper = mount(TheLayoutMain, {
      global: {
        components: {
          RouterView
        },
        stubs: ['router-view']
      }
    })
  })

  it('Renders the component', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('Renders the router view child component', () => {
    const routerView = wrapper.findComponent(RouterView)

    expect(routerView.exists()).toBe(true)
  })
})
