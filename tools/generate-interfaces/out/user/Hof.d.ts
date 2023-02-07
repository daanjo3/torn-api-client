import { Selection } from '../Selection'
export interface Hof extends Selection {
  halloffame: Halloffame
}
interface Halloffame {
  attacks: Attacks
  battlestats: Attacks
  busts: Attacks
  defends: Attacks
  networth: Attacks
  offences: Attacks
  revives: Attacks
  traveltime: Attacks
  workstats: Attacks
  level: Attacks
  rank: Attacks
  respect: Attacks
}
interface Attacks {
  value: number
  rank: number
}
