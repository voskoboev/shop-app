export interface IClientApi {
  setItem: (item: string) => void
  getItem: (item: string) => string | null
  deleteItem: (item: string) => void
}
