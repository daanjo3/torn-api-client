import { ISelection } from "../ISelection";
export interface IHof extends ISelection {
  halloffame: Halloffame;
}
interface Halloffame {
  attacks: Attacks;
  battlestats: Attacks;
  busts: Attacks;
  defends: Attacks;
  networth: Attacks;
  offences: Attacks;
  revives: Attacks;
  traveled: Attacks;
  workstats: Attacks;
  level: Attacks;
  rank: Attacks;
  respect: Attacks;
}
interface Attacks {
  value: number;
  rank: number;
}