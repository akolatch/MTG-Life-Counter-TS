import React, { ReactElement, useContext, useEffect } from 'react';
import { View, StyleSheet, Animated } from 'react-native';
import { colorList, mtg } from '../../../assets/static/colors';
import { LongPressButton } from '../../../components/LongPressButton';
import { StyledText } from '../../../components/StyledText';
import { MainContext } from '../../../hooks/MainContext';
import { usePlayerTrackerReducer } from '../../../hooks/usePlayerTrackerReducer';
import { useSingleValueAnimation } from '../../../hooks/useSingleValueAnimation';
import { width } from '../../../assets/static/screenSize';
import { ChangeNumAction, TypeChangeNumValue } from '../../../lib/types';
import { Header } from './Header';

interface PlayerProps {
  id: number;
}

export const Player = ({ id }: PlayerProps): ReactElement => {
  const {
    usePlayerList: [playerList],
    useFormats: [format],
    onReset,
  } = useContext(MainContext);
  const [player, dispatch] = usePlayerTrackerReducer();
  const color = colorList[id - 1];
  const [playersDisplay, animatePlayersDisplay] = useSingleValueAnimation();

  const createNumAction = (
    type: TypeChangeNumValue,
    payload: number
  ): ChangeNumAction => ({
    type,
    payload,
  });

  onReset(() => dispatch({ type: 'RESET' }));

  const changeLife = (amount: number): void => {
    dispatch(createNumAction('CHANGE_LIFE', amount));
  };
  useEffect(() => {
    dispatch(createNumAction(format, id));
    animatePlayersDisplay(1, 500);
  }, []);

  const changeName = (text: string): void =>
    dispatch({ type: 'CHANGE_NAME', payload: text });
  return (
    <Animated.View
      style={{
        transform: [
          {
            translateX: playersDisplay.interpolate({
              inputRange: [0, 1],
              outputRange: [id % 2 === 0 ? 400 : -400, 0],
            }),
          },
        ],
        opacity: playersDisplay,
        flex: 1 / playerList.length,
      }}
    >
      <View
        style={{ backgroundColor: mtg[`off${color}`], ...styles.mainContainer }}
      >
        <Header player={player} color={color} changeName={changeName} />
        <View style={styles.center}>
          <View style={styles.lifeContainer}>
            <LongPressButton
              title='-'
              press={() => changeLife(-1)}
              styles={{
                text: {
                  fontSize: 60,
                  color: mtg[`true${color}`],
                },
                ...btnStyles,
              }}
            />
            <View style={styles.countContainer}>
              <StyledText
                styles={{ color: mtg[`true${color}`], ...styles.countNum }}
              >
                {player.lifeTotal}
              </StyledText>
            </View>
            <LongPressButton
              title='+'
              press={() => changeLife(1)}
              styles={{
                text: {
                  fontSize: 60,
                  color: mtg[`true${color}`],
                },
                ...btnStyles,
              }}
            />
          </View>
        </View>
      </View>
    </Animated.View>
  );
};

const btnStyles = StyleSheet.create({
  container: {
    width: width / 3,
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
  },
  view: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },

  center: {
    flex: 1,
    justifyContent: 'center',
  },
  lifeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  countContainer: {
    backgroundColor: mtg.trueWhite,
    padding: 5,
    borderRadius: 90 / 2,
    width: 90,
    height: 90,
  },
  countNum: {
    fontSize: 60,
    alignSelf: 'center',
  },
});
