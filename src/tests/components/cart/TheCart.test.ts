import { mount } from '@vue/test-utils'
import { describe, it, expect, beforeEach } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'
import TheCart from '@/components/cart/TheCart.vue'
import TheCartList from '@/components/cart/TheCartList.vue'
import { type TVueWrapperInstance } from '@/types/tests/TVueWrapperInstance'

describe('TheCart', () => {
  let wrapper: TVueWrapperInstance<typeof TheCartList>

  beforeEach(() => {
    setActivePinia(createPinia())

    wrapper = mount(TheCart)
  })

  it('Renders the component', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('Renders the cart list child component', () => {
    const cartList = wrapper.findComponent(TheCartList)

    expect(cartList.exists()).toBe(true)
  })
})
