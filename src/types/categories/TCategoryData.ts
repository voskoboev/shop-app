import { type ICategory } from '@/types/categories/ICategory'

export interface ICategoryData {
  count: number
  items: ICategory[]
  limit: number
  offset: number
  total: number
}
