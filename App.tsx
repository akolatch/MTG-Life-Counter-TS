import React, { ReactElement } from 'react';
import { StyleSheet, View, Platform, StatusBar } from 'react-native';
import { mtg } from './src/assets/static/colors';
import { MainProvider } from './src/hooks/MainContext';
import { Landing } from './src/views/Landing/Landing';

const App = (): ReactElement => {
  return (
    <MainProvider>
      <View style={styles.mainContainer}>
        <StatusBar />
        <Landing />
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
