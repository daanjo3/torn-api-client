import { ISelection } from "../ISelection";
export interface IHonors extends ISelection {
  honors_awarded: number[];
  honors_time: number[];
}