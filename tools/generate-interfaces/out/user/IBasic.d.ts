import { ISelection } from "../ISelection";
export interface IBasic extends ISelection {
  level: number;
  gender: string;
  player_id: number;
  name: string;
  status: Status;
}
interface Status {
  description: string;
  details: string;
  state: string;
  color: string;
  until: number;
}