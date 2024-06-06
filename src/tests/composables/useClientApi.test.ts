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

const mockLocalStorage = () => {
  const store: Record<string, string> = {}

  return {
    getItem: (key: string) => store[key] || null,
    setItem: (key: string, value: string) => (store[key] = value)
  }
}

const mockLs = mockLocalStorage()
const mockItemKey = 'mockKey'

describe('useClientApi', () => {
  vi.stubGlobal('localStorage', mockLs)

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
