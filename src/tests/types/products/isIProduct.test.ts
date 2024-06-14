import { describe, it, expect } from 'vitest'
import { isIProduct } from '@/types/products/isIProduct'
import { type IProduct } from '@/types/products/IProduct'

describe('isIProduct', () => {
  it('Should return true if a param has valid data', () => {
    const mockValidProduct: IProduct = {
      id: 1,
      name: 'name',
      price: 1,
      imageUrl: 'imageUrl',
      thumbnailUrl: 'thumbnailUrl',
      description: 'description'
    }

    expect(isIProduct(mockValidProduct)).toBe(true)
  })

  it('Should return false if a param has an invalid data id type', () => {
    const mockInvalidProduct: any = {
      id: '1',
      name: 'name',
      price: 1,
      imageUrl: 'imageUrl',
      thumbnailUrl: 'thumbnailUrl',
      description: 'description'
    }

    expect(isIProduct(mockInvalidProduct)).toBe(false)
  })

  it('Should return false if a param has an invalid data name type', () => {
    const mockInvalidProduct: any = {
      id: 1,
      name: 1,
      price: 1,
      imageUrl: 'imageUrl',
      thumbnailUrl: 'thumbnailUrl',
      description: 'description'
    }

    expect(isIProduct(mockInvalidProduct)).toBe(false)
  })

  it('Should return false if a param has an invalid data price type', () => {
    const mockInvalidProduct: any = {
      id: 1,
      name: 'name',
      price: '1',
      imageUrl: 'imageUrl',
      thumbnailUrl: 'thumbnailUrl',
      description: 'description'
    }

    expect(isIProduct(mockInvalidProduct)).toBe(false)
  })

  it('Should return false if a param has an invalid data imageUrl type', () => {
    const mockInvalidProduct: any = {
      id: 1,
      name: 'name',
      price: 1,
      imageUrl: 1,
      thumbnailUrl: 'thumbnailUrl',
      description: 'description'
    }

    expect(isIProduct(mockInvalidProduct)).toBe(false)
  })

  it('Should return false if a param has an invalid data thumbnailUrl type', () => {
    const mockInvalidProduct: any = {
      id: 1,
      name: 'name',
      price: 1,
      imageUrl: 'imageUrl',
      thumbnailUrl: 1,
      description: 'description'
    }

    expect(isIProduct(mockInvalidProduct)).toBe(false)
  })

  it('Should return false if a param has an invalid data description type', () => {
    const mockInvalidProduct: any = {
      id: 1,
      name: 'name',
      price: 1,
      imageUrl: 'imageUrl',
      thumbnailUrl: 'thumbnailUrl',
      description: 1
    }

    expect(isIProduct(mockInvalidProduct)).toBe(false)
  })

  it('Should return false if a param has deficiency properties', () => {
    const mockInvalidProduct: any = {
      id: 1,
      name: 'name',
      price: 1,
      imageUrl: 'imageUrl',
      thumbnailUrl: 'thumbnailUrl'
    }

    expect(isIProduct(mockInvalidProduct)).toBe(false)
  })
})
