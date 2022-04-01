import { StyleSheet, View, Text, ScrollView } from 'react-native';
import React, { useState } from 'react';

export default function FlatLiat() {

    const [people, setPeople] = useState([
        { name: 'John', key: '1' },
        { name: 'Kishan', key: '2' },
        { name: 'Aish', key: '3' },
        { name: 'Aishwarya', key: '4' },
        { name: 'Vedangi', key: '5' },
        { name: 'Mahi', key: '6' },
    ]);

    return (
        <View style={styles.container}>

            <ScrollView>
                {people.map((item) => {
                    return (
                        <View key={item.key}>
                            <Text style={styles.item}>{item.name}</Text>
                        </View>
                    )
                })}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 5,
        paddingHorizontal: 10,
    },

    item: {
        marginTop: 24,
        padding: 30,
        backgroundColor: '#F2F3F4',
        fontSize: 24,
    },
});