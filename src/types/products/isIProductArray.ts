import { isIProduct } from '@/types/products/isIProduct'
import { type IProduct } from '@/types/products/IProduct'

export const isIProductArray = (data: IProduct[]): data is IProduct[] => {
  return Array.isArray(data) && data.every(isIProduct)
}
