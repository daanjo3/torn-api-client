import { Selection } from '../Selection'
export interface Display extends Selection2 {
  display: Display[]
}
interface Display {
  ID: number
  name: string
  type: string
  quantity: number
  circulation: number
  market_price: number
}
