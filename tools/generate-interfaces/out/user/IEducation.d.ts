import { ISelection } from "../ISelection";
export interface IEducation extends ISelection {
  education_current: number;
  education_timeleft: number;
  education_completed: number[];
}