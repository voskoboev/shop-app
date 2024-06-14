import { mount } from '@vue/test-utils'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'
import { createTestingPinia } from '@pinia/testing'
import { useCartStore } from '@/stores/cartStore'
import App from '@/App.vue'
import TheLayout from '@/components/layout/TheLayout.vue'
import { type Store } from 'pinia'
import { type TVueWrapperInstance } from '@/types/tests/TVueWrapperInstance'

describe('App', () => {
  let wrapper: TVueWrapperInstance<typeof App>
  let cartStore: Store<any, any>

  window.addEventListener = vi.fn()

  beforeEach(() => {
    setActivePinia(createPinia())

    wrapper = mount(App, {
      global: {
        plugins: [createTestingPinia()]
      }
    })

    cartStore = useCartStore()
  })

  it('Renders the component', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('Calls the getCartProductsFromClientApi method when the component is created', () => {
    expect(cartStore.getCartProductsFromClientApi).toHaveBeenCalled()
  })

  it('Invokes a beforeunload listener with the setCartProductsToClientApi method when the component is created', () => {
    expect(window.addEventListener).toHaveBeenCalledWith(
      'beforeunload',
      cartStore.setCartProductsToClientApi
    )
  })

  it('Renders the layout child component', () => {
    const layout = wrapper.findComponent(TheLayout)

    expect(layout.exists()).toBe(true)
  })
})
