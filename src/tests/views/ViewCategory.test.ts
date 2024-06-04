import { mount } from '@vue/test-utils'
import { describe, it, expect, vi } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'
import { useCategoriesStore } from '@/stores/categoriesStore'
import { useProductsStore } from '@/stores/productsStore'
import ViewCategory from '@/views/ViewCategory.vue'
import AppBreadcrumbs from '@/components/UI/AppBreadcrumbs.vue'
import AppError from '@/components/UI/AppError.vue'
import AppSpinner from '@/components/UI/AppSpinner.vue'
import AppProducts from '@/components/products/AppProducts.vue'

const mockRouteParams = { id: 1 }

describe('ViewCategory', () => {
  setActivePinia(createPinia())

  vi.mock('vue-router', () => ({
    useRoute: () => ({
      params: mockRouteParams
    }),
    RouterLink: {}
  }))

  const categoriesStore = useCategoriesStore()
  const productsStore = useProductsStore()

  categoriesStore.resetfetchIndividualCategoryValues = vi.fn()
  categoriesStore.fetchIndividualCategory = vi.fn()
  productsStore.resetCategoryProductsValues = vi.fn()
  productsStore.fetchCategoryProducts = vi.fn()

  const wrapper = mount(ViewCategory, {
    components: {
      AppError,
      AppBreadcrumbs,
      AppSpinner
    }
  })

  it('Renders component', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('Calls resetfetchIndividualCategoryValues method when component is created', () => {
    expect(categoriesStore.resetfetchIndividualCategoryValues).toHaveBeenCalled()
  })

  it('Calls fetchIndividualCategory method when component is created', () => {
    expect(categoriesStore.fetchIndividualCategory).toHaveBeenCalledWith(mockRouteParams.id)
  })

  it('Calls resetCategoryProductsValues method when component is created', () => {
    expect(productsStore.resetCategoryProductsValues).toHaveBeenCalled()
  })

  it('Calls fetchCategoryProducts method when component is created', () => {
    expect(productsStore.fetchCategoryProducts).toHaveBeenCalledWith(mockRouteParams.id)
  })

  it('Renders breadcrumbs error child component by condition', async () => {
    categoriesStore.isIndividualCategoryError = true

    await wrapper.vm.$nextTick()

    const errorBreadcrumbs = wrapper.findComponent(AppError)

    expect(errorBreadcrumbs.exists()).toBe(true)
  })

  it('Renders breadcrumbs child component by condition', async () => {
    categoriesStore.isIndividualCategoryError = false
    categoriesStore.isIndividualCategoryLoaded = true

    await wrapper.vm.$nextTick()

    const breadcrumbs = wrapper.findComponent(AppBreadcrumbs)

    expect(breadcrumbs.exists()).toBe(true)
  })

  it('Renders breadcrumbs spinner child component by condition', async () => {
    categoriesStore.isIndividualCategoryError = false
    categoriesStore.isIndividualCategoryLoaded = false

    await wrapper.vm.$nextTick()

    const spinnerBreadcrumbs = wrapper.findComponent(AppSpinner)

    expect(spinnerBreadcrumbs.exists()).toBe(true)
  })

  it('Renders products error child component by condition', async () => {
    productsStore.isCategoryProductsError = true

    await wrapper.vm.$nextTick()

    const productsError = wrapper.findComponent(AppError)

    expect(productsError.exists()).toBe(true)
  })

  it('Renders products child component by condition', async () => {
    productsStore.isCategoryProductsError = false
    productsStore.areCategoryProductsLoaded = true

    await wrapper.vm.$nextTick()

    const products = wrapper.findComponent(AppProducts)

    expect(products.exists()).toBe(true)
  })

  it('Renders products spinner child component by condition', async () => {
    productsStore.isCategoryProductsError = false
    productsStore.areCategoryProductsLoaded = false

    await wrapper.vm.$nextTick()

    const spinnerProducts = wrapper.findAllComponents(AppSpinner)

    expect(spinnerProducts[1].exists()).toBe(true)
  })
})
