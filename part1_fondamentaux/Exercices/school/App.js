import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, ActivityIndicator } from 'react-native';

import { Provider, useSelector, useDispatch } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import { load_school_data_api } from './actions/actions-types';
import reducer from './reducers/index';

import thunkMiddleware from 'redux-thunk';

import HomeScreen from './screens/HomeScreen';
import StudentScreen from './screens/StudentScreen';
import AbscenceScreen from './screens/AbscenceScreen';

import Styles from './Styles';

const store = createStore(reducer, applyMiddleware(thunkMiddleware));

// On utilise la classe createStackNavigator de React navigation
const Stack = createStackNavigator();

const Nav = () => {
  const { lastId, isLoading } = useSelector(state => {
    return {
      lastId: state.school.lastId,
      isLoading: state.load.isLoading
    }
  }
  )
  const dispatch = useDispatch();

  console.log(isLoading, lastId);

  // useEffect sera exécuté une fois au montage et dès que lastId change
  useEffect(() => {
    // On récupère dans une API les data
    dispatch(load_school_data_api());

    // lastId si on a un CREATE student dans l'application
    // on watch l'id du dernier student inséré dans les données dans l'API
    // si il change => reload des données
  }, [lastId]);

  if (isLoading === true)
    return (
      <View style={[Styles.ctActiveIndicator, Styles.hActiveIndicator]}>
        <ActivityIndicator size="large" color="#00ff00" />
      </View>
    )

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Students" component={StudentScreen} />
        <Stack.Screen name="Abscence" component={AbscenceScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const App = () => (
  <Provider store={store}>
    <Nav />
  </Provider>
);

export default App;