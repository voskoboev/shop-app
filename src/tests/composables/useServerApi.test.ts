import { describe, it, expect, vi } from 'vitest'
import axios from 'axios'
import { useServerApi } from '@/composables/api/useServerApi'

const mockBaseUrl = 'https://api.com'
const mockAuthData = 'mockAuthToken'
const mockPath = '/api-path'
const mockResponse = { data: 'Mock data' }

const mockFetchArgs = {
  baseURL: mockBaseUrl,
  headers: {
    Authorization: `Bearer ${mockAuthData}`
  }
}

describe('useServerApi', () => {
  vi.mock('axios')

  axios.create = vi.fn().mockReturnValue({
    get: vi.fn()
  })
  
  const axiosInstance = axios.create()
  const serverApi = useServerApi(mockBaseUrl, mockAuthData)

  it('Should create axios instance with valid arguments', () => {
    expect(axios.create).toHaveBeenCalledWith(mockFetchArgs)
  })

  it('Should receive data with get method request', async () => {
    axiosInstance.get = vi.fn().mockResolvedValue(mockResponse)

    const res = await serverApi.get(mockPath)

    expect(axiosInstance.get).toHaveBeenCalledWith(mockPath)
    expect(res).toEqual(mockResponse)
  })
})
