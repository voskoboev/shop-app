import { mount } from '@vue/test-utils'
import { describe, it, expect, vi } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'
import { useCartStore } from '@/stores/cartStore'
import App from '@/App.vue'
import TheLayout from '@/components/layout/TheLayout.vue'

describe('App', () => {
  setActivePinia(createPinia())

  const cartStore = useCartStore()

  cartStore.getCartProductsFromClientApi = vi.fn()
  cartStore.setCartProductsToClientApi = vi.fn()
  window.addEventListener = vi.fn()

  const wrapper = mount(App)

  it('Renders component', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('Calls getCartProductsFromClientApi method when component is created', () => {
    expect(cartStore.getCartProductsFromClientApi).toHaveBeenCalled()
  })

  it('Calls beforeunload listener with setCartProductsToClientApi method when component is created', () => {
    expect(window.addEventListener).toHaveBeenCalledWith(
      'beforeunload',
      cartStore.setCartProductsToClientApi
    )
  })

  it('Renders layout child component', () => {
    const layout = wrapper.findComponent(TheLayout)

    expect(layout.exists()).toBe(true)
  })
})
