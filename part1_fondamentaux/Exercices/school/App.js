import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/HomeScreen';
import StudentScreen from './screens/StudentScreen';
import AbscenceScreen from './screens/AbscenceScreen';

import { Provider, useSelector, useDispatch } from 'react-redux';
import { createStore } from 'redux';

import school from './reducers/school';

import { students, lessons } from './school_data';

const store = createStore(school);

// On utilise la classe createStackNavigator de React navigation
const Stack = createStackNavigator();

const Nav = () => {
  const { lastId } = useSelector(state => state);
  const dispatch = useDispatch();

  // useEffect sera exécuté une fois au montage et dès que lastId change
  useEffect(() =>{
    // On récupère dans une API les data
    dispatch({ type : 'LOAD_SCHOOL_DATA', students, lessons});

    // lastId si on a un CREATE student dans l'application
    // on watch l'id du dernier student inséré dans les données dans l'API
    // si il change => reload des données
  }, [lastId]);

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