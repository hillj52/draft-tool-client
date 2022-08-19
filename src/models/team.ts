import { Player } from './player';

export interface Team {
  id: string;
  owner: string;
  name: string;
  money: number;
  qb: Player;
  rb1: Player;
  rb2: Player;
  wr1: Player;
  wr2: Player;
  flex: Player;
  op: Player;
  te: Player;
  k: Player;
  dst: Player;
  bench: Player[];
}
