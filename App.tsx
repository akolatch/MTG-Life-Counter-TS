import React, { ReactElement, useState } from 'react';
import { StyleSheet, View, Platform, StatusBar } from 'react-native';
import { mtg } from './src/assets/static/colors';
import { MainProvider } from './src/hooks/MainContext';
import { Game } from './src/views/Game/Game';
import { Landing } from './src/views/Landing/Landing';

const App = (): ReactElement => {
  const [startGame, setStartGame] = useState(false);
  return (
    <MainProvider>
      <View style={styles.mainContainer}>
        <StatusBar />
        {startGame ? (
          <Game setStartGame={setStartGame} />
        ) : (
          <Landing setStartGame={setStartGame} />
        )}
      </View>
    </MainProvider>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: mtg.trueWhite,
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 20,
  },
});
export default App;
