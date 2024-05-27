import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
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
  setActivePinia(createPinia())

  const cartStore = useCartStore()
  const wrapper = mount(TheCartList)

  cartStore.$patch({
    cartProducts
  })

  it('Renders component', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('Renders correct number of cart products', () => {
    const cartItems = wrapper.findAllComponents(TheCartListItem)

    expect(cartItems).toHaveLength(2)
  })

  it('Renders cart items with valid data', () => {
    const cartItems = wrapper.findAllComponents(TheCartListItem)

    expect(cartItems[0].props('cartProduct')).toEqual(cartProducts[0])
    expect(cartItems[1].props('cartProduct')).toEqual(cartProducts[1])
  })
})
