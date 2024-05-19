import { ref } from 'vue'
import { defineStore } from 'pinia'
import { serverApi } from '@/api/serverApi'
import { useFetch } from '@/composables/useFetch'
import { type ICategoriesData } from '@/types/categories/ICategoriesData'
import { type ICategory } from '@/types/categories/ICategory'

export const useCategoriesStore = defineStore('categories', () => {
  const categories = ref<ICategory[]>([])
  const areCategoriesLoaded = ref(true)

  const fetchCategories = async () => {
    const fetchedData: ICategoriesData = await useFetch({
      loadingStatus: areCategoriesLoaded,
      handler: serverApi.get,
      path: '/categories?responseFields=count,items(id,name,thumbnailUrl)',
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
