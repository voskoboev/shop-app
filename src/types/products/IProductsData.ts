import { type IProduct } from '@/types/products/IProduct'

export interface IProductsData {
  count: number
  items: IProduct[]
  limit: number
  offset: number
  total: number
}
