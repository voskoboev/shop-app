import { type IClientApi } from '@/types/api/IClientApi'
import { type IProduct } from '@/types/products/IProduct'

export function useClientApi(itemKey: string): IClientApi {
  const setItem = (item: IProduct[]) => {
    const stringifiedItem = JSON.stringify(item)

    localStorage.setItem(itemKey, stringifiedItem)
  }

  const getItem = () => {
    const loadedItem = localStorage.getItem(itemKey)

    if (loadedItem) {
      return JSON.parse(loadedItem)
    }
  }

  return {
    setItem,
    getItem
  }
}
