import React, {
  createContext,
  useEffect,
  useState,
  FunctionComponent,
  Dispatch,
  SetStateAction,
} from 'react';

export interface PlayerIds {
  id: string;
  playerNum: number;
}

interface ContextProps {
  useReset: [boolean, Dispatch<SetStateAction<boolean>>];
  usePlayerList: [PlayerIds[], Dispatch<SetStateAction<PlayerIds[]>>];
  onReset: (cb: () => any) => any;
}

export const MainContext = createContext<Partial<ContextProps>>({});

export const MainProvider: FunctionComponent = ({ children }) => {
  const [playerList, setPayerList] = useState<PlayerIds[]>([]);
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
        usePlayerList: [playerList, setPayerList],
        useReset: [reset, setReset],
        onReset,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};
