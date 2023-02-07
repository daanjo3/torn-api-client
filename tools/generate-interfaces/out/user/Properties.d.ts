import { Selection } from '../Selection'
export interface Properties extends Selection2 {
  properties: Properties
}
interface Properties {
  '3016701': _3016701
  '3201380': _3016701
  '3312043': _3016701
  '3317336': _3016701
  '3330091': _3016701
  '3987470': _3016701
  '3987471': _3016701
  '3987477': _3016701
  '4016524': _3016701
  '4164131': _3016701
  '4352348': _3016701
}
interface _3016701 {
  owner_id: number
  property_type: number
  property: string
  status: string
  happy: number
  upkeep: number
  staff_cost: number
  cost: number
  marketprice: number
  modifications: Modifications
  staff: Staff
  rented: any[]
}
interface Staff {
  maid: number
  guard: number
  pilot: number
  butler: number
  doctor: number
}
interface Modifications {
  interior: number
  hot_tub: number
  sauna: number
  pool: number
  open_bar: number
  shooting_range: number
  vault: number
  medical_facility: number
  airstrip: number
  yacht: number
}
