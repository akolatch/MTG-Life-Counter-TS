import React, { useState, useEffect, ReactElement } from 'react';
import { View } from 'react-native';
import { Title } from '../../components/Title';

export const Landing = (): ReactElement => {
  const [format, setFormat] = useState('2_PLAYER');
  return (
    <View>
      <Title textValue='LIFE COUNTER' />
    </View>
  );
};
