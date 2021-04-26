import React, { ReactElement, useEffect, useRef } from 'react';
import { Pressable, View } from 'react-native';
import { IButtonProps } from '../assets/static/buttonPropsInterface';
import { StyledText } from './StyledText';

export const LongPressButton = ({
  title,
  press,
  styles,
}: IButtonProps): ReactElement => {
  // this is not the long term solution
  const longCall = useRef<any>(null);
  useEffect(() => {
    return () => clearInterval(longCall.current);
  }, []);

  return (
    <Pressable
      style={({ pressed }) => [
        { opacity: pressed ? 1 : 0.75 },
        styles.container,
      ]}
      onPressIn={press}
      onLongPress={() => {
        longCall.current = setInterval(press, 200);
      }}
      onPressOut={() => {
        clearInterval(longCall.current);
      }}
    >
      <View style={styles.view}>
        <StyledText styles={styles.text}>{title}</StyledText>
      </View>
    </Pressable>
  );
};
