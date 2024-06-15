import { describe, it, expect, beforeEach } from 'vitest'
import { setActivePinia } from 'pinia'
import { createTestingPinia } from '@pinia/testing'
import { useCartStore } from '@/stores/cartStore'
import { type Store } from 'pinia'
import { type IProduct } from '@/types/products/IProduct'

const mockProduct: IProduct = {
  id: 1,
  name: 'Name',
  price: 1,
  imageUrl: 'imageUrl',
  thumbnailUrl: 'thumbnailUrl',
  description: 'description'
}

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

describe('cartStore', () => {
  let cartStore: Store<any, any>

  beforeEach(() => {
    const testingPinia = createTestingPinia({
      initialState: {
        cart: {
          cartProducts: []
        },
        products: {
          categoryProducts: mockProducts,
          individualProduct: mockProduct
        }
      },
      stubActions: false
    })

    setActivePinia(testingPinia)

    cartStore = useCartStore()
  })

  it('Adds a product to the cart', () => {
    cartStore.addProductToCart(mockProduct)

    expect(cartStore.cartProducts).toHaveLength(1)
    expect(cartStore.cartProducts[0]).toEqual(mockProduct)
  })

  it('Adds an individual product to the cart by id', () => {
    cartStore.addProductToCartById('individualProduct')

    expect(cartStore.cartProducts).toHaveLength(1)
    expect(cartStore.cartProducts).toEqual([mockProduct])
  })

  it('Adds a category product to the cart by id', () => {
    cartStore.addProductToCartById('categoryProducts', mockProducts[0].id)

    expect(cartStore.cartProducts).toHaveLength(1)
    expect(cartStore.cartProducts[0]).toEqual(mockProducts[0])
  })

  it('Adds a category product to the cart by id', () => {
    cartStore.addProductToCartById('categoryProducts', mockProducts[0].id)

    expect(cartStore.cartProducts).toHaveLength(1)
    expect(cartStore.cartProducts[0]).toEqual(mockProducts[0])
  })
})
