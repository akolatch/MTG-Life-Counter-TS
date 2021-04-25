import React, {
  createContext,
  useEffect,
  useState,
  FunctionComponent,
} from 'react';

export interface IPlayerIds {
  id: string;
  playerNum: number;
}

interface IContextProps {
  useReset: [boolean, (val: boolean) => void];
  usePlayerList: [IPlayerIds[], (arr: IPlayerIds[]) => void];
  onReset: (cb: () => void) => void;
}

export const MainContext = createContext<IContextProps>({
  usePlayerList: [[], (val) => {}],
  useReset: [true, (val) => {}],
  onReset: (cb) => {},
});

export const MainProvider: FunctionComponent = ({ children }) => {
  const [playerList, setPayerList] = useState<IPlayerIds[]>([]);
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
        usePlayerList: [playerList, (val) => setPayerList(val)],
        useReset: [reset, (val) => setReset(val)],
        onReset,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};
