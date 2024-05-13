import { ref } from 'vue'
import { defineStore } from 'pinia'

import { type ICategory } from '@/types/categories/ICategory'

import { serverApi } from '@/services/api'

export const useCategoriesStore = defineStore('categories', () => {
  const categories = ref<ICategory[]>([])
  const areCategoriesLoaded = ref(true)

  const fetchCategories = async () => {
    try {
      areCategoriesLoaded.value = false
      const res = await serverApi.get('/categories')

      console.log('categories arr', res.data.items)

      categories.value = res.data.items
      areCategoriesLoaded.value = true
    } catch (err: any) {
      console.error(`Categories fetch error: ${err.message}`, err)
    }
  }

  return {
    categories,
    areCategoriesLoaded,
    fetchCategories
  }
})
