import React, {
  ReactElement,
  useEffect,
  useRef,
  PropsWithChildren,
} from 'react';
import { Pressable, View } from 'react-native';
import { IButtonProps } from '../lib/Interfaces';
import { StyledText } from './StyledText';

export const LongPressButton = ({
  press,
  styles,
  children,
}: PropsWithChildren<IButtonProps>): ReactElement => {
  // this is not the long term solution
  const longCall = useRef<NodeJS.Timeout>();
  useEffect(() => {
    return () => clearInterval(longCall.current!);
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
        clearInterval(longCall.current!);
      }}
    >
      <View style={styles.view}>{children}</View>
    </Pressable>
  );
};
