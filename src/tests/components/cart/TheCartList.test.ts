import { mount } from '@vue/test-utils'
import { describe, it, expect, beforeEach } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'
import { useCartStore } from '@/stores/cartStore'
import TheCartList from '@/components/cart/TheCartList.vue'
import TheCartListItem from '@/components/cart/TheCartListItem.vue'

const cartProducts = [
  {
    id: 1,
    name: 'Name 1',
    price: 1,
    imageUrl: 'imageUrl 1',
    thumbnailUrl: 'thumbnailUrl 1',
    description: 'description 1'
  },
  {
    id: 2,
    name: 'Name 2',
    price: 2,
    imageUrl: 'imageUrl 2',
    thumbnailUrl: 'thumbnailUrl 2',
    description: 'description 2'
  }
]

describe('TheCartList', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('Render component', () => {
    const wrapper = mount(TheCartList)

    expect(wrapper.exists()).toBe(true)
  })

  it('Render correct number of cart items', () => {
    const cartStore = useCartStore()

    cartStore.$patch({
      cartProducts
    })

    const wrapper = mount(TheCartList)
    const cartItems = wrapper.findAllComponents(TheCartListItem)

    expect(cartItems).toHaveLength(2)
  })

  it('Render cart items with valid data', () => {
    const cartStore = useCartStore()

    cartStore.$patch({
      cartProducts
    })

    const wrapper = mount(TheCartList)
    const cartItems = wrapper.findAllComponents(TheCartListItem)

    expect(cartItems[0].props('cartProduct')).toEqual(cartProducts[0])
    expect(cartItems[1].props('cartProduct')).toEqual(cartProducts[1])
  })
})
