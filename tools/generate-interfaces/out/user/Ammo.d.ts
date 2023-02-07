import { Selection } from '../Selection'
export interface Ammo extends Selection2 {
  ammo: Ammo[]
}
interface Ammo {
  ammoID: number
  typeID: number
  size: string
  type: string
  quantity: number
  equipped: number
}
