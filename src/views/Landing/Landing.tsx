import React, {
  useState,
  useEffect,
  ReactElement,
  useRef,
  useContext,
} from 'react';
import { View } from 'react-native';
import { FormatTypes } from '../../../types';
import { Title } from '../../components/Title';
import { MainContext } from '../../hooks/MainContext';
import { FormatSelector } from './components/FormatSelector';

export const Landing = (): ReactElement => {
  const {
    usePlayerList: [playerList, setPayerList],
  } = useContext(MainContext);

  const [format, setFormat] = useState<FormatTypes>('2_PLAYER');

  const [showModal, setShowModal] = useState(false);
  const [startGame, setStartGame] = useState(false);

  const firstRender = useRef(true);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    if (playerList.length > 0) {
      setStartGame(true);
    }
  }, [playerList]);

  const select = (format: FormatTypes) => {
    setFormat(format);
    if (format === 'COMMANDER') {
      setShowModal(true);
    } else {
      setPayerList([
        { id: 'p1', playerNum: 1 },
        { id: 'p2', playerNum: 2 },
      ]);
    }
  };

  return (
    <View>
      <Title textValue='LIFE COUNTER' />
      <FormatSelector select={select} />
    </View>
  );
};
