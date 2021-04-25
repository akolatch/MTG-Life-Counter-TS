import React, { ReactElement, useContext, useEffect } from 'react';
import { TextInput, View, StyleSheet, Animated } from 'react-native';
import { PlayerTAction } from '../../../../types';
import { colorList, mtg } from '../../../assets/static/colors';
import { PressButton } from '../../../components/PressButton';
import { StyledText } from '../../../components/StyledText';
import { MainContext } from '../../../hooks/MainContext';
import {
  usePlayerTrackerReducer,
  IAction,
} from '../../../hooks/usePlayerTrackerReducer';
import { useSingleValueAnimation } from '../../../hooks/useSingleValueAnimation';

interface PlayerProps {
  id: number;
}

export const Player = ({ id }: PlayerProps): ReactElement => {
  const {
    useFormats: [format],
    onReset,
  } = useContext(MainContext);
  const [player, dispatch] = usePlayerTrackerReducer();
  const color = colorList[id - 1];
  const [playersDisplay, animatePlayersDisplay] = useSingleValueAnimation();
  const createAction = (
    type: PlayerTAction,
    numPayload: number = 0,
    stringPayload: string = ''
  ): IAction => ({
    type,
    numPayload,
    stringPayload,
  });

  onReset(() => dispatch(createAction('RESET')));

  const changeLife = (amount: number): void => {
    dispatch(createAction('CHANGE_LIFE', amount));
  };
  useEffect(() => {
    dispatch(createAction(format, id));
    animatePlayersDisplay(1, 500);
  }, []);

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
        flex: 1,
      }}
    >
      <View
        style={{ backgroundColor: mtg[`off${color}`], ...styles.mainContainer }}
      >
        <View style={styles.header}>
          <TextInput
            style={{ ...styles.name, color: mtg[`true${color}`] }}
            placeholderTextColor={mtg[`true${color}`]}
            value={player.name}
            placeholder={player.placeholder}
            onChangeText={(text: string) =>
              dispatch(createAction('CHANGE_NAME', 0, text))
            }
          />
          {/* {format === 'COMMANDER' ? (
          <CommanderDMGList color={color} numPlayers={numPlayers} />
        ) : (
          <View style={styles.poisonContainer}>
            <PoisonCounter color={color} />
          </View>
        )} */}
        </View>
        <View style={styles.center}>
          <View style={styles.lifeContainer}>
            <PressButton
              title='-'
              press={() => changeLife(-1)}
              styles={{
                text: {
                  fontSize: 50,
                  paddingRight: 30,
                  color: mtg[`true${color}`],
                },
              }}
            />

            <View style={styles.countContainer}>
              <StyledText
                styles={{ color: mtg[`true${color}`], ...styles.countNum }}
              >
                {player.lifeTotal}
              </StyledText>
            </View>
            <PressButton
              title='+'
              press={() => changeLife(1)}
              styles={{
                text: {
                  fontSize: 50,
                  paddingLeft: 30,
                  color: mtg[`true${color}`],
                },
              }}
            />
          </View>
        </View>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'baseline',
    justifyContent: 'flex-start',
  },
  name: {
    fontFamily: 'HelveticaNeue-Bold',
    fontSize: 25,
    paddingTop: 5,
    paddingLeft: 10,
  },
  poisonContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
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
