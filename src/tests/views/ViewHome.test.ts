import { mount } from '@vue/test-utils'
import { describe, it, expect, beforeEach } from 'vitest'
import { nextTick } from 'vue'
import { setActivePinia, type Store } from 'pinia'
import { createTestingPinia } from '@pinia/testing'
import { useCategoriesStore } from '@/stores/categoriesStore'
import { useProductsStore } from '@/stores/productsStore'
import ViewHome from '@/views/ViewHome.vue'
import TheCategoriesMenu from '@/components/categories/TheCategoriesMenu.vue'
import AppError from '@/components/UI/AppError.vue'
import AppSpinner from '@/components/UI/AppSpinner.vue'
import AppProducts from '@/components/products/AppProducts.vue'
import { type TVueWrapperInstance } from '@/types/tests/TVueWrapperInstance'

describe('ViewHome', () => {
  let wrapper: TVueWrapperInstance<typeof ViewHome>
  let categoriesStore: Store<any, any>
  let productsStore: Store<any, any>

  beforeEach(() => {
    setActivePinia(createTestingPinia())

    wrapper = mount(ViewHome, {
      components: {
        AppError,
        AppSpinner
      }
    })

    categoriesStore = useCategoriesStore()
    productsStore = useProductsStore()
  })

  it('Renders the component', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('Calls the resetAllCategoriesValues method when the component is created', () => {
    expect(categoriesStore.resetAllCategoriesValues).toHaveBeenCalled()
  })

  it('Calls the fetchAllCategories method when the component is created', () => {
    expect(categoriesStore.fetchAllCategories).toHaveBeenCalled()
  })

  it('Calls the resetAllProductsStateValues method when the component is created', () => {
    expect(productsStore.resetAllProductsStateValues).toHaveBeenCalled()
  })

  it('Calls the fetchAllProducts method when the component is created', () => {
    expect(productsStore.fetchAllProducts).toHaveBeenCalled()
  })

  it('Renders the categories menu error child component by condition', async () => {
    categoriesStore.isAllCategoriesError = true
    await nextTick()
    const errorCategoriesMenu = wrapper.findComponent(AppError)

    expect(errorCategoriesMenu.exists()).toBe(true)
  })

  it('Renders the categories menu child component by condition', async () => {
    categoriesStore.isAllCategoriesError = false
    categoriesStore.areCategoriesLoaded = true
    await nextTick()
    const categoriesMenu = wrapper.findComponent(TheCategoriesMenu)

    expect(categoriesMenu.exists()).toBe(true)
  })

  it('Renders the categories menu spinner child component by condition', async () => {
    categoriesStore.isAllCategoriesError = false
    categoriesStore.areCategoriesLoaded = false
    await nextTick()
    const spinnercategoriesMenu = wrapper.findComponent(AppSpinner)

    expect(spinnercategoriesMenu.exists()).toBe(true)
  })

  it('Renders the products error child component by condition', async () => {
    productsStore.isAllProductsError = true
    await nextTick()

    const errorProducts = wrapper.findComponent(AppError)

    expect(errorProducts.exists()).toBe(true)
  })

  it('Renders the products child component by condition', async () => {
    productsStore.isAllProductsError = false
    productsStore.areAllProductsLoaded = true
    await nextTick()
    const products = wrapper.findComponent(AppProducts)

    expect(products.exists()).toBe(true)
  })

  it('Renders the product spinner child component by condition', async () => {
    productsStore.isAllProductsError = false
    productsStore.areAllProductsLoaded = false
    await nextTick()
    const spinner = wrapper.findComponent(AppSpinner)

    expect(spinner.exists()).toBe(true)
  })
})
