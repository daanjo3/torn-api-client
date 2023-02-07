import { Selection } from "../Selection";

export interface IAmmo extends Selection {
  ammo: {
    ammoID: number;
    typeID: number;
    size: string;
    type: string;
    quantity: number;
    equipped: number;
  }[];
}
