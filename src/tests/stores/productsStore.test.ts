import { describe, it, expect, vi, beforeEach } from 'vitest'
import { setActivePinia } from 'pinia'
import { createTestingPinia } from '@pinia/testing'
import { useProductsStore } from '@/stores/productsStore'
import { serverApi } from '@/api/serverApi'
import { type Store } from 'pinia'
import { type IProductsData } from '@/types/products/IProductsData'
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

describe('productsStore', () => {
  let productsStore: Store<any, any>

  beforeEach(() => {
    const testingPinia = createTestingPinia({
      stubActions: false
    })

    setActivePinia(testingPinia)

    vi.mock('serverApi')

    productsStore = useProductsStore()
  })

  it('Should fetch all products and checks error status', async () => {
    const mockProductsData: IProductsData = {
      items: mockProducts
    }
    const path = '/products?responseFields=items(id,name,price,imageUrl,thumbnailUrl,description)'

    serverApi.get = vi.fn().mockResolvedValue({ data: mockProductsData })
    await productsStore.fetchAllProducts()

    expect(serverApi.get).toHaveBeenCalledWith(path)
    expect(productsStore.allProducts).toEqual(mockProductsData.items)
    expect(productsStore.isAllProductsError).toBe(false)
  })

  it('Should fetch category products and checks error status', async () => {
    const mockCategoryProductsData: IProductsData = {
      items: mockProducts
    }
    const categoryId = '1'
    const path = `/products?responseFields=items(id,name,price,imageUrl,thumbnailUrl,description)&category=${categoryId}`

    serverApi.get = vi.fn().mockResolvedValue({ data: mockCategoryProductsData })
    await productsStore.fetchCategoryProducts(categoryId)

    expect(serverApi.get).toHaveBeenCalledWith(path)
    expect(productsStore.categoryProducts).toEqual(mockCategoryProductsData.items)
    expect(productsStore.isCategoryProductsError).toBe(false)
  })

  it('Should fetch individual product and check error status', async () => {
    const mockProduct: IProduct = mockProducts[0]
    const productId = '1'
    const path = `/products/${productId}?responseFields=id,name,price,imageUrl,thumbnailUrl,description`

    serverApi.get = vi.fn().mockResolvedValue({ data: mockProduct })
    await productsStore.fetchIndividualProduct(productId)

    expect(serverApi.get).toHaveBeenCalledWith(path)
    expect(productsStore.individualProduct).toEqual(mockProduct)
    expect(productsStore.isIndividualProductsError).toBe(false)
  })

  it('Should reset all products state values', () => {
    productsStore.isAllProductsError = true
    productsStore.resetAllProductsStateValues()

    expect(productsStore.allProducts).toEqual([])
    expect(productsStore.isAllProductsError).toBe(false)
  })

  it('Should reset category products state values', () => {
    productsStore.isCategoryProductsError = true
    productsStore.resetCategoryProductsValues()

    expect(productsStore.categoryProducts).toEqual([])
    expect(productsStore.isCategoryProductsError).toBe(false)
  })

  it('Should reset individual product state values', () => {
    productsStore.isIndividualProductsError = true
    productsStore.resetIndividualProductValues()

    expect(productsStore.individualProduct).toEqual({})
    expect(productsStore.isIndividualProductsError).toBe(false)
  })
})
