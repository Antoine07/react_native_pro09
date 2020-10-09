import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

const Log = () => {
  const { statistic } = useSelector((state) => state.log);

  return (
    <SafeAreaView style={styles.log}>

      <View style={styles.logBox}>
        <Text style={styles.txt}>Statistic Log counter A B</Text>
      </View>
      <FlatList
        data={[...statistic]}
        renderItem={({ item }) => {
          const [countName, count] = item;

          return (
            <Text>{countName} count : {count}</Text>
          )
        }}

        keyExtractor = {(item, index) => index.toString() }
      />
    </SafeAreaView>
  );
};

export default Log;

const styles = StyleSheet.create({
  log: {
    flex: 1
  },
});
