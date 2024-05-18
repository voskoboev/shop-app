import { type IUseFetchParams } from '@/types/composables/IUseFetchParams'

export async function useFetch({
  loadingStatus,
  handler,
  path,
  stateData,
  errorMessage
}: IUseFetchParams) {
  try {
    loadingStatus.value = false
    const res = await handler(path)

    console.log(`${path} data`, res.data.items)

    stateData.value = res.data.items
    loadingStatus.value = true
  } catch (err: any) {
    console.error(`${errorMessage}: ${err.message}`)
  }
}
