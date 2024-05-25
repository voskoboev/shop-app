import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'
import TheCart from '@/components/cart/TheCart.vue'

describe('TheCart', () => {
  it('Render component', () => {
    setActivePinia(createPinia())

    const wrapper = mount(TheCart)

    expect(wrapper.exists()).toBe(true)
  })
})
