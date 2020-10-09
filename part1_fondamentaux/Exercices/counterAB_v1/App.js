import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

import CounterA from './components/CounterA';
import CounterB from './components/CounterB';

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
      </SafeAreaView>
    </Provider>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 0.75,
    flexDirection : "column",
    backgroundColor: '#fff',
    alignItems : "center",
    justifyContent: 'space-around',
  },
});
