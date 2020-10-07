import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

import Styles from '../Styles';

const Student = ({ navigation, student }) => {

    const { id, name, attendance, lessons } = student;

    return (
        <TouchableOpacity
            onPress={() => navigation.navigate('Abscence', { id })}
        >
            <View style={[Styles.student, { flex: 1, flexDirection: "row" }]}>
                <View style={{ width: 110 }}>
                    <Image
                        source={{ uri: `http://lorempixel.com/100/100/cats/${id}` }}
                        style={{ width: 100, height: 100, marginRight: 10 }}
                    />
                </View>
                <View style={{ width: 200 }}>
                    <Text>{name}</Text>
                    <Text style={{ padding: 2, marginBottom: 2 }}>
                        Nombre d'abscence(s) {attendance}
                    </Text>
                    <Text style={{ padding: 2, marginBottom: 2 }}>
                        Nombre de cours  {lessons ? lessons.lenght : 0}
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}

export default Student;