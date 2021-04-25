export type FormatTypes = '2_PLAYER' | '2_HEADED_GIANT' | 'COMMANDER';

export type PlayerTAction =
  | FormatTypes
  | 'CHANGE_LIFE'
  | 'CHANGE_NAME'
  | 'RESET';
