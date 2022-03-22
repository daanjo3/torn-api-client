import { ISelection } from "../ISelection";
export interface IBattlestats extends ISelection {
  strength: number;
  speed: number;
  dexterity: number;
  defense: number;
  total: number;
  strength_modifier: number;
  defense_modifier: number;
  speed_modifier: number;
  dexterity_modifier: number;
  strength_info: string[];
  defense_info: string[];
  speed_info: string[];
  dexterity_info: string[];
}