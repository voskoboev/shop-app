import { type IProduct } from '@/types/products/IProduct'

export interface IClientApi {
  setItem: (item: IProduct[]) => void
  getItem: () => IProduct[]
}
