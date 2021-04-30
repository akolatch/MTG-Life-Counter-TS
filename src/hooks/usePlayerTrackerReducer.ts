import { useReducer } from 'react';
import { PlayerState } from '../lib/Interfaces';
import { Action, ChangeNumAction, TypeChangeNumValue } from '../lib/types';

export const usePlayerTrackerReducer = () => {
  const reducer = (state: PlayerState, action: Action): PlayerState => {
    switch (action.type) {
      case 'CLASSIC':
        return {
          playerId: action.payload,
          name: '',
          placeholder: `Player${action.payload}`,
          lifeTotal: 20,
          startingLife: 20,
        };
      case '2_HEADED_GIANT':
        return {
          playerId: action.payload,
          name: '',
          placeholder: `Team${action.payload}`,
          lifeTotal: 30,
          startingLife: 30,
        };
      case 'COMMANDER':
        return {
          playerId: action.payload,
          name: '',
          placeholder: `Player${action.payload}`,
          lifeTotal: 40,
          startingLife: 40,
        };

      case 'CHANGE_LIFE':
        const lifeTotal = state.lifeTotal + action.payload;
        return { ...state, lifeTotal };
      case 'CHANGE_NAME':
        return { ...state, name: action.payload };
      case 'RESET':
        return { ...state, lifeTotal: state.startingLife };
      default:
        return state;
    }
  };

  const usePlayerReducer = useReducer(reducer, {
    playerId: 0,
    name: '',
    placeholder: '',
    lifeTotal: 20,
    startingLife: 40,
  });

  const dispatchNumAction = (type: TypeChangeNumValue, payload: number) => {
    usePlayerReducer[1]({
      type,
      payload,
    });
  };

  return { usePlayerReducer, dispatchNumAction };
};
