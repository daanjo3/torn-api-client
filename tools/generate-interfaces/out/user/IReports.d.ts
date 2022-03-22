import { ISelection } from "../ISelection";
export interface IReports extends ISelection {
  reports: Report2[];
}
interface Report2 {
  id: string;
  user_id: number;
  target: number;
  type: string;
  report: Report;
  timestamp: number;
}
interface Report {
  speed?: number;
  dexterity?: number;
  total_battlestats?: number;
  total_workstats: number;
  strength?: number;
  defense?: number;
  manual_labor?: number;
  intelligence?: number;
  endurance?: number;
}