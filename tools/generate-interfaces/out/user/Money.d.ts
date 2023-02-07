import { Selection } from '../Selection'
export interface Money extends Selection {
  points: number
  cayman_bank: number
  vault_amount: number
  company_funds: number
  daily_networth: number
  money_onhand: number
  city_bank: Citybank
}
interface Citybank {
  amount: number
  time_left: number
}
