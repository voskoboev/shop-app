import axios from 'axios'
import { API_BASE_URL, API_TOKEN } from '@/constants'
import { type IServerApi } from '@/types/api/IServerApi'

function useServerApi(baseUrl: string, authData: string): IServerApi {
  const api = axios.create({
    baseURL: baseUrl,
    headers: {
      Authorization: `Bearer ${authData}`
    }
  })

  const get = (path: string) => {
    return api.get(path)
  }

  return {
    get
  }
}

export const serverApi = useServerApi(API_BASE_URL, API_TOKEN)
