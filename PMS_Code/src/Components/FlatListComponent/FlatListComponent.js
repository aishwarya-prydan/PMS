import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import React from 'react';

function Item({item}) {
  return (
    <View style={styles.listItem}>
      <Image
        source={{uri: item.pic}}
        style={{width: 60, height: 60, borderRadius: 30}}
      />
      <View style={{alignItems: 'center', flex: 1}}>
        <Text style={{fontWeight: 'bold'}}>{item.title}</Text>
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
        title: 'Mahendra Parmar',
        details: 'Onboarding Screen Added with Updates',
        pic: 'https://cdn-ajggd.nitrocdn.com/kMoOFpDlsOVtlYJLrnSRNCQXaUFHZPTY/assets/static/optimized/rev-1786124/wp-content/uploads/2021/06/Cool-profile-picture-Zoom.jpg',
      },
      {
        key: 2,
        title: 'Parth Patel',
        details: 'Profile Screen Added with edit profile feature',
        pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYH_VDaGfxQ_cPhkgDPyoxXJgnnKHzEw7kdg&usqp=CAU',
      },
      {
        key: 3,
        title: 'Shivam Sharma',
        details: 'Splash Screen Updated',
        pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZLbGYytOlD9VGApZn68STwAeeyP5lcOiIvA&usqp=CAU',
      },
      {
        key: 4,
        title: 'Parth Rana',
        details: 'Integration Done for the Project..',
        pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCglgC3HBBR1077cPmES_UKP2CebigAOFDXPSLY9sTBSLimPemOFmfPeNpYOec8fL3IVA&usqp=CAU',
      },
    ],
  };

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          style={{flex: 1}}
          data={this.state.data}
          renderItem={({item}) => <Item item={item} />}
          keyExtractor={item => item.email}
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
