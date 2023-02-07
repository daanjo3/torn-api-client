import { Selection } from '../Selection'
export interface Refills extends Selection2 {
  refills: Refills
}
interface Refills {
  energy_refill_used: boolean
  nerve_refill_used: boolean
  token_refill_used: boolean
  special_refills_available: number
}
