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
  const setItem = (item: string) => {
    localStorage.setItem(itemKey, item)
  }

  const getItem = () => {
    return localStorage.getItem(itemKey)
  }

  const deleteItem = () => {
    localStorage.removeItem(itemKey)
  }

  return {
    setItem,
    getItem,
    deleteItem
  }
}

// class ServerApi implements IServerApi {
//   private readonly api: AxiosInstance

//   constructor(baseUrl: string, authData: string) {
//     this.api = axios.create({
//       baseURL: baseUrl,
//       headers: {
//         Authorization: `Bearer ${authData}`
//       }
//     })
//   }

//   get(path: string) {
//     return this.api.get(path)
//   }
// }

// export const serverApi = new ServerApi(API_BASE_URL, API_TOKEN)

// class ClientApi implements IClientApi {
//   constructor(private readonly itemKey: string) {}

//   public setClientItem = (item: string) => {
//     localStorage.setItem(this.itemKey, item)
//   }

//   public getClientItem = () => {
//     return localStorage.getItem(this.itemKey)
//   }

//   public deleteClientItem = () => {
//     localStorage.removeItem(this.itemKey)
//   }
// }

// export const clientApi = new ClientApi('lightSpeed')

// export interface IClientApi {
//   setClientItem: (item: string) => void;
//   getClientItem: () => string | null;
//   deleteClientItem: () => void;
// }
