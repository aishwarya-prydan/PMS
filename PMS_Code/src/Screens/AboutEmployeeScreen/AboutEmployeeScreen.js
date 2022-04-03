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
        <Text style={{color: 'green'}}>Open</Text>
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
        name: 'Kishan Das',
        email: 'june.cha@gmail.com',
        position: 'Python Developer',
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
