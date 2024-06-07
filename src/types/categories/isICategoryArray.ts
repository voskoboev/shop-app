import { isICategory } from '@/types/categories/isICategory'
import { type ICategory } from '@/types/categories/ICategory'

export const isICategoryArray = (data: ICategory[]): data is ICategory[] => {
  return Array.isArray(data) && data.every(isICategory)
}
