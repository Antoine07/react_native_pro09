import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

import CounterA from './components/CounterA';
import CounterB from './components/CounterB';
import Log from './components/Log';

const store = configureStore();

const App = () => {

  return (
    <Provider store={store} >
      <SafeAreaView style={styles.container}> 
        <View>
          <Text>Counter A & B</Text>
        </View>
        <CounterA />
        <CounterB />
        <Log />
      </SafeAreaView>
    </Provider>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection : "column",
    backgroundColor: '#fff',
    alignItems : "center",
    justifyContent: 'space-around',
  },
});
