import React, {
  useState,
  useEffect,
  useRef,
  useContext,
  ReactElement,
} from 'react';
import { StyleSheet, Pressable, View } from 'react-native';
import { mtg } from '../../../assets/static/colors';
import { StyledText } from '../../../components/StyledText';
import { MainContext } from '../../../hooks/MainContext';

interface PoisonTrackerProps {
  color: string;
}
export const PoisonTracker = ({ color }: PoisonTrackerProps): ReactElement => {
  const [damage, setDamage] = useState(0);

  const { onReset } = useContext(MainContext);
  onReset(() => {
    setDamage(0);
  });

  const press = () => {
    setDamage((prevState) => prevState + 1);
  };

  const longCall = useRef<any>(null);

  useEffect(() => {
    return () => clearInterval(longCall.current);
  }, []);

  return (
    <View style={styles.container}>
      <Pressable
        style={({ pressed }) => [{ opacity: pressed ? 1 : 0.75 }]}
        onPressIn={press}
        onLongPress={() => {
          longCall.current = setInterval(press, 200);
        }}
        onPressOut={() => {
          clearInterval(longCall.current);
        }}
      >
        <View style={styles.view}>
          <StyledText styles={{ ...styles.text, color: mtg[`true${color}`] }}>
            {`P ${damage}`}
          </StyledText>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    right: 0,
    fontSize: 20,
  },
  view: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    width: 50,
    height: 30,
  },
  container: {
    backgroundColor: mtg.trueWhite,
    borderRadius: 30 / 2,
    width: 50,
    height: 30,
    marginLeft: 5,
    marginTop: 10,
    marginRight: 10,
  },
});
