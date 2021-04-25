import React, { ReactElement, useContext, useEffect, useRef } from 'react';
import { FlatList, View, StyleSheet, SafeAreaView } from 'react-native';
import { main, mtg } from '../../../assets/static/colors';
import { Title } from '../../../components/Title';
import { TouchButton } from '../../../components/TouchButton';
import { MainContext } from '../../../hooks/MainContext';

interface IProps {
  close: () => void;
}

export const NumPlayerSelector = ({ close }: IProps): ReactElement => {
  // close only after player count update

  const {
    usePlayerList: [playerList, setPlayerList],
  } = useContext(MainContext);

  const firstOpen = useRef(true);
  useEffect(() => {
    if (firstOpen.current) {
      firstOpen.current = false;
    } else {
      close();
    }
  }, [playerList]);

  const chooseNumPlayers = (value: number) => {
    setPlayerList(
      new Array(value).fill(0).map((v, i) => {
        const playerNum = i + 1;
        return { id: `p${playerNum}`, playerNum };
      })
    );
  };
  return (
    <View style={styles.container}>
      <Title
        textValue='Number of Players?'
        styles={{ container: { paddingBottom: 15 } }}
      />
      <View style={styles.listContainer}>
        <FlatList
          horizontal={true}
          data={[
            { id: 1, value: 1 },
            { id: 2, value: 2 },
            { id: 3, value: 3 },
            { id: 4, value: 4 },
          ]}
          renderItem={({ item: { id, value } }) => (
            <TouchButton
              key={id}
              title={`${value}`}
              press={() => {
                chooseNumPlayers(value);
              }}
              styles={btnStyles}
            />
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 0.5,
    paddingTop: 40,
    // backgroundColor: 'red',
  },
  listContainer: {
    alignItems: 'center',
  },
});

const btnStyles = StyleSheet.create({
  text: {
    color: mtg.trueWhite,
    fontSize: 60,
    alignSelf: 'center',
  },
  container: {
    alignItems: 'center',
    margin: 5,
  },
  view: {
    backgroundColor: main.grey,
    padding: 5,
    borderRadius: 90 / 2,
    width: 90,
    height: 90,
  },
});
