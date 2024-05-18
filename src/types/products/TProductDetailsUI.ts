import { type IProduct } from '@/types/products/IProduct'

export type TProductDetailsUI = Pick<IProduct, 'id' | 'imageUrl' | 'name' | 'price' | 'description'>
