import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'
import { RouterLink, createRouter, createWebHistory } from 'vue-router'
import TheLayoutHeader from '@/components/layout/TheLayoutHeader.vue'

describe('TheLayoutHeader', () => {
  setActivePinia(createPinia())

  const wrapper = mount(TheLayoutHeader, {
    global: {
      stubs: ['router-link']
    }
  })
  const routerLinks = wrapper.findAllComponents(RouterLink)

  it('Renders component', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('Renders router link child components', () => {
    expect(routerLinks[0].exists()).toBe(true)
    expect(routerLinks[1].exists()).toBe(true)
  })
})
