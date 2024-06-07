import { describe, it, expect } from 'vitest'
import { isICategory } from '@/types/categories/isICategory'
import { type ICategory } from '@/types/categories/ICategory'

describe('isICategory', () => {
  it('Should return true if param has valid data', () => {
    const mockValidCategory: ICategory = {
      id: 1,
      name: 'name',
      thumbnailUrl: 'thumbnailUrl'
    }

    expect(isICategory(mockValidCategory)).toBe(true)
  })

  it('Should return false if param has invalid data id type', () => {
    const mockInvalidCategory: any = {
      id: '1',
      name: 'name',
      thumbnailUrl: 'thumbnailUrl'
    }

    expect(isICategory(mockInvalidCategory)).toBe(false)
  })

  it('Should return false if param has invalid data name type', () => {
    const mockInvalidCategory: any = {
      id: 1,
      name: 1,
      thumbnailUrl: 'thumbnailUrl'
    }

    expect(isICategory(mockInvalidCategory)).toBe(false)
  })

  it('Should return false if param is invalid data thumbnailUrl type', () => {
    const mockInvalidCategory: any = {
      id: 1,
      name: 'name',
      thumbnailUrl: 1
    }

    expect(isICategory(mockInvalidCategory)).toBe(false)
  })

  it('Should return false if param has less properties', () => {
    const mockInvalidCategory: any = {
      id: 1,
      name: 'name'
    }

    expect(isICategory(mockInvalidCategory)).toBe(false)
  })
})
