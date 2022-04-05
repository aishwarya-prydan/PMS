import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';

function Item({item}) {
  return (
    <View style={styles.listItem}>
      <Image
        source={{uri: item.photo}}
        style={{width: 60, height: 60, borderRadius: 30}}
      />
      <View style={{alignItems: 'center', flex: 1}}>
        <Text style={{fontWeight: 'bold'}}>{item.name}</Text>
        <Text>{item.position}</Text>
      </View>
      <TouchableOpacity
        style={{
          height: 50,
          width: 50,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{color: 'green'}}>See More</Text>
      </TouchableOpacity>
    </View>
  );
}

export default class AboutEmployeeScreen extends React.Component {
  state = {
    data: [
      {
        name: 'Aishwarya Birewar',
        email: 'miyah.myles44@gmail.com',
        profile: '',
        position: 'React Native Developer',
        photo: 'https://randomuser.me/api/portraits/women/44.jpg',
      },
      {
        name: 'Vedangi Patel',
        email: 'miyah.myles@gmail.com',
        position: 'React Native Developer',
        photo:
          'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=707b9c33066bf8808c934c8ab394dff6',
      },
      {
        name: 'Kishan Kumar',
        email: 'june.cha@gmail.com',
        position: 'Python and React Native Developer',
        photo: 'https://randomuser.me/api/portraits/men/97.jpg',
      },
      {
        name: 'Mahendra Parmar',
        email: 'mahi@gmail.com',
        position: 'React Js Developer',
        photo: 'https://randomuser.me/api/portraits/men/97.jpg',
      },
      {
        name: 'Abhishek Yadav',
        email: 'abhishek@gmail.com',
        position: 'React Js, Dot Net and Database Developer',
        photo: 'https://randomuser.me/api/portraits/men/97.jpg',
      },
      {
        name: 'Mihir Koshti',
        email: 'mihir@gmail.com',
        position: 'Backend API and React Js Developer',
        photo: 'https://randomuser.me/api/portraits/men/97.jpg',
      },
      {
        name: 'Sachin Koshti',
        email: 'sachin@gmail.com',
        position: 'React JS Developer',
        photo: 'https://randomuser.me/api/portraits/men/97.jpg',
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

// import React, {Component} from 'react';
// import {
//   StyleSheet,
//   Text,
//   View,
//   Image,
//   TouchableOpacity,
//   FlatList,
//   Dimensions,
//   Modal,
//   ScrollView,
// } from 'react-native';

// export default class AboutEmployeeScreen extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       modalVisible: false,
//       userSelected: [],
//       data: [
//         {
//           id: 1,
//           name: 'Aishwarya Birewar',
//           email: 'miyah.myles44@gmail.com',
//           profile: '',
//           position: 'React Native Developer',
//           photo: 'https://randomuser.me/api/portraits/women/44.jpg',
//           about: 'React Native Developer',
//         },
//         {
//           id: 2,
//           name: 'Vedangi Patel',
//           email: 'miyah.myles@gmail.com',
//           position: 'React Native Developer',
//           photo:
//             'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=707b9c33066bf8808c934c8ab394dff6',
//           about:
//             'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.',
//         },
//         {
//           id: 3,
//           name: 'Kishan Kumar',
//           email: 'june.cha@gmail.com',
//           position: 'Python and React Native Developer',
//           photo: 'https://randomuser.me/api/portraits/men/97.jpg',
//           about:
//             'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.',
//         },
//         {
//           id: 4,
//           name: 'Mahendra Parmar',
//           email: 'mahi@gmail.com',
//           position: 'React Js Developer',
//           photo: 'https://randomuser.me/api/portraits/men/97.jpg',
//           about:
//             'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.',
//         },
//         {
//           id: 5,
//           name: 'Abhishek Yadav',
//           email: 'abhishek@gmail.com',
//           position: 'React Js, Dot Net and Database Developer',
//           photo: 'https://randomuser.me/api/portraits/men/97.jpg',
//           about:
//             'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.',
//         },
//         {
//           id: 6,
//           name: 'Mihir Koshti',
//           email: 'mihir@gmail.com',
//           position: 'Backend API and React Js Developer',
//           photo: 'https://randomuser.me/api/portraits/men/97.jpg',
//           about:
//             'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.',
//         },
//         {
//           id: 7,
//           name: 'Sachin Koshti',
//           email: 'sachin@gmail.com',
//           position: 'React JS Developer',
//           photo: 'https://randomuser.me/api/portraits/men/97.jpg',
//           about:
//             'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.',
//         },
//       ],
//     };
//   }

//   clickEventListener = item => {
//     this.setState({userSelected: item}, () => {
//       this.setModalVisible(true);
//     });
//   };

//   setModalVisible(visible) {
//     this.setState({modalVisible: visible});
//   }

//   render() {
//     return (
//       <View style={styles.container}>
//         <FlatList
//           style={styles.userList}
//           columnWrapperStyle={styles.listContainer}
//           data={this.state.data}
//           keyExtractor={item => {
//             return item.id;
//           }}
//           renderItem={({item}) => {
//             return (
//               <TouchableOpacity
//                 style={styles.card}
//                 onPress={() => {
//                   this.clickEventListener(item);
//                 }}>
//                 <Image style={styles.image} source={{uri: item.image}} />
//                 <View style={styles.cardContent}>
//                   <Text style={styles.name}>{item.name}</Text>
//                   <Text style={styles.position}>{item.position}</Text>
//                   <TouchableOpacity
//                     style={styles.followButton}
//                     onPress={() => this.clickEventListener(item)}>
//                     <Text style={styles.followButtonText}>About</Text>
//                   </TouchableOpacity>
//                 </View>
//               </TouchableOpacity>
//             );
//           }}
//         />

//         <Modal
//           animationType={'fade'}
//           transparent={true}
//           onRequestClose={() => this.setModalVisible(false)}
//           visible={this.state.modalVisible}>
//           <View style={styles.popupOverlay}>
//             <View style={styles.popup}>
//               <View style={styles.popupContent}>
//                 <ScrollView contentContainerStyle={styles.modalInfo}>
//                   <Image
//                     style={styles.image}
//                     source={{uri: this.state.userSelected.image}}
//                   />
//                   <Text style={styles.name}>
//                     {this.state.userSelected.name}
//                   </Text>
//                   <Text style={styles.position}>
//                     {this.state.userSelected.position}
//                   </Text>
//                   <Text style={styles.about}>
//                     {this.state.userSelected.about}
//                   </Text>
//                 </ScrollView>
//               </View>
//               <View style={{alignSelf: 'center'}}>
//                 <View style={styles.popupButtons}>
//                   <TouchableOpacity
//                     onPress={() => {
//                       this.setModalVisible(false);
//                     }}
//                     style={styles.btnClose}>
//                     <Text style={styles.txtClose}>Close</Text>
//                   </TouchableOpacity>
//                 </View>
//               </View>
//             </View>
//           </View>
//         </Modal>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     marginTop: 15,
//     marginLeft: 0,
//     marginRight: 0,
//     backgroundColor: '#eeeeee',
//   },
//   header: {
//     backgroundColor: '#00CED1',
//     height: 200,
//   },
//   headerContent: {
//     padding: 30,
//     alignItems: 'center',
//     flex: 1,
//   },
//   detailContent: {
//     top: 80,
//     height: 500,
//     width: Dimensions.get('screen').width - 90,
//     marginHorizontal: 30,
//     flexDirection: 'row',
//     position: 'absolute',
//     backgroundColor: '#ffffff',
//   },
//   userList: {
//     flex: 1,
//   },
//   cardContent: {
//     marginLeft: 20,
//     marginTop: 10,
//   },
//   image: {
//     width: 90,
//     height: 90,
//     borderRadius: 45,
//   },

//   card: {
//     shadowColor: '#00000021',
//     shadowOffset: {
//       width: 0,
//       height: 6,
//     },
//     shadowOpacity: 0.37,
//     shadowRadius: 7.49,
//     elevation: 12,

//     marginVertical: 10,
//     marginHorizontal: 20,
//     backgroundColor: 'white',
//     flexBasis: '46%',
//     padding: 10,
//     flexDirection: 'row',
//   },

//   name: {
//     fontSize: 15,
//     flex: 1,
//     alignSelf: 'center',
//     color: '#008080',
//     fontWeight: 'bold',
//     marginLeft: 35,
//   },
//   position: {
//     fontSize: 14,
//     flex: 1,
//     alignSelf: 'center',
//     color: '#696969',
//     marginLeft: 35,
//   },
//   about: {
//     marginHorizontal: 10,
//   },

//   followButton: {
//     marginTop: 10,
//     height: 30,
//     width: 75,
//     flexDirection: 'row',
//     justifyContent: 'center',
//     marginLeft: 40,
//     alignItems: 'center',
//     borderRadius: 30,
//     backgroundColor: '#3B71F3',
//     marginLeft: 52,
//   },
//   followButtonText: {
//     color: '#FFFFFF',
//     fontSize: 12,
//   },
//   txtClose: {
//     color: '#FFFFFF',
//     fontSize: 15,
//     marginBottom: 10,
//     backgroundColor: '#3B71F3',
//     // height: 20,
//     width: 45,
//   },
//   /**** modals ****/
//   popup: {
//     backgroundColor: 'white',
//     marginTop: 80,
//     marginHorizontal: 20,
//     borderRadius: 7,
//   },
//   popupOverlay: {
//     backgroundColor: '#00000057',
//     flex: 1,
//     marginTop: 30,
//   },
//   popupContent: {
//     //alignItems: 'center',
//     margin: 5,
//     height: 250,
//   },
//   popupHeader: {
//     marginBottom: 45,
//   },
//   popupButtons: {
//     marginTop: 15,
//     flexDirection: 'row',
//     borderTopWidth: 1,
//     borderColor: '#eee',
//     justifyContent: 'center',
//   },
//   popupButton: {
//     flex: 1,
//     marginVertical: 16,
//   },
//   // btnClose: {
//   //   height: 20,
//   //   // backgroundColor: '#20b2aa',
//   //   backgroundColor: '#3B71F3',
//   //   padding: 20,
//   // },
//   modalInfo: {
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
