import { Position } from './position';

export interface Player {
  id: string;
  overallRank: number;
  tier: number;
  name: string;
  team: string;
  position: Position;
  positionalRank: number;
  strengthOfSchedule: number;
  pointsAboveProjection: number;
  gamesAboveProjection: string;
  price: number;
  value: number;
  byeWeek: number;
  drafted: boolean;
}
