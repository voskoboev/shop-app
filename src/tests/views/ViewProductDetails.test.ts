import { mount } from '@vue/test-utils'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { nextTick } from 'vue'
import { setActivePinia } from 'pinia'
import { createTestingPinia } from '@pinia/testing'
import { useProductsStore } from '@/stores/productsStore'
import { useCartStore } from '@/stores/cartStore'
import ViewProductDetails from '@/views/ViewProductDetails.vue'
import AppBreadcrumbs from '@/components/UI/AppBreadcrumbs.vue'
import AppSpinner from '@/components/UI/AppSpinner.vue'
import AppError from '@/components/UI/AppError.vue'
import AppButton from '@/components/UI/AppButton.vue'
import { type Store } from 'pinia'
import { type TVueWrapperInstance } from '@/types/tests/TVueWrapperInstance'

const mockRouteParams = { id: 1 }

describe('ViewProductDetails', () => {
  let wrapper: TVueWrapperInstance<typeof ViewProductDetails>
  let productsStore: Store<any, any>
  let cartStore: Store<any, any>

  beforeEach(() => {
    setActivePinia(createTestingPinia())

    vi.mock('vue-router', () => ({
      useRoute: () => ({
        params: mockRouteParams
      }),
      RouterLink: {}
    }))

    wrapper = mount(ViewProductDetails, {
      global: {
        components: {
          AppBreadcrumbs,
          AppSpinner,
          AppError,
          AppButton
        }
      }
    })

    productsStore = useProductsStore()
    cartStore = useCartStore()
  })

  it('Renders the component', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('Calls the resetIndividualProductValues method when the component is created', () => {
    expect(productsStore.resetIndividualProductValues).toHaveBeenCalled()
  })

  it('Calls the fetchIndividualProduct method when the component is created', () => {
    expect(productsStore.fetchIndividualProduct).toHaveBeenCalledWith(mockRouteParams.id)
  })

  it('Renders the breadcrumbs child component by condition with a default value', async () => {
    const breadcrumbs = wrapper.findComponent(AppBreadcrumbs)

    expect(breadcrumbs.exists()).toBe(true)
  })

  it('Renders the breadcrumbs spinner child component by condition', async () => {
    productsStore.isIndividualProductLoaded = false
    await nextTick()
    const spinnerBreadcrumbs = wrapper.findComponent(AppSpinner)

    expect(spinnerBreadcrumbs.exists()).toBe(true)
  })

  it('Renders the product error child component by condition', async () => {
    productsStore.isIndividualProductsError = true
    await nextTick()
    const errorProducts = wrapper.findComponent(AppError)

    expect(errorProducts.exists()).toBe(true)
  })

  it('Renders the product element by condition', async () => {
    productsStore.isIndividualProductsError = false
    productsStore.isIndividualProductLoaded = true
    await nextTick()
    const product = wrapper.find('div._wrapper_31c314')

    expect(product.exists()).toBe(true)
  })

  it('Renders the product spinner child component by condition', async () => {
    productsStore.isIndividualProductsError = false
    productsStore.isIndividualProductLoaded = false
    await nextTick()
    const spinner = wrapper.findComponent(AppSpinner)

    expect(spinner.exists()).toBe(true)
  })

  it('Triggers the addProductToCartFromIndividualProduct method on the add to cart button on click', async () => {
    const button = wrapper.findComponent(AppButton)

    await button.trigger('click')

    expect(cartStore.addProductToCartFromIndividualProduct).toHaveBeenCalled()
  })
})
