import { PlayerAction } from '../types';

export interface Action {
  type: PlayerAction;
  numPayload: number;
  stringPayload: string;
}
