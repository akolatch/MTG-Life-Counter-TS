import React, { ReactElement } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { StyledText } from './StyledText';

interface StylesProps {
  container?: {};
  view?: {};
  text?: {};
}

interface IProps {
  title: string;
  press: () => any;
  styles: StylesProps;
}

export const TouchButton = ({ title, press, styles }: IProps): ReactElement => (
  <TouchableOpacity style={styles.container} onPress={press}>
    <View style={styles.view}>
      <StyledText styles={styles.text}>{title}</StyledText>
    </View>
  </TouchableOpacity>
);
