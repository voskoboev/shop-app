import { type ICategory } from '@/types/categories/ICategory'

export const isICategory = (data: ICategory): data is ICategory => {
  return (
    typeof data.id === 'number' &&
    typeof data.name === 'string' &&
    typeof data.thumbnailUrl === 'string'
  )
}
