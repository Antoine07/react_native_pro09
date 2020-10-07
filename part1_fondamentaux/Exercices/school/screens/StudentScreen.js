import React from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, FlatList, ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import Student from '../components/Student';

import Styles from '../Styles';

const StudentScreen = ({ navigation }) => {

    const { students } = useSelector(state => state);

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

                keyExtractor={item => item.id.toString()}
            />
        </SafeAreaView>
    );
}

export default StudentScreen;