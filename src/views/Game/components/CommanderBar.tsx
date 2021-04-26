import React, { ReactElement, useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { PlayerColorProps } from '../../../assets/Interfaces/PlayerColorProps';
import { colorList } from '../../../assets/static/colors';
import { MainContext } from '../../../hooks/MainContext';
import { PoisonTracker } from './PoisonTracker';

export const CommanderDMGList = ({ color }: PlayerColorProps): ReactElement => {
  const {
    usePlayerList: [playerList],
  } = useContext(MainContext);
  const playerCount = playerList.length;
  const opponentsColorList = colorList
    .slice(0, playerCount)
    .filter((value) => value !== color);
  return (
    <View style={styles.container}>
      {opponentsColorList.map((opponentColor, i) => {
        return <PoisonTracker key={i} color={opponentColor} />;
      })}
      <PoisonTracker color={color} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
});