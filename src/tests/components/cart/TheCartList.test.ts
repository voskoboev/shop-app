import { mount } from '@vue/test-utils'
import { describe, it, expect, beforeEach } from 'vitest'
import { setActivePinia } from 'pinia'
import { createTestingPinia } from '@pinia/testing'
import TheCartList from '@/components/cart/TheCartList.vue'
import TheCartListItem from '@/components/cart/TheCartListItem.vue'
import { type IProduct } from '@/types/products/IProduct'
import { type TVueWrapperInstance } from '@/types/tests/TVueWrapperInstance'

const mockCartProducts: IProduct[] = [
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
  let wrapper: TVueWrapperInstance<typeof TheCartList>

  beforeEach(() => {
    const testingPinia = createTestingPinia({
      initialState: {
        cart: {
          cartProducts: mockCartProducts
        }
      }
    })

    setActivePinia(testingPinia)

    wrapper = mount(TheCartList, {
      global: {
        plugins: [testingPinia]
      }
    })
  })

  it('Renders the component', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('Renders the correct number of cart items', () => {
    const cartListItems = wrapper.findAllComponents(TheCartListItem)

    expect(cartListItems).toHaveLength(2)
  })

  it('Renders cart items with valid data', () => {
    const cartListItems = wrapper.findAllComponents(TheCartListItem)

    expect(cartListItems[0].props('cartProduct')).toEqual(mockCartProducts[0])
    expect(cartListItems[1].props('cartProduct')).toEqual(mockCartProducts[1])
  })
})
