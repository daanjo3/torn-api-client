import { Selection } from '../Selection'
export interface Profile extends Selection {
  rank: string
  level: number
  gender: string
  property: string
  signup: string
  awards: number
  friends: number
  enemies: number
  forum_posts: number
  karma: number
  age: number
  role: string
  donator: number
  player_id: number
  name: string
  property_id: number
  competition?: any
  revivable: number
  life: Life
  status: Status
  job: Job
  faction: Faction
  married: Married
  basicicons: Basicicons
  states: States
  last_action: Lastaction
}
interface Lastaction {
  status: string
  timestamp: number
  relative: string
}
interface States {
  hospital_timestamp: number
  jail_timestamp: number
}
interface Basicicons {
  icon6: string
  icon4: string
  icon8: string
  icon27: string
  icon9: string
}
interface Married {
  spouse_id: number
  spouse_name: string
  duration: number
}
interface Faction {
  position: string
  faction_id: number
  days_in_faction: number
  faction_name: string
  faction_tag: string
}
interface Job {
  position: string
  company_id: number
  company_name: string
  company_type: number
}
interface Status {
  description: string
  details: string
  state: string
  color: string
  until: number
}
interface Life {
  current: number
  maximum: number
  increment: number
  interval: number
  ticktime: number
  fulltime: number
}
