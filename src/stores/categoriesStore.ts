import { ref } from 'vue'
import { defineStore } from 'pinia'
import { serverApi } from '@/services/api/serverApi'
import { useFetch } from '@/composables/useFetch'
import { type ICategory } from '@/types/categories/ICategory'
import { type ICategoryData } from '@/types/categories/TCategoryData'

export const useCategoriesStore = defineStore('categories', () => {
  const categories = ref<ICategory[]>([])
  const areCategoriesLoaded = ref(true)

  const fetchCategories = async () => {
    const fetchedData: ICategoryData = await useFetch({
      loadingStatus: areCategoriesLoaded,
      handler: serverApi.get,
      path: '/categories',
      errorMessage: 'Categories fetch error'
    })

    if (fetchedData) {
      categories.value = fetchedData.items
    }
  }

  return {
    categories,
    areCategoriesLoaded,
    fetchCategories
  }
})
