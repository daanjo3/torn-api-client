import { ISelection } from "../ISelection";
export interface IStocks extends ISelection {
  stocks: Stocks;
}
interface Stocks {
  '25': _25;
}
interface _25 {
  stock_id: number;
  total_shares: number;
  benefit: Benefit;
  transactions: Transactions;
}
interface Transactions {
  '1368499': _1368499;
}
interface _1368499 {
  shares: number;
  bought_price: number;
  time_bought: number;
}
interface Benefit {
  ready: number;
  increment: number;
  progress: number;
  frequency: number;
}