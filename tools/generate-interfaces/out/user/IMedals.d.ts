import { ISelection } from "../ISelection";
export interface IMedals extends ISelection {
  medals_awarded: number[];
  medals_time: number[];
}