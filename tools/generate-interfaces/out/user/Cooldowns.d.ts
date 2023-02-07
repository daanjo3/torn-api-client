import { Selection } from '../Selection'
export interface Cooldowns extends Selection2 {
  cooldowns: Cooldowns
}
interface Cooldowns {
  drug: number
  medical: number
  booster: number
}
