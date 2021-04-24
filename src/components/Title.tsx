import React, { ReactElement } from 'react';
import { View, StyleSheet } from 'react-native';
import { StyledText } from './StyledText';

interface Props {
  textValue: string;
}
export const Title = ({ textValue }: Props): ReactElement => (
  <View style={styles.container}>
    <StyledText styles={styles.titleText}>{textValue}</StyledText>
  </View>
);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 20,
    paddingBottom: 50,
  },
  titleText: {
    fontSize: 45,
    textAlign: 'center',
  },
});
