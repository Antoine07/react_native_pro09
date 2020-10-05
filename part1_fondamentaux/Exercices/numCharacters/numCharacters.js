import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';

const App = () => {
  const [sentence, setSentence ] = useState('');
  const lenWord = sentence => sentence
                                      .split(' ')
                                      .map( word => word.length)
                                      .filter(number => number != 0);

  return (
    <View style={styles.container}>
      <View style={styles.blue}>
       <TextInput
        onChangeText={ sentence => setSentence(sentence) }
        value={sentence}
        />
       </View>
       { sentence && 
          <Text>Calcul : {lenWord(sentence)}</Text>
       }
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch'
    },
    blue: {
        height: 20,
        backgroundColor: 'powderblue',
        borderColor: 'black',
        borderWidth : 1
    }
});