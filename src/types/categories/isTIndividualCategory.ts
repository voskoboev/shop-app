import { type TIndividualCategory } from '@/types/categories/TIndividualCategory'

export const isTIndividualCategory = (data: any): data is TIndividualCategory => {
  return typeof data.name === 'string'
}
