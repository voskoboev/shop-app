import { ref } from 'vue'
import { defineStore } from 'pinia'
import { serverApi } from '@/api/serverApi'
import { useFetch } from '@/composables/useFetch'
import { type ICategoriesData } from '@/types/categories/ICategoriesData'
import { type ICategory } from '@/types/categories/ICategory'

export const useCategoriesStore = defineStore('categories', () => {
  const categories = ref<ICategory[]>([])
  const individualCategory = ref(<Pick<ICategory, 'name'>>{})
  const isIndividualCategoryLoaded = ref(false)
  const areCategoriesLoaded = ref(true)

  const fetchAllCategories = async () => {
    const path = '/categories?responseFields=items(id,name,thumbnailUrl)'
    const errorMessage = 'Categories fetch error'

    const fetchedData: ICategoriesData = await useFetch({
      loadingStatus: areCategoriesLoaded,
      handler: serverApi.get,
      path,
      errorMessage
    })

    if (fetchedData) {
      categories.value = fetchedData.items
    }
  }

  const fetchIndividualCategory = async (categoryId: any) => {
    const path = `/categories/${categoryId}?responseFields=name`
    const errorMessage = 'Individual category fetch error'

    individualCategory.value = await useFetch({
      loadingStatus: isIndividualCategoryLoaded,
      handler: serverApi.get,
      path,
      errorMessage
    })
  }

  const resetIndividualCategoryValue = () => {
    individualCategory.value = <Pick<ICategory, 'name'>>{}
  }

  return {
    categories,
    individualCategory,
    isIndividualCategoryLoaded,
    areCategoriesLoaded,
    fetchAllCategories,
    fetchIndividualCategory,
    resetIndividualCategoryValue
  }
})
