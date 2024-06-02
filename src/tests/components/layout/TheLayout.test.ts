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
  const toast = wrapper.findComponent(AppToast)
  const header = wrapper.findComponent(TheLayoutHeader)
  const main = wrapper.findComponent(TheLayoutMain)
  const footer = wrapper.findComponent(TheLayoutFooter)

  it('Renders component', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('Renders toast child component', () => {
    expect(toast.exists()).toBe(true)
  })

  it('Renders header child component', () => {
    expect(header.exists()).toBe(true)
  })

  it('Renders main child component', () => {
    expect(main.exists()).toBe(true)
  })

  it('Renders footer child component', () => {
    expect(footer.exists()).toBe(true)
  })
})
