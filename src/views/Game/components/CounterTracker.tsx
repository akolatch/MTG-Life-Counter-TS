import React, {
  useState,
  useEffect,
  useRef,
  useContext,
  ReactElement,
  PropsWithChildren,
} from 'react';
import { StyleSheet, Pressable, View } from 'react-native';
import { PlayerColorProps } from '../../../lib/Interfaces/PlayerColorProps';
import { mtg } from '../../../assets/static/colors';
import { StyledText } from '../../../components/StyledText';
import { MainContext } from '../../../hooks/MainContext';
import { PoisonIcon } from '../../../assets/svg/PoisonIcon';

export const CounterTracker = ({
  color,
  children,
}: PropsWithChildren<PlayerColorProps>): ReactElement => {
  const [damage, setDamage] = useState(0);
  const [showMinus, setShowMinus] = useState(false);
  const increment = useRef(1);

  const { onReset } = useContext(MainContext);
  onReset((): void => {
    setDamage(0);
    setShowMinus(false);
    increment.current = 1;
  });

  const press = (): void => {
    setDamage((prevState) =>
      prevState + increment.current < 0 ? 0 : prevState + increment.current
    );
  };

  const longPress = (): void => {
    if (damage > 0) {
      increment.current = -1;
      setShowMinus(true);
    }
  };

  const clicksStoppedTimer = useRef<NodeJS.Timeout>();

  useEffect((): (() => void) => {
    if (showMinus) {
      clearTimeout(clicksStoppedTimer.current!);
      clicksStoppedTimer.current = setTimeout((): void => {
        setShowMinus(false);
        increment.current = 1;
      }, 500);
    }
    return (): void => clearTimeout(clicksStoppedTimer.current!);
  }, [damage]);

  return (
    <View style={styles.btnContainer}>
      <Pressable
        style={({ pressed }) => [{ opacity: pressed ? 1 : 0.75 }]}
        onLongPress={longPress}
        onPressOut={press}
      >
        <View style={styles.view}>
          {showMinus ? (
            <StyledText styles={{ ...styles.text, color: mtg[`true${color}`] }}>
              -
            </StyledText>
          ) : (
            children
          )}
          <StyledText styles={{ ...styles.text, color: mtg[`true${color}`] }}>
            {damage}
          </StyledText>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
  },
  view: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    width: 50,
    height: 30,
    // backgroundColor: 'red',
  },
  btnContainer: {
    backgroundColor: mtg.trueWhite,
    borderRadius: 30 / 2,
    width: 50,
    height: 30,
    marginLeft: 5,
    marginTop: 10,
    marginRight: 10,
  },
});
