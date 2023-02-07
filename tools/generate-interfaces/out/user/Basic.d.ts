import { Selection } from '../Selection'
export interface Basic extends Selection {
  level: number
  gender: string
  player_id: number
  name: string
  status: Status
}
interface Status {
  description: string
  details: string
  state: string
  color: string
  until: number
}
