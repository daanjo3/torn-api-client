import { Selection } from '../Selection'
export interface Inventory extends Selection2 {
  inventory: Inventory[]
}
interface Inventory {
  ID: number
  UID?: number
  name: string
  type: string
  equipped: number
  market_price: number
  quantity: number
}
