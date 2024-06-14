import { describe, it, expect, vi, beforeEach } from 'vitest'
import { ref } from 'vue'
import { useFetch } from '@/composables/api/useFetch'
import { type Ref } from 'vue'
import { type IUseFetchParams } from '@/types/composables/IUseFetchParams'

const mockPath = '/api-path'
const mockErrorMessage = 'Fetch error'
const mockFetchedData = { data: 'Mock data' }
const mockError = new Error('Error')

describe('useFetch', () => {
  const mockHandler = vi.fn()

  let mockIsLoadedStatus: Ref<false>
  let mockIsErrorStatus: Ref<false>
  let mockArgs: IUseFetchParams

  beforeEach(() => {
    mockIsLoadedStatus = ref(false)
    mockIsErrorStatus = ref(false)

    mockArgs = {
      isLoadedStatus: mockIsLoadedStatus,
      isErrorStatus: mockIsErrorStatus,
      handler: mockHandler,
      path: mockPath,
      errorMessage: mockErrorMessage
    }
  })

  it('Should fetch data', async () => {
    mockHandler.mockResolvedValue(mockFetchedData)
    const fetchedData = await useFetch(mockArgs)

    expect(mockHandler).toHaveBeenCalledWith(mockPath)
    expect(fetchedData).not.toBeUndefined()
  })

  it('Should change the loading status to true', async () => {
    await useFetch(mockArgs)

    expect(mockIsLoadedStatus.value).toBe(true)
  })

  it('Should leave the unchanged error status if there is not an error', async () => {
    await useFetch(mockArgs)

    expect(mockIsErrorStatus.value).toBe(false)
  })

  it('Should change the error status if there is an error', async () => {
    mockHandler.mockRejectedValue(mockError)
    await useFetch(mockArgs)

    expect(mockIsErrorStatus.value).toBe(true)
  })
})
