import React, { ReactElement } from 'react';
import { View, StyleSheet } from 'react-native';
import { StyledText } from './StyledText';

interface IStylesProps {
  container?: {};
  text?: {};
}

interface IProps {
  textValue: string;
  styles?: IStylesProps;
}
export const Title = ({
  textValue,
  styles = { container: {}, text: {} },
}: IProps): ReactElement => (
  <View style={{ ...titleStyles.container, ...styles.container }}>
    <StyledText styles={{ ...titleStyles.text, ...titleStyles.text }}>
      {textValue}
    </StyledText>
  </View>
);

const titleStyles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 20,
    paddingBottom: 50,
  },
  text: {
    fontSize: 45,
    textAlign: 'center',
  },
});
