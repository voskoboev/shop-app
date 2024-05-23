import { type Ref } from 'vue'

export interface IUseFetchParams {
  isLoadedStatus: Ref<boolean> | null
  isErrorStatus: Ref<boolean> | null
  handler: (...args: any[]) => Promise<any>
  path: string
  errorMessage: string
}
