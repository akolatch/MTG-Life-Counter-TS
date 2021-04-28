import { Colors } from '../../lib/types';

interface Map {
  [key: string]: string | undefined;
}

export const main: Map = {
  grey: '#ADA8B6',
  drkGrey: '#403e3b',
};

export const mtg: Map = {
  offWhite: '#f8e7b9',
  offBlue: '#b3ceea',
  offBlack: '#a69f9d',
  offRed: '#eba082',
  offGreen: '#c4d3ca',
  trueWhite: '#f9faf4',
  trueBlue: '#0e68ab',
  trueBlack: '#150b00',
  trueRed: '#d32029',
  trueGreen: '#00733d',
};

export const colorList: Colors[] = ['Green', 'Blue', 'Red', 'Black'];
