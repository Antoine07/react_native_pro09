import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, Button } from 'react-native';
import Constants from 'expo-constants';

const Tea = (props) => {
  return (
    <View>
      <Text>Tea time {props.genre}</Text>
    </View>
  );
}

const App = () => {
  {/** Hook => import les states dans une fonction
    val : le nom de nom state 
    setVal : le nom de la fonction qui me permettra de mettre à jour mon state val
    Notez que lorsque vous utilisez un Hook useState vous devez donnner une valeur
    par défaut
   */}
  const [val, setVal ] = useState('');

  const onChangeTea = () => {
    if(val != '' )
      setVal(`Genre : ${val}`)
  };

  return (
    <View style={styles.container}>
      <Text> Val : {val} </Text>
      <Text style={styles.paragraph}>
       Bonjour le monde super React ?
      </Text>
      <TextInput 
        onChangeText={ val => setVal(val)} 
        defaultValue={val}
      />
       <Button
          onPress={onChangeTea}
          title="Time tea"
          color="#000"
          accessibilityLabel="Tea"
        />
      <Tea genre={val} />
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
