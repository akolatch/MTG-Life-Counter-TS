import React, { ReactElement, useContext, useState } from 'react';
import { Animated, StyleSheet, View } from 'react-native';
import { PlayerColorProps } from '../../../lib/Interfaces/PlayerColorProps';
import { colorList, mtg } from '../../../assets/static/colors';
import { MainContext } from '../../../hooks/MainContext';
import { CounterTracker } from './CounterTracker';
import { PoisonIcon } from '../../../assets/svg/PoisonIcon';
import { CommanderIcon } from '../../../assets/svg/CommanderIcon';
import { TouchButton } from '../../../components/TouchButton';
import { useSingleValueAnimation } from '../../../hooks/useSingleValueAnimation';
import { LeftArrow } from '../../../assets/svg/LeftArrow';
import { RightArrow } from '../../../assets/svg/RightArrow';

export const CounterBar = ({ color }: PlayerColorProps): ReactElement => {
  const {
    usePlayerList: [playerList],
  } = useContext(MainContext);
  const playerCount = playerList.length;

  const opponentsColorList = colorList
    .slice(0, playerCount)
    .filter((value) => value !== color);

  const [open, setOpen] = useState(false);
  const [
    tokenBarDisplay,
    animateTokenBarDisplayDisplay,
  ] = useSingleValueAnimation();
  return (
    <View>
      <Animated.View
        style={{
          transform: [
            {
              translateX: tokenBarDisplay.interpolate({
                inputRange: [0, 1],
                outputRange: [295, 295 - playerCount * 65],
              }),
            },
          ],
          // opacity: tokenBarDisplay,
          ...styles.container,
        }}
      >
        <TouchButton
          press={() => {
            animateTokenBarDisplayDisplay(open ? 0 : 1);
            setOpen(!open);
          }}
          styles={{ container: { marginTop: 10 } }}
        >
          {open ? (
            <RightArrow
              width={20}
              height={20}
              fill={`${mtg[`true${color}`]}`}
            />
          ) : (
            <LeftArrow width={20} height={20} fill={`${mtg[`true${color}`]}`} />
          )}
        </TouchButton>
        {opponentsColorList.map((opponentColor, i) => {
          return (
            <CounterTracker key={i} color={opponentColor}>
              <CommanderIcon
                width={20}
                height={20}
                fill={`${mtg[`true${opponentColor}`]}`}
              />
            </CounterTracker>
          );
        })}
        <CounterTracker color={color}>
          <PoisonIcon width={25} height={25} fill={`${mtg[`true${color}`]}`} />
        </CounterTracker>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});
