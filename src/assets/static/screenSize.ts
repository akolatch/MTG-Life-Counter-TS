import { Dimensions, useWindowDimensions } from 'react-native';

export const { width, height } = Dimensions.get('window');

export const getWindowWidth = (): number => useWindowDimensions().width;
export const getWindowHeight = (): number => useWindowDimensions().height;
