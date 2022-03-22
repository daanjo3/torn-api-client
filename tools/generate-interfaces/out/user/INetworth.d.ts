import { ISelection } from "../ISelection";
export interface INetworth extends ISelection {
  networth: Networth;
}
interface Networth {
  pending: number;
  wallet: number;
  bank: number;
  points: number;
  cayman: number;
  vault: number;
  piggybank: number;
  items: number;
  displaycase: number;
  bazaar: number;
  itemmarket: number;
  properties: number;
  stockmarket: number;
  auctionhouse: number;
  company: number;
  bookie: number;
  enlistedcars: number;
  loan: number;
  unpaidfees: number;
  total: number;
  parsetime: number;
}