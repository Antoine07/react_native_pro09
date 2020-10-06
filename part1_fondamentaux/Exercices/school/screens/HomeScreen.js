import React from 'react';
import {  View, Text, TouchableOpacity } from 'react-native';

import Styles from '../Styles';

const HomeScreen = ({ navigation }) => {
    return (
        <View style={Styles.container}>
            <Text>Home</Text>
            <TouchableOpacity
                style={Styles.buttonContainer}
                title="Go to Students"
                onPress={() => navigation.navigate('Students')}
            >
                <Text style={Styles.buttonText}> Students </Text>
            </TouchableOpacity>
        </View>
    );
}

export default HomeScreen;