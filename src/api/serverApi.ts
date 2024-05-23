import { API_BASE_URL, API_TOKEN } from '@/constants'
import { useServerApi } from '@/composables/api/useServerApi'

export const serverApi = useServerApi(API_BASE_URL, API_TOKEN)
