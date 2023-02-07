import { Selection } from '../Selection'
export interface Notifications extends Selection2 {
  notifications: Notifications
}
interface Notifications {
  messages: number
  events: number
  awards: number
  competition: number
}
