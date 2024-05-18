import { type Ref } from 'vue'

export interface IUseFetchParams {
  loadingStatus: Ref<boolean>
  handler: (...args: any[]) => Promise<any>
  path: string
  errorMessage: string
}
