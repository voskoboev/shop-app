import { type IProduct } from '@/types/products/IProduct'

export const isIProduct = (data: IProduct): data is IProduct => {
  return (
    typeof data.id === 'number' &&
    typeof data.name === 'string' &&
    typeof data.price === 'number' &&
    typeof data.imageUrl === 'string' &&
    typeof data.thumbnailUrl === 'string' &&
    typeof data.description === 'string'
  )
}
