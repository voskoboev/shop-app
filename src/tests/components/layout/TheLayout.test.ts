import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'
import TheLayout from '@/components/layout/TheLayout.vue'
import AppToast from '@/components/UI/AppToast.vue'
import TheLayoutHeader from '@/components/layout/TheLayoutHeader.vue'
import TheLayoutMain from '@/components/layout/TheLayoutMain.vue'
import TheLayoutFooter from '@/components/layout/TheLayoutFooter.vue'

describe('TheLayout', () => {
  setActivePinia(createPinia())

  const wrapper = mount(TheLayout, {
    global: {
      stubs: ['router-link', 'router-view']
    },
    components: {
      AppToast
    }
  })

  it('Renders component', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('Renders toast child component', () => {
    const toast = wrapper.findComponent(AppToast)

    expect(toast.exists()).toBe(true)
  })

  it('Renders header child component', () => {
    const header = wrapper.findComponent(TheLayoutHeader)

    expect(header.exists()).toBe(true)
  })

  it('Renders main child component', () => {
    const main = wrapper.findComponent(TheLayoutMain)

    expect(main.exists()).toBe(true)
  })

  it('Renders footer child component', () => {
    const footer = wrapper.findComponent(TheLayoutFooter)
    expect(footer.exists()).toBe(true)
  })
})
