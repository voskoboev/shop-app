import { describe, it, expect, vi, beforeEach } from 'vitest'
import axios from 'axios'
import { useServerApi } from '@/composables/api/useServerApi'
import { type AxiosInstance } from 'axios'
import { type IServerApi } from '@/types/api/IServerApi'

const mockBaseUrl = 'https://api.com'
const mockAuthData = 'mockAuthToken'
const mockPath = '/mock-api-path'
const mockResponse = { data: 'Mock data' }

const mockFetchArgs = {
  baseURL: mockBaseUrl,
  headers: {
    Authorization: `Bearer ${mockAuthData}`
  }
}

describe('useServerApi', () => {
  let axiosInstance: AxiosInstance
  let serverApi: IServerApi

  beforeEach(() => {
    vi.mock('axios')

    axios.create = vi.fn().mockReturnValue({
      get: vi.fn()
    })

    axiosInstance = axios.create()
    serverApi = useServerApi(mockBaseUrl, mockAuthData)
  })

  it('Should create an axios instance with valid arguments', () => {
    expect(axios.create).toHaveBeenCalledWith(mockFetchArgs)
  })

  it('Should receive data with the get method request', async () => {
    axiosInstance.get = vi.fn().mockResolvedValue(mockResponse)

    const res = await serverApi.get(mockPath)

    expect(axiosInstance.get).toHaveBeenCalledWith(mockPath)
    expect(res).toEqual(mockResponse)
  })
})
