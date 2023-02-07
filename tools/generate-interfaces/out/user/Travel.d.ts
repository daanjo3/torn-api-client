import { Selection } from '../Selection'
export interface Travel extends Selection2 {
  travel: Travel
}
interface Travel {
  destination: string
  method: string
  timestamp: number
  departed: number
  time_left: number
}
