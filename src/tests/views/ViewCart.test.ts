import { mount } from '@vue/test-utils'
import { describe, it, expect, vi } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'
import { useCartStore } from '@/stores/cartStore'
import ViewCart from '@/views/ViewCart.vue'
import AppToast from '@/components/UI/AppToast.vue'
import AppBreadcrumbs from '@/components/UI/AppBreadcrumbs.vue'
import AppButton from '@/components/UI/AppButton.vue'
import TheCart from '@/components/cart/TheCart.vue'
import AppPlaceholder from '@/components/UI/AppPlaceholder.vue'
import { type IProduct } from '@/types/products/IProduct'

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

describe('ViewCart', () => {
  setActivePinia(createPinia())

  const cartStore = useCartStore()

  cartStore.placeOrder = vi.fn()
  cartStore.cartProducts = mockCartProducts

  const wrapper = mount(ViewCart, {
    global: {
      stubs: ['router-link']
    },
    components: {
      AppToast,
      AppBreadcrumbs,
      AppButton,
      AppPlaceholder
    }
  })
  const button = wrapper.findComponent(AppButton)

  it('Renders component', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('Renders toast child component', () => {
    const toast = wrapper.findComponent(AppToast)

    expect(toast.exists()).toBe(true)
  })

  it('Renders breadcrumbs child component', () => {
    const breadcrumbs = wrapper.findComponent(AppBreadcrumbs)

    expect(breadcrumbs.exists()).toBe(true)
  })

  it('Renders button child component', () => {
    expect(button.exists()).toBe(true)
  })

  it('Triggers placeOrder method on button child component on click', async () => {
    await button.trigger('click')

    expect(cartStore.placeOrder).toHaveBeenCalled()
  })

  it('Disables button when cart products are not available', async () => {
    cartStore.cartProducts = []
    await wrapper.vm.$nextTick()

    expect(button.attributes('disabled')).toBe('')
  })

  it('Enables button when cart products are available', async () => {
    cartStore.cartProducts = mockCartProducts
    await wrapper.vm.$nextTick()

    expect(button.attributes('disabled')).toBeUndefined()
  })

  it('Renders cart child component by condition', async () => {
    cartStore.cartProducts = mockCartProducts
    await wrapper.vm.$nextTick()
    const cart = wrapper.findComponent(TheCart)

    expect(cart.exists()).toBe(true)
  })

  it('Renders cart placeholder child component by condition', async () => {
    cartStore.cartProducts = []
    await wrapper.vm.$nextTick()
    const placeholder = wrapper.findComponent(AppPlaceholder)

    expect(placeholder.exists()).toBe(true)
  })
})
