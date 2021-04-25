import { Animated } from 'react-native';

export type FormatTypes = 'CLASSIC' | '2_HEADED_GIANT' | 'COMMANDER';

export type PlayerTAction =
  | FormatTypes
  | 'CHANGE_LIFE'
  | 'CHANGE_NAME'
  | 'RESET';

export type AnimationTuple = [Animated.Value, (...args: any[]) => void];
