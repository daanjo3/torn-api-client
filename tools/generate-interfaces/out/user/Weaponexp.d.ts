import { Selection } from '../Selection'
export interface Weaponexp extends Selection2 {
  weaponexp: Weaponexp[]
}
interface Weaponexp {
  itemID: number
  name: string
  exp: number
}
