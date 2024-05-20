import { ref } from 'vue'
import { defineStore } from 'pinia'
import { serverApi } from '@/api/serverApi'
import { useFetch } from '@/composables/useFetch'
import { type IProductsData } from '@/types/products/IProductsData'
import { type IProduct } from '@/types/products/IProduct'

export const useProductsStore = defineStore('products', () => {
  const products = ref<IProduct[]>([])
  const categoryProducts = ref<IProduct[]>([])
  const individualProduct = ref(<IProduct>{})
  const areAllProductsLoaded = ref(true)
  const areCategoryProductsLoaded = ref(true)
  const isIndividualProductLoaded = ref(true)

  const fetchAllProducts = async () => {
    const fetchedData: IProductsData = await useFetch({
      loadingStatus: areAllProductsLoaded,
      handler: serverApi.get,
      path: '/products?responseFields=items(id,name,price,imageUrl,thumbnailUrl)',
      errorMessage: 'All products fetch error'
    })

    if (fetchedData) {
      products.value = fetchedData.items
    }
  }

  const fetchIndividualProduct = async (productId: string | string[]) => {
    individualProduct.value = await useFetch({
      loadingStatus: isIndividualProductLoaded,
      handler: serverApi.get,
      path: `/products/${productId}?responseFields=id,name,price,imageUrl,description`,
      errorMessage: 'Individual product fetch error'
    })
  }

  const resetIndividualProductValue = () => {
    individualProduct.value = <IProduct>{}
  }

  const fetchCategoryProducts = async (categoryId: string | string[]) => {
    const fetchedData: IProductsData = await useFetch({
      loadingStatus: areCategoryProductsLoaded,
      handler: serverApi.get,
      path: `/products?responseFields=items(id,name,price,imageUrl)&category=${categoryId}`,
      errorMessage: 'Category products fetch error'
    })

    if (fetchedData) {
      categoryProducts.value = fetchedData.items
    }
  }

  const resetCategoryProductsValue = () => {
    categoryProducts.value = []
  }

  return {
    products,
    categoryProducts,
    individualProduct,
    areAllProductsLoaded,
    areCategoryProductsLoaded,
    isIndividualProductLoaded,
    fetchAllProducts,
    fetchCategoryProducts,
    resetCategoryProductsValue,
    fetchIndividualProduct,
    resetIndividualProductValue
  }
})
