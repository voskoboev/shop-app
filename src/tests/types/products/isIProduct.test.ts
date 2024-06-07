import { describe, it, expect } from 'vitest'
import { isIProduct } from '@/types/products/isIProduct'
import { type IProduct } from '@/types/products/IProduct'

describe('isIProduct', () => {
  it('Should return true if param has valid data', () => {
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

  it('Should return false if param has invalid data id type', () => {
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

  it('Should return false if param has invalid data name type', () => {
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

  it('Should return false if param has invalid data price type', () => {
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

  it('Should return false if param has invalid data imageUrl type', () => {
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

  it('Should return false if param has invalid data thumbnailUrl type', () => {
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

  it('Should return false if param has invalid data description type', () => {
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

  it('Should return false if param has less properties', () => {
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
