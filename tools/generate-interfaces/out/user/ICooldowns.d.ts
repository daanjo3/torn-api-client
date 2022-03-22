import { ISelection } from "../ISelection";
export interface ICooldowns extends ISelection {
  cooldowns: Cooldowns;
}
interface Cooldowns {
  drug: number;
  medical: number;
  booster: number;
}