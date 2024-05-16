import { ref } from 'vue'
import { defineStore } from 'pinia'
import { serverApi } from '@/services/api/serverApi'
import { useFetch } from '@/composables/useFetch'
import { type IProduct } from '@/types/products/IProduct'

export const useProductsStore = defineStore('products', () => {
  const products = ref<IProduct[]>([])
  const areProductsLoaded = ref(true)

  const fetchProducts = () => {
    useFetch({
      loadingStatus: areProductsLoaded,
      handler: serverApi.get,
      path: '/products',
      stateData: products,
      errorMessage: 'Products fetch error'
    })
  }

  return {
    products,
    areProductsLoaded,
    fetchProducts
  }
})
