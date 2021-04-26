import React, { ReactElement, useContext, useEffect } from 'react';
import { Animated, StyleSheet } from 'react-native';
import { main } from '../../../assets/static/colors';
import { TouchButton } from '../../../components/TouchButton';
import { MainContext } from '../../../hooks/MainContext';
import { useSingleValueAnimation } from '../../../hooks/useSingleValueAnimation';
interface NavBarProps {
  setStartGame: React.Dispatch<React.SetStateAction<boolean>>;
}

export const NavBar = ({ setStartGame }: NavBarProps): ReactElement => {
  const {
    useReset: [, setReset],
  } = useContext(MainContext);

  const [navDisplay, animateNavDisplay] = useSingleValueAnimation();

  useEffect(() => {
    animateNavDisplay(1, 600);
  }, []);
  return (
    <Animated.View
      style={{
        transform: [
          {
            translateY: navDisplay.interpolate({
              inputRange: [0, 1],
              outputRange: [400, 0],
            }),
          },
        ],
        opacity: navDisplay,
        ...styles.navBar,
      }}
    >
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
