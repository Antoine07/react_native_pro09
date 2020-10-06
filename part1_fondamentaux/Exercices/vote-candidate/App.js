import { StatusBar } from 'expo-status-bar';
import React, { useReducer } from 'react';
import {
  Text,
  View,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import Styles from './Styles';
// La structure de vos données
const initState = {
  candidates: [
    { choice_1: 'Alan', choice_2: 'Juliette' },
    { choice_1: 'Phi', choice_2: 'Bernard' },
    { choice_1: 'Lisa', choice_2: 'Elise' },
    { choice_1: 'Cecilia', choice_2: 'Alice' },
  ],
  choices: [],
  count: 0,
};
// reducer => algo sur le state
const reducer = (state, action) => {
  switch (action.type) {
    case 'CHOICE':
      return {
        ...state,
        count: state.count + 1,
        choices: state.choices.concat(action.item), // crée un nouveau tableau
      };
    case 'RESET':
      return {
        ...state,
        count: 0,
        choices: [],
      };
    default:
      return state;
  }
};
const Favorite = ({ choices, dispatch }) => {
  const renderItem = ({ item, index }) => (
    <View style={Styles.countContainer}>
      <Text style={index % 2 == 0 ? Styles.btnStyle1 : Styles.btnStyle2}>
        {item}
      </Text>
    </View>
  );
  return (
    <SafeAreaView style={Styles.container}>
      <View style={{ marginTop: 50 }}>
        <FlatList
          data={choices}
          renderItem={renderItem}
          keyExtractor={({ item, index }) => index}
        />
      </View>
      <TouchableOpacity style={Styles.button} onPress={dispatch}>
        <Text style={Styles.btnStylReset}>RESET</Text>
      </TouchableOpacity>
      <StatusBar style="light" />
    </SafeAreaView>
  );
};
const App = () => {
  const [state, dispatch] = useReducer(reducer, initState);
  const { candidates, count } = state;
  const renderItem = ({ item, index }) => (
    <View style={Styles.countContainer}>
      <TouchableOpacity
        style={Styles.button}
        onPress={() => dispatch({ type: 'CHOICE', item })}>
        <Text style={index === 0 ? Styles.btnStyle1 : Styles.btnStyle2}>
          {item}
        </Text>
      </TouchableOpacity>
    </View>
  );
  if (count < 4) {
    const { choice_1, choice_2 } = state.candidates[count];
    return (
      <SafeAreaView style={Styles.container}>
        <View style={{ marginTop: 50 }}>
          <FlatList
            data={[choice_1, choice_2]}
            renderItem={renderItem}
            keyExtractor={({ item, index }) => index}
          />
        </View>
        <StatusBar style="light" />
      </SafeAreaView>
    );
  }
  return (
    <Favorite
      choices={state.choices}
      dispatch={() => dispatch({ type: 'RESET' })}
    />
  );
};
export default App;