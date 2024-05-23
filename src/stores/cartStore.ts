import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { clientApi } from '@/api/clientApi'
import { useProductsStore } from '@/stores/productsStore'
import { type Ref } from 'vue'
import { type IProduct } from '@/types/products/IProduct'
import { type TAddToCartProductsStateData } from '@/types/cart/TAddToCartProductsStateData'

export const useCartStore = defineStore('cart', () => {
  const productsStore = useProductsStore()

  const cartProducts = ref<IProduct[]>([])
  const isProductAddedToCart = ref(false)
  const isOrderPlaced = ref(false)
  const cartProductsAmount = computed(() => cartProducts.value.length)
  const areCartProductsAvailable = computed(() => cartProducts.value.length > 0)

  const toggleToastVisibility = (itemStatus: Ref<boolean>) => {
    const timeout = 1000
    itemStatus.value = true

    setTimeout(() => {
      itemStatus.value = false
    }, timeout)
  }

  const addProductToCart = (product: IProduct) => {
    cartProducts.value.push(product)

    if (!isProductAddedToCart.value) {
      toggleToastVisibility(isProductAddedToCart)
    }
  }

  const addProductToCartById = (
    productsStateData: TAddToCartProductsStateData<keyof typeof productsStore>,
    productId: number | null = null
  ) => {
    let foundProduct: IProduct | undefined

    if (productsStateData === 'individualProduct') {
      foundProduct = productsStore.individualProduct
    } else {
      foundProduct = productsStore[productsStateData].find((product) => product.id === productId)
    }

    if (foundProduct) {
      addProductToCart(foundProduct)
    }
  }

  const addProductToCartFromAllProducts = (productId: number) => {
    addProductToCartById('allProducts', productId)
  }

  const addProductToCartFromCategory = (productId: number) => {
    addProductToCartById('categoryProducts', productId)
  }

  const addProductToCartFromIndividualProduct = () => {
    addProductToCartById('individualProduct')
  }

  const deleteProductFromCart = (productId: number) => {
    const foundProductIndex = cartProducts.value.findIndex((product) => product.id === productId)

    cartProducts.value.splice(foundProductIndex, 1)
  }

  const placeOrder = () => {
    if (!isOrderPlaced.value) {
      toggleToastVisibility(isOrderPlaced)
    }
  }

  const setCartProductsToClientApi = () => {
    clientApi.setItem([...cartProducts.value])
  }

  const getCartProductsFromClientApi = () => {
    const receivedItem = clientApi.getItem()

    if (receivedItem) {
      cartProducts.value = receivedItem
    } else {
      setCartProductsToClientApi()
    }
  }

  return {
    cartProducts,
    isProductAddedToCart,
    isOrderPlaced,
    cartProductsAmount,
    areCartProductsAvailable,
    addProductToCartFromAllProducts,
    addProductToCartFromCategory,
    addProductToCartFromIndividualProduct,
    deleteProductFromCart,
    placeOrder,
    setCartProductsToClientApi,
    getCartProductsFromClientApi
  }
})
