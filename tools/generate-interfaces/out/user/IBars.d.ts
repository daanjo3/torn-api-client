import { ISelection } from "../ISelection";
export interface IBars extends ISelection {
  awake: number;
  awakemax: number;
  crimes: number;
  statstamp: number;
  crimesmax: number;
  happymax: number;
  maxlife: number;
  donater: number;
  factionID: number;
  propertyID: number;
  userID: number;
  server_time: number;
  happy: Happy;
  life: Happy;
  energy: Happy;
  nerve: Happy;
  chain: Chain;
}
interface Chain {
  current: number;
  maximum: number;
  timeout: number;
  modifier: number;
  cooldown: number;
}
interface Happy {
  current: number;
  maximum: number;
  increment: number;
  interval: number;
  ticktime: number;
  fulltime: number;
}