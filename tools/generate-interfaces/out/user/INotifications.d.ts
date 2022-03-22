import { ISelection } from "../ISelection";
export interface INotifications extends ISelection {
  notifications: Notifications;
}
interface Notifications {
  messages: number;
  events: number;
  awards: number;
  competition: number;
}