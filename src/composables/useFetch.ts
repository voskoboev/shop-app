import { type IUseFetchParams } from '@/types/composables/IUseFetchParams'

export async function useFetch({ loadingStatus, handler, path, errorMessage }: IUseFetchParams) {
  let data: any

  try {
    loadingStatus.value = false
    const res = await handler(path)

    console.log(`useFetch data: ${path}`, res.data)

    data = await res.data
    loadingStatus.value = true
  } catch (err: any) {
    console.error(`${errorMessage}: ${err.message}`)
  }

  return data
}
