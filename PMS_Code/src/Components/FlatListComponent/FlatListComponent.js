import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import React from 'react';

function Item({ item }) {
  return (
    <View style={styles.listItem}>
      <Image
        source={{ uri: item.pic }}
        style={{ width: 60, height: 60, borderRadius: 30 }}
      />
      <View style={{ alignItems: 'center', flex: 1 }}>
        <Text style={{ fontWeight: 'bold' }}>{item.title}</Text>
        <Text>{item.details}</Text>
      </View>
      <TouchableOpacity
        style={{
          height: 50,
          width: 50,
          justifyContent: 'center',
          alignItems: 'center',
        }}></TouchableOpacity>
    </View>
  );
}
export default class FlatListComponent extends React.Component {
  state = {
    data: [
      {
        key: 1,
        title: 'Kishan Kumar',
        details: 'Onboarding Screen Added with Updates',
        pic: 'https://randomuser.me/api/portraits/men/97.jpg',
      },
      {
        key: 2,
        title: 'Vedangi Patel',
        details: 'Profile Screen Added with edit profile feature',
        pic: 'https://randomuser.me/api/portraits/women/57.jpg',
      },
      {
        key: 3,
        title: 'Aishwarya Birewar',
        details: 'Splash Screen Updated',
        pic: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=707b9c33066bf8808c934c8ab394dff6',
      },
      // {
      //   key: 4,
      //   title: 'Parth Rana',
      //   details: 'Integration Done for the Project..',
      //   pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCglgC3HBBR1077cPmES_UKP2CebigAOFDXPSLY9sTBSLimPemOFmfPeNpYOec8fL3IVA&usqp=CAU',
      // },
    ],
  };

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          style={{ flex: 1 }}
          data={this.state.data}
          renderItem={({ item }) => <Item item={item} />}
          keyExtractor={item => item.key}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
    marginTop: 10,
  },
  listItem: {
    margin: 10,
    padding: 10,
    backgroundColor: '#FFF',
    width: '95%',
    flex: 1,
    alignSelf: 'center',
    flexDirection: 'row',
    // borderRadius: 5,
  },
});

// import { StyleSheet, View, Text, ScrollView } from 'react-native';
// import React, { useState } from 'react';

// export default function FlatLiat() {

//     const [people, setPeople] = useState([
//         { name: 'John', key: '1' },
//         { name: 'Kishan', key: '2' },
//         { name: 'Aish', key: '3' },
//         { name: 'Aishwarya', key: '4' },
//         { name: 'Vedangi', key: '5' },
//         { name: 'Mahi', key: '6' },
//     ]);

//     return (
//         <View style={styles.container}>

//             <ScrollView>
//                 {people.map((item) => {
//                     return (
//                         <View key={item.key}>
//                             <Text style={styles.item}>{item.name}</Text>
//                         </View>
//                     )
//                 })}
//             </ScrollView>
//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#fff',
//         paddingTop: 5,
//         paddingHorizontal: 10,
//     },

//     item: {
//         marginTop: 24,
//         padding: 30,
//         backgroundColor: '#F2F3F4',
//         fontSize: 24,
//     },
// });
