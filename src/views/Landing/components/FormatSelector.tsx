import React, { ReactElement } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { FormatTypes } from '../../../lib/types';
import { main, mtg } from '../../../assets/static/colors';
import { formatList } from '../../../assets/static/formats';
import { TouchButton } from '../../../components/TouchButton';

interface FormatSelectorProps {
  select: (format: FormatTypes) => void;
}

export const FormatSelector = ({
  select,
}: FormatSelectorProps): ReactElement => {
  return (
    <FlatList
      data={formatList}
      renderItem={({ item: { id, display, type } }) => (
        <TouchButton
          key={id}
          title={display}
          press={() => select(type)}
          styles={listStyling}
        />
      )}
    />
  );
};

const listStyling = StyleSheet.create({
  text: {
    color: mtg.trueWhite,
    fontSize: 40,
    backgroundColor: main.grey,
    padding: 15,
  },
  container: {
    alignItems: 'flex-start',
    margin: 7,
    marginLeft: 30,
  },
  view: {},
});
