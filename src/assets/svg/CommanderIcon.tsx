import React, { ReactElement } from 'react';
import { SvgXml } from 'react-native-svg';
import { SVGProps } from '../../lib/Interfaces';
export const CommanderIcon = ({
  width,
  height,
  fill,
}: SVGProps): ReactElement => {
  const xml = `<svg viewBox="0 0 141 152" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M137.059 112.021V48.447L106.074 33.6719V97.2287L137.059 112.021ZM34.9425 97.2287V33.6719L3.95769 48.447V112.021L34.9425 97.2287ZM70.5021 0L44.2708 13.8305V92.514L70.5021 78.6623L96.7335 92.514V13.8305L70.5021 0ZM0 152V127.131L70.5021 89.8496L141 127.131V152H0Z" fill="${fill}"/>
  </svg>`;
  return <SvgXml xml={xml} width={width} height={height} />;
};
