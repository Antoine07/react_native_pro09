import React from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, FlatList, ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { average, toggle_order_notes } from '../actions/actions-types';

import Student from '../components/Student';

import Styles from '../Styles';

const StudentScreen = ({ navigation }) => {

    const { students, order } = useSelector(state => state);
    const dispatch = useDispatch();

    if (students.length === 0)
        return (
            <View style={[Styles.ctActiveIndicator, Styles.hActiveIndicator]}>
                <ActivityIndicator size="large" color="#00ff00" />
            </View>
        )

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
                style={Styles.buttonContainer}
                onPress={() => dispatch(toggle_order_notes())}
            >
                <Text style={Styles.buttonText}> {order ? 'Order notes asc' : 'Order notes desc'} </Text>
            </TouchableOpacity>
            <FlatList
                data={students}
                /** renommer une variable dans une décomposition item : student */
                renderItem={({ item: student }) => {
                    const { notes } = student;

                    return (
                        <Student
                            navigation={navigation}
                            student={student}
                            average={average(notes)}
                        />
                    )
                }}

                keyExtractor={item => item.id.toString()}
            />
        </SafeAreaView>
    );
}

export default StudentScreen;