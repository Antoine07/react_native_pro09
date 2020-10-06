import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/HomeScreen';
import StudentScreen from './screens/StudentScreen';
import AbscenceScreen from './screens/AbscenceScreen';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import school from './reducers/school';

const store = createStore(school);

// On utilise la classe createStackNavigator de React navigation
const Stack = createStackNavigator();

const Nav = () => {
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