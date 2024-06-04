import { describe, it, expect } from 'vitest'
import { type IProduct } from '@/types/products/IProduct'
import { isIProductArray } from '@/types/products/isIProductArray'

const mockValidProductArray: IProduct[] = [
  {
    id: 1,
    name: 'name 1',
    price: 1,
    imageUrl: 'imageUrl 1',
    thumbnailUrl: 'thumbnailUrl 1',
    description: 'description 1'
  },
  {
    id: 2,
    name: 'name 2',
    price: 2,
    imageUrl: 'imageUrl 2',
    thumbnailUrl: 'thumbnailUrl 2',
    description: 'description 2'
  }
]

describe('isIProduct', () => {
  it('Should return true if param has valid data', () => {
    expect(isIProductArray(mockValidProductArray)).toBe(true)
  })

  it('Should return false if param has invalid data object type', () => {
    const mockInvalidProductArray: any = {
      id: 1,
      name: 'name ',
      price: 1,
      imageUrl: 'imageUrl',
      thumbnailUrl: 'thumbnailUrl',
      description: 'description'
    }

    expect(isIProductArray(mockInvalidProductArray)).toBe(false)
  })

  it('Should return false if param has invalid data set type', () => {
    const mockInvalidProductArray: any = new Set(mockValidProductArray)

    expect(isIProductArray(mockInvalidProductArray)).toBe(false)
  })
})
