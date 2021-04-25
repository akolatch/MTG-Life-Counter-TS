import React, { ReactElement, useContext } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { main } from '../../assets/static/colors';
import { TouchButton } from '../../components/TouchButton';
import { MainContext } from '../../hooks/MainContext';
import { Player } from './components/Player';

interface GameProps {
  setStartGame: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Game = ({ setStartGame }: GameProps): ReactElement => {
  const {
    useFormats: [format],
    usePlayerList: [playerList],
    useReset: [, setReset],
  } = useContext(MainContext);

  return (
    <View style={styles.container}>
      {playerList.map((player) => (
        <Player key={player.id} id={player.playerNum} />
      ))}
      <View style={styles.navBar}>
        <TouchButton
          title='HOME'
          press={() => {
            setStartGame(false);
          }}
          styles={btn}
        />
        <TouchButton
          title='NEW GAME'
          press={() => {
            setReset(true);
          }}
          styles={btn}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    paddingTop: 20,
    paddingBottom: 20,
  },
  navBar: {
    borderTopWidth: 1,
    borderColor: main.grey,
    paddingTop: 5,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});

const btn = StyleSheet.create({
  text: {
    color: main.drkGrey,
    fontSize: 20,
  },
});
