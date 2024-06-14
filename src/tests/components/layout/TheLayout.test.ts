import { mount } from '@vue/test-utils'
import { describe, it, expect, beforeEach } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'
import TheLayout from '@/components/layout/TheLayout.vue'
import AppToast from '@/components/UI/AppToast.vue'
import TheLayoutHeader from '@/components/layout/TheLayoutHeader.vue'
import TheLayoutMain from '@/components/layout/TheLayoutMain.vue'
import TheLayoutFooter from '@/components/layout/TheLayoutFooter.vue'
import { type TVueWrapperInstance } from '@/types/tests/TVueWrapperInstance'

describe('TheLayout', () => {
  let wrapper: TVueWrapperInstance<typeof TheLayout>

  beforeEach(() => {
    setActivePinia(createPinia())

    wrapper = mount(TheLayout, {
      global: {
        stubs: ['router-link', 'router-view']
      },
      components: {
        AppToast
      }
    })
  })

  it('Renders the component', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('Renders the toast child component', () => {
    const toast = wrapper.findComponent(AppToast)

    expect(toast.exists()).toBe(true)
  })

  it('Renders the header child component', () => {
    const header = wrapper.findComponent(TheLayoutHeader)

    expect(header.exists()).toBe(true)
  })

  it('Renders the main child component', () => {
    const main = wrapper.findComponent(TheLayoutMain)

    expect(main.exists()).toBe(true)
  })

  it('Renders the footer child component', () => {
    const footer = wrapper.findComponent(TheLayoutFooter)

    expect(footer.exists()).toBe(true)
  })
})
