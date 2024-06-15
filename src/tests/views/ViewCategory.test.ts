import { mount } from '@vue/test-utils'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { nextTick } from 'vue'
import { setActivePinia } from 'pinia'
import { createTestingPinia } from '@pinia/testing'
import { useCategoriesStore } from '@/stores/categoriesStore'
import { useProductsStore } from '@/stores/productsStore'
import ViewCategory from '@/views/ViewCategory.vue'
import AppBreadcrumbs from '@/components/UI/AppBreadcrumbs.vue'
import AppError from '@/components/UI/AppError.vue'
import AppSpinner from '@/components/UI/AppSpinner.vue'
import AppProducts from '@/components/products/AppProducts.vue'
import { type Store } from 'pinia'
import { type TVueWrapperInstance } from '@/types/tests/TVueWrapperInstance'

const mockRouteParams = { id: 1 }

describe('ViewCategory', () => {
  let wrapper: TVueWrapperInstance<typeof ViewCategory>
  let categoriesStore: Store<any, any>
  let productsStore: Store<any, any>

  beforeEach(() => {
    setActivePinia(createTestingPinia())

    vi.mock('vue-router', () => ({
      useRoute: () => ({
        params: mockRouteParams
      }),
      RouterLink: {}
    }))

    wrapper = mount(ViewCategory, {
      components: {
        AppError,
        AppBreadcrumbs,
        AppSpinner
      }
    })

    categoriesStore = useCategoriesStore()
    productsStore = useProductsStore()
  })

  it('Renders the component', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('Calls the resetIndividualCategoryValues method when the component is created', () => {
    expect(categoriesStore.resetIndividualCategoryValues).toHaveBeenCalled()
  })

  it('Calls the fetchIndividualCategory method when the component is created', () => {
    expect(categoriesStore.fetchIndividualCategory).toHaveBeenCalledWith(mockRouteParams.id)
  })

  it('Calls the resetCategoryProductsValues method when the component is created', () => {
    expect(productsStore.resetCategoryProductsValues).toHaveBeenCalled()
  })

  it('Calls the fetchCategoryProducts method when the component is created', () => {
    expect(productsStore.fetchCategoryProducts).toHaveBeenCalledWith(mockRouteParams.id)
  })

  it('Renders the breadcrumbs error child component by condition', async () => {
    categoriesStore.isIndividualCategoryError = true
    await nextTick()
    const errorBreadcrumbs = wrapper.findComponent(AppError)

    expect(errorBreadcrumbs.exists()).toBe(true)
  })

  it('Renders the breadcrumbs child component by condition with default store values', async () => {
    const breadcrumbs = wrapper.findComponent(AppBreadcrumbs)

    expect(breadcrumbs.exists()).toBe(true)
  })

  it('Renders the breadcrumbs spinner child component by condition', async () => {
    categoriesStore.isIndividualCategoryError = false
    categoriesStore.isIndividualCategoryLoaded = false
    await nextTick()
    const spinnerBreadcrumbs = wrapper.findComponent(AppSpinner)

    expect(spinnerBreadcrumbs.exists()).toBe(true)
  })

  it('Renders the products error child component by condition', async () => {
    productsStore.isCategoryProductsError = true
    await nextTick()
    const productsError = wrapper.findComponent(AppError)

    expect(productsError.exists()).toBe(true)
  })

  it('Renders the products child component by condition', async () => {
    productsStore.isCategoryProductsError = false
    productsStore.areCategoryProductsLoaded = true
    await nextTick()
    const products = wrapper.findComponent(AppProducts)

    expect(products.exists()).toBe(true)
  })

  it('Renders the products spinner child component by condition', async () => {
    productsStore.isCategoryProductsError = false
    productsStore.areCategoryProductsLoaded = false
    await nextTick()
    const spinnerProducts = wrapper.findComponent(AppSpinner)

    expect(spinnerProducts.exists()).toBe(true)
  })
})
