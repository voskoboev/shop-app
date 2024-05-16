import { ref } from 'vue'
import { defineStore } from 'pinia'
import { clientApi } from '@/services/api'
import { useProductsStore } from '@/stores/productsStore'
import { type IProduct } from '@/types/products/IProduct'

export const useCartStore = defineStore('cart', () => {
  const productsStore = useProductsStore()

  const cartProducts = ref<IProduct[]>([])

  const addProductToCart = (productId: number) => {
    const foundProduct = productsStore.products.find((product) => product.id === productId)

    if (foundProduct) {
      cartProducts.value.push(foundProduct)
    }
  }

  const deleteProductFromCart = (productId: number) => {
    const foundProductIndex = cartProducts.value.findIndex((product) => product.id === productId)

    cartProducts.value.splice(foundProductIndex, 1)
  }

  const setCartProductsToClientApi = () => {
    clientApi.setItem([...cartProducts.value])
  }

  const getCartProductsFromClientApi = () => {
    cartProducts.value = clientApi.getItem()
  }

  return {
    cartProducts,
    addProductToCart,
    deleteProductFromCart,
    setCartProductsToClientApi,
    getCartProductsFromClientApi
  }
})
