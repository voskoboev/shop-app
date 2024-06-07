import { describe, it, expect } from 'vitest'
import { isICategoryArray } from '@/types/categories/isICategoryArray'
import { type ICategory } from '@/types/categories/ICategory'

const mockValidCategoryArray: ICategory[] = [
  {
    id: 1,
    name: 'name 1',
    thumbnailUrl: 'thumbnailUrl 1'
  },
  {
    id: 2,
    name: 'name 2',
    thumbnailUrl: 'thumbnailUrl 2'
  }
]

describe('isICategoryArray', () => {
  it('Should return true if param has valid data', () => {
    expect(isICategoryArray(mockValidCategoryArray)).toBe(true)
  })

  it('Should return false if param has invalid data object type', () => {
    const mockInvalidCategoryArray: any = {
      id: 1,
      name: 'name',
      thumbnailUrl: 'thumbnailUrl'
    }

    expect(isICategoryArray(mockInvalidCategoryArray)).toBe(false)
  })

  it('Should return false if param has invalid data set type', () => {
    const mockInvalidCategoryArray: any = new Set(mockValidCategoryArray)

    expect(isICategoryArray(mockInvalidCategoryArray)).toBe(false)
  })
})
