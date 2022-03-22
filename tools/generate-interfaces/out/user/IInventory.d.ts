import { ISelection } from "../ISelection";
export interface IInventory extends ISelection {
  inventory: Inventory[];
}
interface Inventory {
  ID: number;
  name: string;
  type: string;
  quantity: number;
  equipped: number;
  market_price: number;
}