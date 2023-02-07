import type { Selection } from "../Selection";

export interface AttacksFull extends Selection {
  attacks: {
    [attackId: string]: {
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
    };
  };
}
