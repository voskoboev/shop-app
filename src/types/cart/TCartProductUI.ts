import { type IProduct } from '@/types/products/IProduct'

export type TCartProductUI = Pick<IProduct, 'id' | 'name' | 'price' | 'thumbnailUrl'>
