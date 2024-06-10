import { describe, it, expect, beforeEach } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useCartStore } from '@/stores/cartStore'
import { useProductsStore } from '@/stores/productsStore'
import { type IProduct } from '@/types/products/IProduct'

const mockProducts: IProduct[] = [
  {
    id: 1,
    name: 'Name 1',
    price: 1,
    imageUrl: 'imageUrl 1',
    thumbnailUrl: 'thumbnailUrl 1',
    description: 'description 1'
  },
  {
    id: 2,
    name: 'Name 2',
    price: 2,
    imageUrl: 'imageUrl 2',
    thumbnailUrl: 'thumbnailUrl 2',
    description: 'description 2'
  }
]

const mockProduct: IProduct = {
  id: 1,
  name: 'Name',
  price: 1,
  imageUrl: 'imageUrl',
  thumbnailUrl: 'thumbnailUrl',
  description: 'description'
}

// const mockProductId = 1

describe('cartStore', () => {
  setActivePinia(createPinia())

  const cartStore = useCartStore()
  const productsStore = useProductsStore()

  productsStore.categoryProducts = mockProducts
  productsStore.individualProduct = mockProduct

  beforeEach(() => {
    cartStore.cartProducts = []
  })

  it('Adds product to cart', () => {
    cartStore.addProductToCart(mockProduct)

    expect(cartStore.cartProducts).toHaveLength(1)
    expect(cartStore.cartProducts[0]).toEqual(mockProduct)
  })

  it('Adds individual product to cart by id', () => {
    cartStore.addProductToCartById('individualProduct')

    expect(cartStore.cartProducts).toHaveLength(1)
    expect(cartStore.cartProducts).toEqual([mockProduct])
  })

  it('Adds category product to cart by id', () => {
    cartStore.addProductToCartById('categoryProducts', mockProducts[0].id)

    expect(cartStore.cartProducts).toHaveLength(1)
    expect(cartStore.cartProducts[0]).toEqual(mockProducts[0])
  })

  it('Adds category product to cart by id', () => {
    cartStore.addProductToCartById('categoryProducts', mockProducts[0].id)

    expect(cartStore.cartProducts).toHaveLength(1)
    expect(cartStore.cartProducts[0]).toEqual(mockProducts[0])
  })
})
