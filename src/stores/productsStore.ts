import { ref } from 'vue'
import { defineStore } from 'pinia'
import { serverApi } from '@/api/serverApi'
import { useFetch } from '@/composables/api/useFetch'
import { isIProduct } from '@/types/products/isIProduct'
import { isIProductArray } from '@/types/products/isIProductArray'
import { type IProductsData } from '@/types/products/IProductsData'
import { type IProduct } from '@/types/products/IProduct'

export const useProductsStore = defineStore('products', () => {
  const allProducts = ref<IProduct[]>([])
  const categoryProducts = ref<IProduct[]>([])
  const individualProduct = ref(<IProduct>{})
  const areAllProductsLoaded = ref(true)
  const areCategoryProductsLoaded = ref(true)
  const isIndividualProductLoaded = ref(true)
  const isAllProductsError = ref(false)
  const isCategoryProductsError = ref(false)
  const isIndividualProductsError = ref(false)

  const fetchAllProducts = async () => {
    const path = '/products?responseFields=items(id,name,price,imageUrl,thumbnailUrl,description)'
    const errorMessage = 'All products fetch error'

    const fetchedData: IProductsData = await useFetch({
      isLoadedStatus: areAllProductsLoaded,
      isErrorStatus: isAllProductsError,
      handler: serverApi.get,
      path,
      errorMessage
    })

    if (fetchedData && isIProductArray(fetchedData.items)) {
      allProducts.value = fetchedData.items
    } else {
      isAllProductsError.value = true
    }
  }

  const fetchCategoryProducts = async (categoryId: string | string[]) => {
    const path = `/products?responseFields=items(id,name,price,imageUrl,thumbnailUrl,description)&category=${categoryId}`
    const errorMessage = 'Category products fetch error'

    const fetchedData: IProductsData = await useFetch({
      isLoadedStatus: areCategoryProductsLoaded,
      isErrorStatus: isCategoryProductsError,
      handler: serverApi.get,
      path,
      errorMessage
    })

    if (fetchedData && isIProductArray(fetchedData.items)) {
      categoryProducts.value = fetchedData.items
    } else {
      isCategoryProductsError.value = true
    }
  }

  const fetchIndividualProduct = async (productId: string | string[]) => {
    const path = `/products/${productId}?responseFields=id,name,price,imageUrl,thumbnailUrl,description`
    const errorMessage = 'Individual product fetch error'

    const fetchedData: IProduct = await useFetch({
      isLoadedStatus: isIndividualProductLoaded,
      isErrorStatus: isIndividualProductsError,
      handler: serverApi.get,
      path,
      errorMessage
    })

    if (fetchedData && isIProduct(fetchedData)) {
      individualProduct.value = fetchedData
    } else {
      isIndividualProductsError.value = true
    }
  }

  const resetAllProductsStateValues = () => {
    allProducts.value = []
    isAllProductsError.value = false
  }

  const resetCategoryProductsValues = () => {
    categoryProducts.value = []
    isCategoryProductsError.value = false
  }

  const resetIndividualProductValues = () => {
    individualProduct.value = <IProduct>{}
    isIndividualProductsError.value = false
  }

  return {
    allProducts,
    categoryProducts,
    individualProduct,
    areAllProductsLoaded,
    areCategoryProductsLoaded,
    isIndividualProductLoaded,
    isAllProductsError,
    isCategoryProductsError,
    isIndividualProductsError,
    fetchAllProducts,
    fetchCategoryProducts,
    fetchIndividualProduct,
    resetAllProductsStateValues,
    resetCategoryProductsValues,
    resetIndividualProductValues
  }
})
