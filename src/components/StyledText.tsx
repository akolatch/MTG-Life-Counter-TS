import React, { PropsWithChildren, ReactElement } from 'react';
import { Text } from 'react-native';
import { main } from '../assets/static/colors';

interface Props {
  styles?: {};
}

export const StyledText = ({
  styles,
  children,
}: PropsWithChildren<Props>): ReactElement => (
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
