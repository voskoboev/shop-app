import { type IUseFetchParams } from '@/types/composables/IUseFetchParams'

export async function useFetch({ loadingStatus, handler, path, errorMessage }: IUseFetchParams) {
  let data: any

  try {
    loadingStatus.value = false
    const res = await handler(path)

    console.log(`useFetch data: ${path}`, res.data)

    data = await res.data
  } catch (err: any) {
    console.error(`${errorMessage}: ${err.message}`)
  } finally {
    loadingStatus.value = true
  }

  return data
}
