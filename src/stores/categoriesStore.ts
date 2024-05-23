import { ref } from 'vue'
import { defineStore } from 'pinia'
import { serverApi } from '@/api/serverApi'
import { useFetch } from '@/composables/useFetch'
import { type ICategoriesData } from '@/types/categories/ICategoriesData'
import { type ICategory } from '@/types/categories/ICategory'
import { type TIndividualCategory } from '@/types/categories/TIndividualCategory'

export const useCategoriesStore = defineStore('categories', () => {
  const body = document.body
  const stopScrollSelectorName = 'stopScroll'
  const categories = ref<ICategory[]>([])
  const individualCategory = ref(<TIndividualCategory>{})
  const areCategoriesLoaded = ref(true)
  const isIndividualCategoryLoaded = ref(false)
  const isMobileMenuOpen = ref(true)

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

  const fetchIndividualCategory = async (categoryId: string | string[]) => {
    const path = `/categories/${categoryId}?responseFields=name`
    const errorMessage = 'Individual category fetch error'

    individualCategory.value = await useFetch({
      loadingStatus: isIndividualCategoryLoaded,
      handler: serverApi.get,
      path,
      errorMessage
    })
  }

  const changeMenuStateDependingOnWindowWidth = () => {
    const mediumTabletWindowWidth = 768

    if (window.innerWidth <= mediumTabletWindowWidth) {
      isMobileMenuOpen.value = false
    } else {
      isMobileMenuOpen.value = true
    }
  }

  const addWindowResizeListener = () => {
    window.addEventListener('resize', changeMenuStateDependingOnWindowWidth)
  }

  const removeWindowResizeListener = () => {
    window.removeEventListener('resize', changeMenuStateDependingOnWindowWidth)
  }

  const disableBodyScroll = () => {
    body.classList.add(stopScrollSelectorName)
  }

  const enableBodyScroll = () => {
    body.classList.remove(stopScrollSelectorName)
  }

  const openMobileMenu = () => {
    isMobileMenuOpen.value = true
    disableBodyScroll()
  }

  const closeMobileMenu = () => {
    isMobileMenuOpen.value = false
    enableBodyScroll()
  }

  return {
    categories,
    individualCategory,
    isIndividualCategoryLoaded,
    areCategoriesLoaded,
    fetchAllCategories,
    fetchIndividualCategory,
    changeMenuStateDependingOnWindowWidth,
    addWindowResizeListener,
    removeWindowResizeListener,
    isMobileMenuOpen,
    openMobileMenu,
    closeMobileMenu
  }
})
