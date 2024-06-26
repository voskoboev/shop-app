import { ref } from 'vue'
import { defineStore } from 'pinia'
import { serverApi } from '@/api/serverApi'
import { useFetch } from '@/composables/api/useFetch'
import { isICategoryArray } from '@/types/categories/isICategoryArray'
import { isTIndividualCategory } from '@/types/categories/isTIndividualCategory'
import { type ICategoriesData } from '@/types/categories/ICategoriesData'
import { type ICategory } from '@/types/categories/ICategory'
import { type TIndividualCategory } from '@/types/categories/TIndividualCategory'

export const useCategoriesStore = defineStore('categories', () => {
  const allCategories = ref<ICategory[]>([])
  const individualCategory = ref(<TIndividualCategory>{})
  const areCategoriesLoaded = ref(true)
  const isIndividualCategoryLoaded = ref(true)
  const isAllCategoriesError = ref(false)
  const isIndividualCategoryError = ref(false)

  const fetchAllCategories = async () => {
    const path = '/categories?responseFields=items(id,name,thumbnailUrl)'
    const errorMessage = 'Categories fetch error'

    const fetchedData: ICategoriesData = await useFetch({
      isLoadedStatus: areCategoriesLoaded,
      isErrorStatus: isAllCategoriesError,
      handler: serverApi.get,
      path,
      errorMessage
    })

    if (fetchedData && isICategoryArray(fetchedData.items)) {
      allCategories.value = fetchedData.items
    } else {
      isAllCategoriesError.value = true
    }
  }

  const fetchIndividualCategory = async (categoryId: string | string[]) => {
    const path = `/categories/${categoryId}?responseFields=name`
    const errorMessage = 'Individual category fetch error'

    const fetchedData: TIndividualCategory = await useFetch({
      isLoadedStatus: isIndividualCategoryLoaded,
      isErrorStatus: isIndividualCategoryError,
      handler: serverApi.get,
      path,
      errorMessage
    })

    if (fetchedData && isTIndividualCategory(fetchedData)) {
      individualCategory.value = fetchedData
    } else {
      isIndividualCategoryError.value = true
    }
  }

  const resetAllCategoriesValues = () => {
    allCategories.value = []
    isAllCategoriesError.value = false
  }

  const resetIndividualCategoryValues = () => {
    individualCategory.value = <TIndividualCategory>{}
    isIndividualCategoryError.value = false
  }

  return {
    allCategories,
    individualCategory,
    areCategoriesLoaded,
    isIndividualCategoryLoaded,
    isAllCategoriesError,
    isIndividualCategoryError,
    fetchAllCategories,
    fetchIndividualCategory,
    resetAllCategoriesValues,
    resetIndividualCategoryValues
  }
})
