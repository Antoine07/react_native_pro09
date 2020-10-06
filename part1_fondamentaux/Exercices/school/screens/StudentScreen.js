import React from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import Student from '../components/Student';

import Styles from '../Styles';

const StudentScreen = ({ navigation }) => {

    const { students } = useSelector(state => state);

    return (
        <SafeAreaView style={{ flex: 1, alignItems: 'center' }}>
            <TouchableOpacity
                style={Styles.buttonContainer}
                title="Go to Home"
                onPress={() => navigation.navigate('Home')}
            >
                <Text style={Styles.buttonText}> Home </Text>
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
                        />
                    )
                }}

                keyExtractor={item => item.id.toString() }
            />
        </SafeAreaView>
    );
}

export default StudentScreen;