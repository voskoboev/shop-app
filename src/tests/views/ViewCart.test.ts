import { mount } from '@vue/test-utils'
import { describe, it, expect, beforeEach } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'
import { createTestingPinia } from '@pinia/testing'
import { useCartStore } from '@/stores/cartStore'
import ViewCart from '@/views/ViewCart.vue'
import AppToast from '@/components/UI/AppToast.vue'
import AppBreadcrumbs from '@/components/UI/AppBreadcrumbs.vue'
import AppButton from '@/components/UI/AppButton.vue'
import TheCart from '@/components/cart/TheCart.vue'
import AppPlaceholder from '@/components/UI/AppPlaceholder.vue'
import { type Store } from 'pinia'
import { type TVueWrapperInstance } from '@/types/tests/TVueWrapperInstance'

describe('ViewCart', () => {
  let wrapper: TVueWrapperInstance<typeof ViewCart>
  let cartStore: Store<any, any>

  beforeEach(() => {
    setActivePinia(createPinia())

    wrapper = mount(ViewCart, {
      global: {
        plugins: [createTestingPinia()],
        stubs: ['router-link']
      },
      components: {
        AppToast,
        AppBreadcrumbs,
        AppButton,
        AppPlaceholder
      }
    })

    cartStore = useCartStore()
  })

  it('Renders the component', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('Renders the toast child component', () => {
    const toast = wrapper.findComponent(AppToast)

    expect(toast.exists()).toBe(true)
  })

  it('Renders the breadcrumbs child component', () => {
    const breadcrumbs = wrapper.findComponent(AppBreadcrumbs)

    expect(breadcrumbs.exists()).toBe(true)
  })

  it('Renders the button child component', () => {
    const button = wrapper.findComponent(AppButton)

    expect(button.exists()).toBe(true)
  })

  // it('Triggers placeOrder method on button child component on click', async () => {
  //   cartStore.areCartProductsAvailable = false
  //   const button = wrapper.findComponent(AppButton)

  //   await button.trigger('click')

  //   expect(cartStore.placeOrder).toHaveBeenCalled()
  // })

  it('Disables the button when cart products are not available', async () => {
    cartStore.areCartProductsAvailable = false
    const button = wrapper.findComponent(AppButton)
    await wrapper.vm.$nextTick()

    expect(button.attributes('disabled')).toBe('')
  })

  it('Enables the button when cart products are available', async () => {
    cartStore.areCartProductsAvailable = true
    const button = wrapper.findComponent(AppButton)
    await wrapper.vm.$nextTick()

    expect(button.attributes('disabled')).toBeUndefined()
  })

  it('Renders the cart child component by condition', async () => {
    cartStore.areCartProductsAvailable = true
    await wrapper.vm.$nextTick()
    const cart = wrapper.findComponent(TheCart)

    expect(cart.exists()).toBe(true)
  })

  it('Renders the cart placeholder child component by condition', async () => {
    cartStore.areCartProductsAvailable = false
    const placeholder = wrapper.findComponent(AppPlaceholder)
    await wrapper.vm.$nextTick()

    expect(placeholder.exists()).toBe(true)
  })
})
