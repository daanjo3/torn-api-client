import { ISelection } from "../ISelection";

export interface IAmmo extends ISelection {
  ammo: {
    ammoID: number;
    typeID: number;
    size: string;
    type: string;
    quantity: number;
    equipped: number;
  }[];
}
