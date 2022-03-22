import { ISelection } from "../ISelection";
export interface IDiscord extends ISelection {
  discord: Discord;
}
interface Discord {
  userID: number;
  discordID: string;
}