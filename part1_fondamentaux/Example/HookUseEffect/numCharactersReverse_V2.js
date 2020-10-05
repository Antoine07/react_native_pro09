import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TextInput, Button } from 'react-native';

const Tea = ({ genre, count }) => {

  useEffect(() => {
    console.log(genre, count)

  }, [ count ]);

  // pour un pur démontage du composant dans la "vue"
  useEffect(() => {

    return () => {
      console.log("tea time is dead !")
    }

  }, [ ]);

  return (
    <View>
      <Text>Tea time : {genre}</Text>
    </View>
  )
}

const App = () => {
  const [sentence, setSentence] = useState('');
  const [count, setCount] = useState(0);

  const calcul = (sentence) =>
      sentence
        .split(' ')
        .map((w) => w.length)
        .filter((w) => w != 0)
        .join(' ');

  const onPressReverse = () => {
    if (sentence) {
      const reverseSentence = sentence
        .split(' ')
        .map((word) => word.split('').reverse().join(''))
        .join(' ');

      setSentence(reverseSentence);
    }
  };

 // effet de bord cela permet d'écouter un state qui a son état modifié
 // en fonction du changement d'un state on fera autre chose 
  useEffect(() => {
    const lastChar = sentence.split('').pop() ;

    if( lastChar && lastChar != " "){
      setCount( count =>  count + 1  );
    }
  }, [ sentence ]);

  // useEffect peut s'exécuter au montage une fois seulement dans ce cas 
  // ne mettez rien dans les crochets
   useEffect(() => {
     setCount(count => 0) ;
  }, []);

  return (
    <View style={styles.container}>
      <Text>Number character(s)</Text>
      <Text>{count}</Text>
      <View style={styles.blue}>
        <TextInput
          style={styles.numberField}
          onChangeText={setSentence}
          value={sentence}
        />
      </View>
      {sentence != '' && (
        <>
          <View style={[styles.sky, styles.numberField]}>
            <Text>{sentence}</Text>
            <Text> {calcul(sentence)} </Text>
          </View>
          <View style={styles.numberField}>
            <Button
              onPress={onPressReverse}
              title="Reverse"
              color="#000"
              accessibilityLabel="Reverse sentense"
            />
          </View>
          <View style={styles.numberField}>
            <Button
              onPress={() => setSentence('')}
              title="Clean"
              color="#000"
              accessibilityLabel="Clean sentense"
            />
          </View>
        </>
      )}

      { ( count >= 5 && count < 10 )  && <Tea genre="Menthe" count={count} /> }
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
