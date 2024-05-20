import { type IClientApi } from '@/types/api/IClientApi'
import { type IProduct } from '@/types/products/IProduct'

function useClientApi(itemKey: string): IClientApi {
  const setItem = (item: IProduct[]) => {
    const stringifiedItem = JSON.stringify(item)

    localStorage.setItem(itemKey, stringifiedItem)
  }

  const getItem = () => {
    const loadedItem = localStorage.getItem(itemKey)

    if (!loadedItem) {
      return
    }

    return JSON.parse(loadedItem)
  }

  return {
    setItem,
    getItem
  }
}

export const clientApi = useClientApi('lightSpeedItemKey')
