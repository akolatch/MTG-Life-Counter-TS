import React, { ReactElement, useContext } from 'react';
import { Animated, StyleSheet, View } from 'react-native';
import { FormatTypes } from '../../lib/types';
import { Title } from '../../components/Title';
import { MainContext } from '../../hooks/MainContext';
import { useSingleValueAnimation } from '../../hooks/useSingleValueAnimation';
import { FormatSelector } from './components/FormatSelector';
import { NumPlayerSelector } from './components/NumPlayerSelector';

interface LandingProps {
  setStartGame: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Landing = ({ setStartGame }: LandingProps): ReactElement => {
  const {
    useFormats: [, setFormat],
  } = useContext(MainContext);
  const [
    numPlayersDisplay,
    toggleNumPlayersDisplay,
  ] = useSingleValueAnimation();

  const select = (format: FormatTypes): void => {
    setFormat(format);
    toggleNumPlayersDisplay(1, 500);
  };

  const close = (): void => {
    toggleNumPlayersDisplay(0, 200);
    setStartGame(true);
  };

  return (
    <View style={styles.container}>
      <Title textValue='LIFE COUNTER' />
      <FormatSelector select={select} />
      <Animated.View
        style={{
          transform: [
            {
              translateY: numPlayersDisplay.interpolate({
                inputRange: [0, 1],
                outputRange: [400, 0],
              }),
            },
          ],
          opacity: numPlayersDisplay,
        }}
      >
        <NumPlayerSelector close={close} />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
  },
});
