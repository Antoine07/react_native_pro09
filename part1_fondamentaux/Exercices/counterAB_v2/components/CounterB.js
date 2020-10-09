import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, Pressable } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import {
  increment_press_B_async,
  stop_increment_B,
} from '../actions/actions-types';

const CounterB = () => {
  const { count, status } = useSelector((state) => state.counterB);
  const dispatch = useDispatch();

  const start = () => (
    <Pressable
      onPress={() => dispatch(increment_press_B_async({ step: 1 }))}
      style={({ pressed }) => [
        {
          backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'white',
        },
        styles.wrapperCustom,
      ]}>
      {({ pressed }) => (
        <Text style={styles.text}>{pressed ? 'Started!' : 'Start Me'}</Text>
      )}
    </Pressable>
  );

  const stop = () => (
    <Pressable
      onPress={() => dispatch(stop_increment_B())}
      style={({ pressed }) => [
        {
          backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'white',
        },
        styles.wrapperCustom,
      ]}>
      {({ pressed }) => (
        <Text style={styles.text}>{pressed ? 'Stopped!' : 'Stop Me'}</Text>
      )}
    </Pressable>
  );

  return (
    <SafeAreaView style={styles.conterB}>
       {status === false ? start() : stop()}
      <View style={styles.logBox}>
        <Text style={styles.txt}>{count}</Text>
      </View>
    </SafeAreaView>
  );
};

export default CounterB;

const styles = StyleSheet.create({
  conterB: { margin : 15},
});
