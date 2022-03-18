import type { IUserData } from "./common";

export interface IAmmo extends IUserData {
  ammo: {
    ammoID: number;
    typeID: number;
    size: string;
    type: string;
    quantity: number;
    equipped: number;
  }[];
}

export interface IAttacks extends IUserData {
  attacks: {
    [attackId: string]: {
      code: string;
      timestamp_started: number;
      timestamp_ended: number;
      attacker_id: number;
      attacker_name: string;
      attacker_faction: number;
      attacker_factionname: string;
      defender_id: number;
      defender_name: string;
      defender_faction: number;
      defender_factionname: string;
      result: string;
      stealthed: number;
      respect: number;
      chain: number;
      raid: number;
      ranked_war: number;
      respect_gain: number;
      respect_loss: number;
      modifiers: {
        fair_fight: number;
        war: number;
        retaliation: number;
        group_attack: number;
        overseas: number;
        chain_bonus: number;
      };
    };
  };
}

export interface IAttacksFull {
  code: string;
  timestamp_started: number;
  timestamp_ended: number;
  attacker_id: number;
  attacker_faction: number;
  defender_id: number;
  defender_faction: number;
  result: string;
  stealthed: number;
  respect: number;
}

