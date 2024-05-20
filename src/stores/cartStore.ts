import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { clientApi } from '@/api/clientApi'
import { useProductsStore } from '@/stores/productsStore'
import { type IProduct } from '@/types/products/IProduct'

export const useCartStore = defineStore('cart', () => {
  const productsStore = useProductsStore()

  const cartProducts = ref<IProduct[]>([])
  const isProductAddedToCart = ref(false)

  const cartProductsAmount = computed(() => cartProducts.value.length)
  const areCartProductsAvailable = computed(() => cartProducts.value.length > 0)

  const toggleToastVisibility = () => {
    const timeout = 1000
    isProductAddedToCart.value = true

    setTimeout(() => {
      isProductAddedToCart.value = false
    }, timeout)
  }

  const addProductToCart = (productId: number | undefined) => {
    const foundProduct = productsStore.products.find((product) => product.id === productId)

    if (foundProduct) {
      cartProducts.value.push(foundProduct)

      if (!isProductAddedToCart.value) {
        toggleToastVisibility()
      }
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
    isProductAddedToCart,
    cartProductsAmount,
    areCartProductsAvailable,
    addProductToCart,
    deleteProductFromCart,
    setCartProductsToClientApi,
    getCartProductsFromClientApi
  }
})
