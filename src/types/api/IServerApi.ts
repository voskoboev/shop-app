import { type AxiosResponse } from 'axios'

export interface IServerApi {
  get: (path: string) => Promise<AxiosResponse<any>>
}
