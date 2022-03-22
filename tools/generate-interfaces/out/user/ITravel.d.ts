import { ISelection } from "../ISelection";
export interface ITravel extends ISelection {
  travel: Travel;
}
interface Travel {
  destination: string;
  method: string;
  timestamp: number;
  departed: number;
  time_left: number;
}