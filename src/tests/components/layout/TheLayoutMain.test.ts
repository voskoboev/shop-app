import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'
import { RouterView } from 'vue-router'
import TheLayoutMain from '@/components/layout/TheLayoutMain.vue'

describe('TheLayoutMain', () => {
  setActivePinia(createPinia())

  const wrapper = mount(TheLayoutMain, {
    global: {
      stubs: ['router-view']
    }
  })
  const routerView = wrapper.findComponent(RouterView)

  it('Renders component', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('Renders router view child component', () => {
    expect(routerView.exists()).toBe(true)
  })
})
