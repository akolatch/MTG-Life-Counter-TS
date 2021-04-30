import React, { PropsWithChildren, ReactElement } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { IButtonProps } from '../lib/Interfaces/ButtonProps';
import { StyledText } from './StyledText';

export const TouchButton = ({
  title,
  press,
  styles,
  children,
}: PropsWithChildren<IButtonProps>): ReactElement => (
  <TouchableOpacity style={styles.container} onPress={press}>
    <View style={styles.view}>
      {children ? (
        children
      ) : (
        <StyledText styles={styles.text}>{title}</StyledText>
      )}
    </View>
  </TouchableOpacity>
);
