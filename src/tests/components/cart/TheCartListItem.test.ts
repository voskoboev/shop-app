import { mount } from '@vue/test-utils'
import { describe, it, expect, vi } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'
import { useCartStore } from '@/stores/cartStore'
import TheCartListItem from '@/components/cart/TheCartListItem.vue'
import AppButton from '@/components/UI/AppButton.vue'
import { type IProduct } from '@/types/products/IProduct'

const mockCartProduct: IProduct = {
  id: 1,
  name: 'Name',
  price: 1,
  imageUrl: 'imageUrl',
  thumbnailUrl: 'thumbnailUrl',
  description: 'description'
}

describe('TheCartListItem', () => {
  setActivePinia(createPinia())

  const cartStore = useCartStore()

  cartStore.deleteProductFromCart = vi.fn()

  const wrapper = mount(TheCartListItem, {
    global: {
      components: {
        AppButton
      }
    },
    props: {
      cartProduct: mockCartProduct
    }
  })
  const deleteButton = wrapper.findComponent(AppButton)

  it('Renders component', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('Checks cartProduct prop with valid data', () => {
    expect(wrapper.props('cartProduct')).toEqual(mockCartProduct)
  })

  it('Triggers deleteProductFromCart method on delete button on click', async () => {
    await deleteButton.trigger('click')

    expect(cartStore.deleteProductFromCart).toHaveBeenCalledWith(mockCartProduct.id)
  })
})
