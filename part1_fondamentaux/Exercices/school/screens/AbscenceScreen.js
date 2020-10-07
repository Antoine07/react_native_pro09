import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator, SafeAreaView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import Styles from '../Styles';

const AbscenceScreen = ({ navigation, route }) => {
    const { id } = route.params;
    const { student } = useSelector(state => state);
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch({ type: 'GET_STUDENT', id });
    }, [id]); // on peut parfaitement watcher une props

    if (student === null)
        return (
            <View style={[Styles.ctActiveIndicator, Styles.hActiveIndicator]}>
                <ActivityIndicator size="large" color="#00ff00" />
            </View>
        )

    const { attendance, name } = student;

    return (
        <SafeAreaView style={{ flex: 1, alignItems: 'center' }}>
            <TouchableOpacity
                style={Styles.buttonContainer}
                title="Go to Home"
                onPress={() => navigation.navigate('Home')}
            >
                <Text style={Styles.buttonText}> Home </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={attendance > 0 ? Styles.buttonContainer : Styles.buttonDisable}
                onPress={() => dispatch({ type: 'DECREMENT_ATTENDANCE', sens: -1, id })}
                disabled={attendance > 0 ? false : true}
            >
                <Text style={Styles.buttonText}> Décrémenter -1 </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={Styles.buttonContainer}
                onPress={() => dispatch({ type: 'INCREMENT_ATTENDANCE', sens: 1, id })}
            >
                <Text style={Styles.buttonText}> Décrémenter +1 </Text>
            </TouchableOpacity>
            <View>
                <Text>Name : {name} </Text>
                <Text>Nombre d'abscence(s) : {attendance}</Text>
            </View>
        </SafeAreaView>
    );
}

export default AbscenceScreen;