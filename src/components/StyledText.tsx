import React, { PropsWithChildren, ReactElement } from 'react';
import { Text } from 'react-native';
import { main } from '../assets/static/colors';

interface StyledTextProps {
  styles?: {};
}

export const StyledText = ({
  styles,
  children,
}: PropsWithChildren<StyledTextProps>): ReactElement => (
  <Text
    style={{
      fontFamily: 'HelveticaNeue-Bold',
      color: main.grey,
      ...styles,
    }}
  >
    {children}
  </Text>
);
