import { Selection } from '../Selection'
export interface Stocks extends Selection2 {
  stocks: Stocks
}
interface Stocks {
  '9': _9
  '12': _12
  '25': _25
}
interface _25 {
  stock_id: number
  total_shares: number
  benefit: Dividend
  transactions: Transactions3
}
interface Transactions3 {
  '1368499': _5392271
}
interface _12 {
  stock_id: number
  total_shares: number
  transactions: Transactions2
}
interface Transactions2 {
  '4998620': _5392271
}
interface _9 {
  stock_id: number
  total_shares: number
  dividend: Dividend
  transactions: Transactions
}
interface Transactions {
  '5392271': _5392271
}
interface _5392271 {
  shares: number
  bought_price: number
  time_bought: number
}
interface Dividend {
  ready: number
  increment: number
  progress: number
  frequency: number
}
