import React from 'react';
import {SafeAreaView, ScrollView, StatusBar, View} from 'react-native';

const Card = ({variation}) => {
  const cardStyles = () => {
    if (variation === 'variation1')
      return [styles.cardContainer, styles.variation1];
    else if (variation === 'variation2')
      return [styles.cardContainer, styles.variation2];
    else if (variation === 'variation3')
      return [styles.cardContainer, styles.variation3];
    else if (variation === 'variation4')
      return [styles.cardContainer, styles.variation4];
    else return styles.cardContainer;
  };

  return <View style={cardStyles()} />;
};

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollview}>
        <Card variation={'variation1'} />
        <Card variation={'variation2'} />
        <Card variation={'variation3'} />
        <Card variation={'variation4'} />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = {
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    backgroundColor: 'white',
  },
  scrollview: {
    marginHorizontal: 20,
  },
  cardContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'yellow',
    borderColor: 'yellowgreen',
    borderWidth: 2,
    marginVertical: 20,
    width: '100%',
    height: 50,
  },
  variation1: {
    borderWidth: 3,
  },
  variation2: {
    borderStyle: 'dashed',
    borderWidth: 3,
  },
  variation3: {
    borderColor: 'red',
    borderWidth: 8,
  },
  variation4: {
    borderColor: 'turquoise',
    borderStyle: 'dotted',
    borderRadius: 1,
    borderWidth: 4,
  },
};

export default App;
