import { type Ref } from 'vue'

export interface IUseFetchParams {
  loadingStatus: Ref<boolean> | null | undefined
  handler: (...args: any[]) => Promise<any>
  path: string
  errorMessage: string
}
