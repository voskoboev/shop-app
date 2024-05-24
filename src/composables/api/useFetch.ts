import { type IUseFetchParams } from '@/types/composables/IUseFetchParams'

export async function useFetch({
  isLoadedStatus,
  isErrorStatus,
  handler,
  path,
  errorMessage
}: IUseFetchParams) {
  let data

  try {
    if (isLoadedStatus) {
      isLoadedStatus.value = false
    }

    const res = await handler(path)

    data = await res.data
  } catch (err: any) {
    if (isErrorStatus) {
      isErrorStatus.value = true
    }

    console.error(`${errorMessage}: ${err.message}`)
  } finally {
    if (isLoadedStatus) {
      isLoadedStatus.value = true
    }
  }

  return data
}
