import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'
import TheCart from '@/components/cart/TheCart.vue'
import TheCartList from '@/components/cart/TheCartList.vue'

describe('TheCart', () => {
  setActivePinia(createPinia())

  const wrapper = mount(TheCart)
  const cartList = wrapper.findComponent(TheCartList)

  it('Renders component', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('Renders cart list child component', () => {
    expect(cartList.exists()).toBe(true)
  })
})
