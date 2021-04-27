import { FormatTypes } from './Formats';

export type TypeChangeName = 'CHANGE_NAME';
export type TypeChangeNumValue = FormatTypes | 'CHANGE_LIFE';

export type ChangeNameAction = {
  type: TypeChangeName;
  payload: string;
};

export type ChangeNumAction = {
  type: TypeChangeNumValue;
  payload: number;
};

type Reset = {
  type: 'RESET';
  // payload: undefined;
};

export type Action = ChangeNameAction | ChangeNumAction | Reset;
export type PlayerActionType = TypeChangeName | TypeChangeNumValue | 'RESET';
