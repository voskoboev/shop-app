import { type IProduct } from '@/types/products/IProduct'
import { isIProduct } from '@/types/products/isIProduct'

export const isIProductArray = (data: any): data is IProduct[] => {
  return Array.isArray(data) && data.every(isIProduct)
}
