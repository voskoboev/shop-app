import { describe, it, expect, vi } from 'vitest'
import { ref } from 'vue'
import { useFetch } from '@/composables/api/useFetch'
import { type IUseFetchParams } from '@/types/composables/IUseFetchParams'

const mockPath = '/mock-api-path'
const mockErrorMessage = 'Mock fetch error'
const mockFetchedData = { data: 'Mock data' }
const error = new Error('Mock error')

describe('useFetch', async () => {
  const mockIsLoadedStatus = ref(false)
  const mockIsErrorStatus = ref(false)
  const mockHandler = vi.fn()

  const mockArgs: IUseFetchParams = {
    isLoadedStatus: mockIsLoadedStatus,
    isErrorStatus: mockIsErrorStatus,
    handler: mockHandler,
    path: mockPath,
    errorMessage: mockErrorMessage
  }

  mockHandler.mockResolvedValue(mockFetchedData)
  const fetchedData = await useFetch(mockArgs)

  it('Should fetch data', () => {
    expect(mockHandler).toHaveBeenCalledWith(mockPath)
    expect(fetchedData).not.toBeUndefined()
  })

  it('Should change loading status to true', () => {
    expect(mockIsLoadedStatus.value).toBe(true)
  })

  it('Should leave unchanged error status if there is no error', () => {
    expect(mockIsErrorStatus.value).toBe(false)
  })

  it('Should change error status if there is error', async () => {
    mockHandler.mockRejectedValue(error)
    await useFetch(mockArgs)

    expect(mockIsErrorStatus.value).toBe(true)
  })
})
