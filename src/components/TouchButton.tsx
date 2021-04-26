import React, { ReactElement } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { IButtonProps } from '../lib/Interfaces/ButtonProps';
import { StyledText } from './StyledText';

export const TouchButton = ({
  title,
  press,
  styles,
}: IButtonProps): ReactElement => (
  <TouchableOpacity style={styles.container} onPress={press}>
    <View style={styles.view}>
      <StyledText styles={styles.text}>{title}</StyledText>
    </View>
  </TouchableOpacity>
);
