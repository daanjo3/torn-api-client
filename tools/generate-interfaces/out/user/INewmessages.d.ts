import { ISelection } from "../ISelection";
export interface INewmessages extends ISelection {
  messages: Messages;
  player_id: number;
}
interface Messages {
}