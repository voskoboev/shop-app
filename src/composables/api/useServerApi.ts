import axios from 'axios'
import { type IServerApi } from '@/types/api/IServerApi'

export function useServerApi(baseUrl: string, authData: string): IServerApi {
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
