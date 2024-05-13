import { ref } from 'vue'
import { defineStore } from 'pinia'

import { type IProduct } from '@/types/products/IProduct'
import { serverApi } from '@/services/api'

import { useFetch } from '@/composables/useFetch'

export const useProductsStore = defineStore('products', () => {
  const products = ref<IProduct[]>([])

  const areProductsLoaded = ref(true)

  // useFetch({
  //   loadingStatus: areProductsLoaded,
  //   handler: serverApi.get,
  //   path: '/products',
  //   stateData: products
  // })

  // const fetchProducts = async () => {
  //   try {
  //     areProductsLoaded.value = false
  //     const res = await serverApi.get('/products')

  //     console.log('products arr', res.data.items)

  //     products.value = res.data.items
  //     areProductsLoaded.value = true
  //   } catch (err: any) {
  //     console.error(`Products fetch error: ${err.message}`, err)
  //   }
  // }

  const fetchProducts = () => {
    // useFetch(areProductsLoaded, serverApi.get, '/products', products)

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
