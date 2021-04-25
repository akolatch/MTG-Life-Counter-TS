import React, { useState, ReactElement, useRef } from 'react';
import { StyleSheet, View } from 'react-native';
import { FormatTypes } from '../../../types';
import { Title } from '../../components/Title';
import { FormatSelector } from './components/FormatSelector';
import { NumPlayerSelector } from './components/NumPlayerSelector';

export const Landing = (): ReactElement => {
  const [format, setFormat] = useState<FormatTypes>('2_PLAYER');

  const [showNumPlayer, setShowNumPlayer] = useState(false);
  const [startGame, setStartGame] = useState(false);

  const firstRender = useRef(true);

  const select = (format: FormatTypes): void => {
    setFormat(format);
    setShowNumPlayer(true);
  };

  const close = (): void => {
    setShowNumPlayer(false);
    setStartGame(true);
  };

  return (
    <View style={styles.container}>
      <Title textValue='LIFE COUNTER' />
      <FormatSelector select={select} />
      {showNumPlayer && <NumPlayerSelector close={close} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    paddingTop: 20,
    // alignContent: 'space-between',
  },
});
