import React from 'react';
import { SafeAreaView, StyleSheet, Text, Pressable, View } from 'react-native';

import { useDispatch, useSelector } from 'react-redux';
import {
  increment_press,
  increment_longPress,
  increment_pressOut,
} from '../actions/actions-types';

const CounterA = () => {
  const { count, countout } = useSelector((state) => state.counterA);
  const dispatch = useDispatch();

  return (
    <SafeAreaView style={styles.conterA}>
      <Pressable
        onPress={() => dispatch(increment_press({ step: 1 }))}
        onLongPress={() => dispatch(increment_longPress({ step: 4 }))}
        onPressOut={() => dispatch(increment_pressOut({ step: 10 }))}
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'white',
          },
          styles.wrapperCustom,
        ]}>
        {({ pressed }) => (
          <Text style={styles.text}>{pressed ? 'Pressed!' : 'Press Me'}</Text>
        )}
      </Pressable>
      <View style={styles.logBox}>
        <Text style={styles.txt} >{count}</Text>
        <Text style={styles.txt} >{countout}</Text>
      </View>
    </SafeAreaView>
  );
};

export default CounterA;

const styles = StyleSheet.create({
  conterA: {},
  text: {
    fontSize: 16,
  },
  wrapperCustom: {
    borderRadius: 8,
    padding: 6,
  },
  logBox: {
    padding: 20,
    margin: 10,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#f0f0f0',
    backgroundColor: '#f9f9f9',
  },
  txt : {
    padding : 10,
  }
});
