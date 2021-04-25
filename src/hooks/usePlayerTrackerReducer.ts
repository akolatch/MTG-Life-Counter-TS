import { useReducer } from 'react';
import { PlayerTAction } from '../../types';

interface IState {
  playerId: number;
  name: string;
  placeholder: string;
  lifeTotal: number;
  startingLife: number;
}

interface IAction {
  type: PlayerTAction;
  numPayload: number;
  stringPayload: string;
}

export const usePlayerTrackerReducer = () => {
  const reducer = (state: IState, action: IAction): IState => {
    switch (action.type) {
      case '2_PLAYER':
        return {
          playerId: action.numPayload,
          name: '',
          placeholder: `Player ${action.numPayload}`,
          lifeTotal: 20,
          startingLife: 20,
        };
      case '2_HEADED_GIANT':
        return {
          playerId: action.numPayload,
          name: '',
          placeholder: `Team ${action.numPayload}`,
          lifeTotal: 30,
          startingLife: 30,
        };
      case 'COMMANDER':
        return {
          playerId: action.numPayload,
          name: '',
          placeholder: `Player ${action.numPayload}`,
          lifeTotal: 40,
          startingLife: 40,
        };

      case 'CHANGE_LIFE':
        const lifeTotal = state.lifeTotal + action.numPayload;
        return { ...state, lifeTotal };
      case 'CHANGE_NAME':
        return { ...state, name: action.stringPayload };
      case 'RESET':
        return { ...state, lifeTotal: state.startingLife };
      default:
        return state;
    }
  };

  const playerReducer = useReducer(reducer, {
    playerId: 0,
    name: '',
    placeholder: '',
    lifeTotal: 20,
    startingLife: 40,
  });
  return playerReducer;
};
