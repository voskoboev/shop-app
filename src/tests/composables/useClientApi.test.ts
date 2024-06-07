import { useClientApi } from '@/composables/api/useClientApi'
import { describe, it, expect, vi } from 'vitest'
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
const mockItemKey = 'mockKey'

describe('useClientApi', () => {
  vi.mock('localStorage')

  const clientApi = useClientApi(mockItemKey)

  it('Should set item in localStorage', () => {
    clientApi.setItem(mockProducts)
    const receivedItem = localStorage.getItem(mockItemKey)

    expect(receivedItem).toEqual(JSON.stringify(mockProducts))
  })

  it('Should get item from localStorage', () => {
    localStorage.setItem(mockItemKey, JSON.stringify(mockProducts))
    const receivedItem = clientApi.getItem()

    expect(receivedItem).toEqual(mockProducts)
  })
})
