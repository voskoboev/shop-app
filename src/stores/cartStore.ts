// import { ref } from 'vue'
import { defineStore } from 'pinia'

// import { type IProduct } from '@/types/IProduct'
// import { api } from '@/services'

export const useCartStore = defineStore('cart', () => {
  // const products = ref<IProduct[]>([])
  // const areProductsLoaded = ref(true)
  // const fetchProducts = async () => {
  //   try {
  //     areProductsLoaded.value = false
  //     const res = await api.get('/products')
  //     console.log('products arr', res.data.items)
  //     products.value = res.data.items
  //     areProductsLoaded.value = true
  //   } catch (err: any) {
  //     console.error(`Error: ${err.message}`, err)
  //   }
  // }
  // return {
  // products,
  // areProductsLoaded,
  // fetchProducts
  // }
})
