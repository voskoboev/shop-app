import { mount } from '@vue/test-utils'
import { describe, it, expect, vi } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'
import { useCategoriesStore } from '@/stores/categoriesStore'
import { useProductsStore } from '@/stores/productsStore'
import ViewHome from '@/views/ViewHome.vue'
import TheCategoriesMenu from '@/components/categories/TheCategoriesMenu.vue'
import AppError from '@/components/UI/AppError.vue'
import AppSpinner from '@/components/UI/AppSpinner.vue'
import AppProducts from '@/components/products/AppProducts.vue'

describe('ViewHome', () => {
  setActivePinia(createPinia())

  const categoriesStore = useCategoriesStore()
  const productsStore = useProductsStore()

  categoriesStore.resetfetchAllCategoriesValues = vi.fn()
  categoriesStore.fetchAllCategories = vi.fn()
  productsStore.resetAllProductsStateValues = vi.fn()
  productsStore.fetchAllProducts = vi.fn()

  const wrapper = mount(ViewHome, {
    components: {
      AppError,
      AppSpinner
    }
  })

  it('Renders component', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('Calls resetfetchAllCategoriesValues method when component is created', () => {
    expect(categoriesStore.resetfetchAllCategoriesValues).toHaveBeenCalled()
  })

  it('Calls fetchAllCategories method when component is created', () => {
    expect(categoriesStore.fetchAllCategories).toHaveBeenCalled()
  })

  it('Calls resetAllProductsStateValues method when component is created', () => {
    expect(productsStore.resetAllProductsStateValues).toHaveBeenCalled()
  })

  it('Calls fetchAllProducts method when component is created', () => {
    expect(productsStore.fetchAllProducts).toHaveBeenCalled()
  })

  it('Renders categories menu error child component by condition', async () => {
    categoriesStore.isAllCategoriesError = true

    await wrapper.vm.$nextTick()

    const errorCategoriesMenu = wrapper.findComponent(AppError)

    expect(errorCategoriesMenu.exists()).toBe(true)
  })

  it('Renders categories menu child component by condition', async () => {
    categoriesStore.isAllCategoriesError = false
    categoriesStore.areCategoriesLoaded = true

    await wrapper.vm.$nextTick()

    const categoriesMenu = wrapper.findComponent(TheCategoriesMenu)

    expect(categoriesMenu.exists()).toBe(true)
  })

  it('Renders categories menu spinner child component by condition', async () => {
    categoriesStore.isAllCategoriesError = false
    categoriesStore.areCategoriesLoaded = false

    await wrapper.vm.$nextTick()

    const spinnercategoriesMenu = wrapper.findComponent(AppSpinner)

    expect(spinnercategoriesMenu.exists()).toBe(true)
  })

  it('Renders products error child component by condition', async () => {
    productsStore.isAllProductsError = true

    await wrapper.vm.$nextTick()

    const errorProducts = wrapper.findComponent(AppError)

    expect(errorProducts.exists()).toBe(true)
  })

  it('Renders products child component by condition', async () => {
    productsStore.isAllProductsError = false
    productsStore.areAllProductsLoaded = true

    await wrapper.vm.$nextTick()

    const products = wrapper.findComponent(AppProducts)

    expect(products.exists()).toBe(true)
  })

  it('Renders product spinner child component by condition', async () => {
    productsStore.isAllProductsError = false
    productsStore.areAllProductsLoaded = false

    await wrapper.vm.$nextTick()

    const spinners = wrapper.findAllComponents(AppSpinner)

    expect(spinners[1].exists()).toBe(true)
  })
})
