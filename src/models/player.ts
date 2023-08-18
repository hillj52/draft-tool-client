import { Position } from './position';

export interface Player {
  id: string;
  name: string;
  team: string;
  position: Position;
  price: number;
  value: number;
  byeWeek: number;
  drafted: boolean;
}
