import { FormatTypes } from './Formats';

export type PlayerAction =
  | FormatTypes
  | 'CHANGE_LIFE'
  | 'CHANGE_NAME'
  | 'RESET';
