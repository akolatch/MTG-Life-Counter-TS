import React, { ReactElement, useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { mtg } from '../../../assets/static/colors';
import { PoisonIcon } from '../../../assets/svg/PoisonIcon';
import { MainContext } from '../../../hooks/MainContext';
import { PlayerColorProps, PlayerState } from '../../../lib/Interfaces';
import { CommanderDMGList } from './CommanderBar';
import { CounterTracker } from './CounterTracker';

interface HeaderProps extends PlayerColorProps {
  player: PlayerState;
  changeName: (val: string) => void;
}
export const Header = ({
  player,
  color,
  changeName,
}: HeaderProps): ReactElement => {
  const {
    useFormats: [format],
  } = useContext(MainContext);
  return (
    <View style={styles.header}>
      <TextInput
        style={{ ...styles.name, color: mtg[`true${color}`] }}
        placeholderTextColor={mtg[`true${color}`]}
        value={player.name}
        placeholder={player.placeholder}
        onChangeText={changeName}
      />
      {format === 'COMMANDER' ? (
        <CommanderDMGList color={color} />
      ) : (
        <View style={styles.poisonContainer}>
          <CounterTracker color={color}>
            <PoisonIcon
              width={30}
              height={30}
              fill={`${mtg[`true${color}`]}`}
            />
          </CounterTracker>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    // backgroundColor: 'red',
    height: 50,
  },
  poisonContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  name: {
    fontFamily: 'HelveticaNeue-Bold',
    fontSize: 25,
    paddingTop: 5,
    paddingLeft: 10,
  },
});
