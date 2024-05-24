import { type TIndividualCategory } from '@/types/categories/TIndividualCategory'

export const isTIndividualCategory = (data: TIndividualCategory): data is TIndividualCategory => {
  return typeof data.name === 'string'
}
