import { type IProduct } from '@/types/products/IProduct'

export type TProductUI = Pick<IProduct, 'id' | 'imageUrl' | 'name' | 'price'>
