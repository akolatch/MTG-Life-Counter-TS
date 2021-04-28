import React, { ReactElement, useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { PlayerColorProps } from '../../../lib/Interfaces/PlayerColorProps';
import { colorList, mtg } from '../../../assets/static/colors';
import { MainContext } from '../../../hooks/MainContext';
import { CounterTracker } from './CounterTracker';
import { PoisonIcon } from '../../../assets/svg/PoisonIcon';
import { CommanderIcon } from '../../../assets/svg/CommanderIcon';

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
        return (
          <CounterTracker key={i} color={opponentColor}>
            <CommanderIcon
              width={20}
              height={20}
              fill={`${mtg[`true${opponentColor}`]}`}
            />
          </CounterTracker>
        );
      })}
      <CounterTracker color={color}>
        <PoisonIcon width={25} height={25} fill={`${mtg[`true${color}`]}`} />
      </CounterTracker>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});
