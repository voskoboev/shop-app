import { type ICategory } from '@/types/categories/ICategory'
import { isICategory } from '@/types/categories/isICategory'

export const isICategoryArray = (data: any): data is ICategory[] => {
  return Array.isArray(data) && data.every(isICategory)
}
