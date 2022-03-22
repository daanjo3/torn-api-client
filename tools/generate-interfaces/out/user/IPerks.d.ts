import { ISelection } from "../ISelection";
export interface IPerks extends ISelection {
  job_perks: string[];
  property_perks: string[];
  stock_perks: string[];
  merit_perks: string[];
  education_perks: string[];
  enhancer_perks: string[];
  company_perks: string[];
  faction_perks: string[];
  book_perks: any[];
}