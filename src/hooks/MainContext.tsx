import React, {
  createContext,
  useEffect,
  useState,
  FunctionComponent,
} from 'react';
import { FormatTypes } from '../lib/types';

export interface IPlayerIds {
  id: string;
  playerNum: number;
}

interface IContextProps {
  useFormats: [FormatTypes, (val: FormatTypes) => void];
  useReset: [boolean, (val: boolean) => void];
  usePlayerList: [IPlayerIds[], (arr: IPlayerIds[]) => void];
  onReset: (cb: () => void) => void;
}

export const MainContext = createContext<IContextProps>({
  useFormats: ['CLASSIC', (val) => {}],
  usePlayerList: [[], (val) => {}],
  useReset: [true, (val) => {}],
  onReset: (cb) => {},
});

export const MainProvider: FunctionComponent = ({ children }) => {
  const [format, setFormat] = useState<FormatTypes>('CLASSIC');
  const [playerList, setPlayerList] = useState<IPlayerIds[]>([]);
  const [reset, setReset] = useState(false);

  useEffect(() => {
    if (reset) {
      setReset(false);
    }
  }, [reset]);

  const onReset = (cb: () => any): void => {
    useEffect(() => {
      if (reset) {
        cb();
      }
    }, [reset]);
  };

  return (
    <MainContext.Provider
      value={{
        useFormats: [format, (val) => setFormat(val)],
        usePlayerList: [playerList, (val) => setPlayerList(val)],
        useReset: [reset, (val) => setReset(val)],
        onReset,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};
