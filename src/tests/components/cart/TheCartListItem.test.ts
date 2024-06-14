import { VueWrapper, mount } from '@vue/test-utils'
import { describe, it, expect, beforeEach } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'
import { createTestingPinia } from '@pinia/testing'
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
  let wrapper: VueWrapper<InstanceType<typeof TheCartListItem>>

  beforeEach(() => {
    setActivePinia(createPinia())

    wrapper = mount(TheCartListItem, {
      global: {
        plugins: [createTestingPinia()],
        components: {
          AppButton
        }
      },
      props: {
        cartProduct: mockCartProduct
      }
    })
  })

  it('Renders the component', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('Checks the cartProduct prop with valid data', () => {
    expect(wrapper.props('cartProduct')).toEqual(mockCartProduct)
  })

  it('Triggers the deleteProductFromCart method on a delete button click', async () => {
    const cartStore = useCartStore()
    const deleteButton = wrapper.findComponent(AppButton)

    await deleteButton.trigger('click')

    expect(cartStore.deleteProductFromCart).toHaveBeenCalledWith(mockCartProduct.id)
  })
})
