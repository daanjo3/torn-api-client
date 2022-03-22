import { ISelection } from "../ISelection";
export interface ICrimes extends ISelection {
  criminalrecord: Criminalrecord;
}
interface Criminalrecord {
  selling_illegal_products: number;
  theft: number;
  auto_theft: number;
  drug_deals: number;
  computer_crimes: number;
  murder: number;
  fraud_crimes: number;
  other: number;
  total: number;
}