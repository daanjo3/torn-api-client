import { ISelection } from "../ISelection";
export interface IRefills extends ISelection {
  refills: Refills;
}
interface Refills {
  energy_refill_used: boolean;
  nerve_refill_used: boolean;
  token_refill_used: boolean;
  special_refills_available: number;
}