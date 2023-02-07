import { Selection } from '../Selection'
export interface Perks extends Selection {
  faction_perks: string[]
  job_perks: string[]
  property_perks: string[]
  education_perks: string[]
  enhancer_perks: string[]
  book_perks: any[]
  stock_perks: string[]
  merit_perks: string[]
}
