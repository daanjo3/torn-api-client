import { Selection } from '../Selection'
export interface Education extends Selection {
  education_current: number
  education_timeleft: number
  education_completed: number[]
}
