import React, { ReactElement } from 'react';

import { SvgXml } from 'react-native-svg';
import { SVGProps } from '../../lib/Interfaces';

export const LeftArrow = ({ width, height, fill }: SVGProps): ReactElement => {
  const xml = `<svg xmlns="http://www.w3.org/2000/svg" fill="${fill}" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/></svg>`;
  return <SvgXml xml={xml} width={width} height={height} />;
};
