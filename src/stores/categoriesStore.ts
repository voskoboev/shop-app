import { ref } from 'vue'
import { defineStore } from 'pinia'
import { serverApi } from '@/services/api/serverApi'
import { useFetch } from '@/composables/useFetch'
import { type ICategory } from '@/types/categories/ICategory'

export const useCategoriesStore = defineStore('categories', () => {
  const categories = ref<ICategory[]>([])
  const areCategoriesLoaded = ref(true)

  const fetchCategories = async () => {
    useFetch({
      loadingStatus: areCategoriesLoaded,
      handler: serverApi.get,
      path: '/categories',
      stateData: categories,
      errorMessage: 'Categories fetch error'
    })
  }

  return {
    categories,
    areCategoriesLoaded,
    fetchCategories
  }
})
