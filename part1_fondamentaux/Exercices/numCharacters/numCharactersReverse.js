import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, Button } from 'react-native';

const App = () => {
  const [sentence, setSentence] = useState('');

  const calcul = sentence => 
    sentence
    .split(' ')
    .map( w  =>  w.length )
    .filter( w => w != 0 )
    .join(' ');

  const onPressReverse = () => {
    if (sentence) {
      const reverseSentence = sentence
        .split(' ')
        .map( word  => word.split('')
          .reverse()
          .join('') 
        )
        .join(' ');

      setSentence(reverseSentence);
    }
  };

  return (
    <View style={styles.container}>
      <Text>Number character(s)</Text>
      <View style={styles.blue}>
        <TextInput
          style={styles.numberField}
          onChangeText={setSentence}
          value={sentence}
        />
      </View>
      { sentence != '' && (
        <>
          <View style={[styles.sky, styles.numberField]}>
            <Text>{sentence}</Text>
            <Text> {calcul(sentence)} </Text>
          </View>
          <View style={styles.numberField}>
            <Button
              onPress={onPressReverse}
              title="Reverse"
              color="#000"
              accessibilityLabel="Reverse sentense"
            />
          </View>
          <View style={styles.numberField}>
            <Button
              onPress={() => setSentence('')}
              title="Clean"
              color="#000"
              accessibilityLabel="Clean sentense"
            />
          </View>
        </>
      )}
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'papayawhip',
  },
  blue: {
    height: 50,
    backgroundColor: 'powderblue',
  },
  sky: {
    height: 50,
    backgroundColor: 'skyblue',
    padding: 5,
    fontSize: 42,
    width: 200,
    margin: 2,
  },
  numberField: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    width: 200,
  },
});
