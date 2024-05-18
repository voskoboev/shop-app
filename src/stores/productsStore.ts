import { ref } from 'vue'
import { defineStore } from 'pinia'
import { serverApi } from '@/services/api/serverApi'
import { useFetch } from '@/composables/useFetch'
import { type IProduct } from '@/types/products/IProduct'
import { type IProductsData } from '@/types/products/IProductsData'

export const useProductsStore = defineStore('products', () => {
  const products = ref<IProduct[]>([])
  const individualProduct = ref<Partial<IProduct>>({})
  const areProductsLoaded = ref(true)
  const isIndividualProductLoaded = ref(true)

  const fetchProducts = async () => {
    const fetchedData: IProductsData = await useFetch({
      loadingStatus: areProductsLoaded,
      handler: serverApi.get,
      path: '/products',
      errorMessage: 'Products fetch error'
    })

    if (fetchedData) {
      products.value = fetchedData.items
    }
  }

  const fetchIndividualProduct = async (id: string | string[]) => {
    let fetchedData: IProduct

    if (typeof id === 'string') {
      fetchedData = await useFetch({
        loadingStatus: isIndividualProductLoaded,
        handler: serverApi.get,
        path: `/products/${id}`,
        errorMessage: 'Individual product fetch error'
      })
    } else {
      throw new Error(
        'Individual product fetch error: Invalid type of id parameter in fetch store method'
      )
    }

    if (fetchedData) {
      individualProduct.value = fetchedData
    }
  }

  const resetIndividualProductValue = () => {
    individualProduct.value = {}
  }

  return {
    products,
    individualProduct,
    areProductsLoaded,
    isIndividualProductLoaded,
    fetchProducts,
    fetchIndividualProduct,
    resetIndividualProductValue
  }
})
