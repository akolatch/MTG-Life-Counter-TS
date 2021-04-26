import React, { ReactElement, useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { MainContext } from '../../hooks/MainContext';
import { NavBar } from './components/NavBar';
import { Player } from './components/Player';

interface GameProps {
  setStartGame: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Game = ({ setStartGame }: GameProps): ReactElement => {
  const {
    usePlayerList: [playerList],
  } = useContext(MainContext);

  return (
    <View style={styles.container}>
      {playerList.map((player) => (
        <Player key={player.id} id={player.playerNum} />
      ))}
      <NavBar setStartGame={setStartGame} />
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
});
