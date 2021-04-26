import React, { ReactElement, useContext, useEffect } from 'react';
import { Animated, StyleSheet } from 'react-native';
import { main } from '../../../assets/static/colors';
import { TouchButton } from '../../../components/TouchButton';
import { MainContext } from '../../../hooks/MainContext';

interface NavBarProps {
  setStartGame: React.Dispatch<React.SetStateAction<boolean>>;
}

export const NavBar = ({ setStartGame }: NavBarProps): ReactElement => {
  const {
    useReset: [, setReset],
  } = useContext(MainContext);
  return (
    <Animated.View style={styles.navBar}>
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
    </Animated.View>
  );
};
const styles = StyleSheet.create({
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
