import { mount, VueWrapper } from '@vue/test-utils'
import { describe, it, expect, beforeEach, vi } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'
import { useCartStore } from '@/stores/cartStore'
import TheCartListItem from '@/components/cart/TheCartListItem.vue'
import AppButton from '@/components/UI/AppButton.vue'

const cartProduct = {
  id: 1,
  name: 'Name 1',
  price: 1,
  imageUrl: 'imageUrl 1',
  thumbnailUrl: 'thumbnailUrl 1',
  description: 'description 1'
}

describe('TheCartListItem', () => {
  setActivePinia(createPinia())

  const cartStore = useCartStore()

  let wrapper: VueWrapper<any>

  beforeEach(() => {
    wrapper = mount(TheCartListItem, {
      global: {
        components: {
          AppButton
        }
      },
      props: {
        cartProduct
      }
    })
  })

  it('Renders component', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('Renders cartProduct prop with valid data', () => {
    expect(wrapper.props('cartProduct')).toEqual(cartProduct)
  })

  it('Triggers deleteProductFromCart method on click', async () => {
    const deleteButton = wrapper.findComponent(AppButton)
    const deleteSpy = vi.spyOn(cartStore, 'deleteProductFromCart')

    await deleteButton.trigger('click')

    expect(deleteSpy).toHaveBeenCalledWith(cartProduct.id)
  })
})
