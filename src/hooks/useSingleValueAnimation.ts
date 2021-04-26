import { useRef } from 'react';
import { Animated } from 'react-native';
import { AnimationTuple } from '../assets/types';

export const useSingleValueAnimation = (): AnimationTuple => {
  const animationValue = useRef(new Animated.Value(0)).current;

  const setAnimationValue = (
    newAnimationValue: number,
    timing: number
  ): void => {
    Animated.timing(animationValue, {
      toValue: newAnimationValue,
      duration: timing,
      useNativeDriver: true,
    }).start();
  };

  return [animationValue, setAnimationValue];
};
