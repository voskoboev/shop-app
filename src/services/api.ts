import axios from 'axios'
import { API_BASE_URL, API_TOKEN } from '@/constants'
import { type IServerApi } from '@/types/api/IServerApi'
import { type IClientApi } from '@/types/api/IClientApi'

export const serverApi = useServerApi(API_BASE_URL, API_TOKEN)
export const clientApi = useClientApi('lightSpeedItemKey')

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

export function useClientApi(itemKey: string): IClientApi {
  const setItem = (item: any) => {
    const stringifiedItem = JSON.stringify(item)
    localStorage.setItem(itemKey, stringifiedItem)
  }

  const getItem = () => {
    const loadedItem = localStorage.getItem(itemKey)

    if (!loadedItem) {
      return
    }

    return JSON.parse(loadedItem)
  }

  return {
    setItem,
    getItem
  }
}
