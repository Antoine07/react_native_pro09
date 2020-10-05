import React, { useState, useReducer } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

// La structure de vos données
const initState = {
  number: '', // saisi controle du champ,
  calcul: '',
};

// reducer => algo sur le state
const reducer = (state, action) => {
  // en fonction des action.types on va faire de l'algo sur le state ...
  switch (action.type) {
    case 'SET_NUMBER':
      console.log(action);
      return {
        ...state,
        number: action.number,
      };

    case 'NUMBER_ODD':
      return {
        ...state,
        calcul: state.number * 2 + 1,
        number: '',
      };
    case 'NUMBER_EVEN':
      return {
        ...state,
        calcul: state.number / 2,
        number: '',
      };

    default:
      return state;
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initState);
  const { number, calcul } = state;

  const onPress = () => {
    // parité => en fonction on fait un dispatch particulier ...
    if (parseInt(number) % 2 === 0) {
      dispatch({ type: 'NUMBER_EVEN' });
    } else {
      dispatch({ type: 'NUMBER_ODD' });
    }
  };

  return (
    <View style={styles.container}>
      <Text>Number character(s)</Text>
      <View style={styles.blue}>
        <TextInput
          style={styles.numberField}
          onChangeText={(number) =>
            dispatch({ type: 'SET_NUMBER', number: number })
          }
          value={number}
        />
      </View>
      <View style={styles.countContainer}>
        <TouchableOpacity style={styles.button} onPress={onPress}>
          <Text>Press Here</Text>
        </TouchableOpacity>
      </View>
      {calcul != '' && (
        <View>
          <Text>😬 : {calcul} trop genial 😊 😊 😊 </Text>
        </View>
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
