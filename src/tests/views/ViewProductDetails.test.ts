import { mount } from '@vue/test-utils'
import { describe, it, expect, vi } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'
import { useProductsStore } from '@/stores/productsStore'
import { useCartStore } from '@/stores/cartStore'
import ViewProductDetails from '@/views/ViewProductDetails.vue'
import AppBreadcrumbs from '@/components/UI/AppBreadcrumbs.vue'
import AppSpinner from '@/components/UI/AppSpinner.vue'
import AppError from '@/components/UI/AppError.vue'
import AppButton from '@/components/UI/AppButton.vue'

const mockRouteParams = { id: 1 }

describe('ViewProductDetails', () => {
  setActivePinia(createPinia())

  vi.mock('vue-router', () => ({
    useRoute: () => ({
      params: mockRouteParams
    }),
    RouterLink: {}
  }))

  const productsStore = useProductsStore()
  const cartStore = useCartStore()

  productsStore.resetIndividualProductValues = vi.fn()
  productsStore.fetchIndividualProduct = vi.fn()
  cartStore.addProductToCartFromIndividualProduct = vi.fn()

  const wrapper = mount(ViewProductDetails, {
    global: {
      components: {
        AppBreadcrumbs,
        AppSpinner,
        AppError,
        AppButton
      }
    }
  })
  const button = wrapper.findComponent(AppButton)

  it('Renders component', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('Calls resetIndividualProductValues method when component is created', () => {
    expect(productsStore.resetIndividualProductValues).toHaveBeenCalled()
  })

  it('Calls fetchIndividualProduct method when component is created', () => {
    expect(productsStore.fetchIndividualProduct).toHaveBeenCalledWith(mockRouteParams.id)
  })

  it('Renders breadcrumbs child component by condition', async () => {
    productsStore.isIndividualProductLoaded = true
    await wrapper.vm.$nextTick()

    const breadcrumbs = wrapper.findComponent(AppBreadcrumbs)

    expect(breadcrumbs.exists()).toBe(true)
  })

  it('Renders breadcrumbs spinner child component by condition', async () => {
    productsStore.isIndividualProductLoaded = false
    await wrapper.vm.$nextTick()

    const spinnerBreadcrumbs = wrapper.findComponent(AppSpinner)

    expect(spinnerBreadcrumbs.exists()).toBe(true)
  })

  it('Renders product error child component by condition', async () => {
    productsStore.isIndividualProductsError = true
    await wrapper.vm.$nextTick()

    const errorProducts = wrapper.findComponent(AppError)

    expect(errorProducts.exists()).toBe(true)
  })

  it('Renders product element by condition', async () => {
    productsStore.isIndividualProductsError = false
    productsStore.isIndividualProductLoaded = true
    await wrapper.vm.$nextTick()

    const product = wrapper.find('div._wrapper_31c314')

    expect(product.exists()).toBe(true)
  })

  it('Renders product spinner child component by condition', async () => {
    productsStore.isIndividualProductsError = false
    productsStore.isIndividualProductLoaded = false
    await wrapper.vm.$nextTick()

    const spinners = wrapper.findAllComponents(AppSpinner)

    expect(spinners[1].exists()).toBe(true)
  })

  it('Triggers addProductToCartFromIndividualProduct method on add to cart button on click', async () => {
    await button.trigger('click')

    expect(cartStore.addProductToCartFromIndividualProduct).toHaveBeenCalled()
  })
})
