// import {View, Text} from 'react-native';
// import React from 'react';

// const MainProjectScreen = () => {
//   return <View>{/* <Text>MainProjectScreen</Text> */}</View>;
// };

// export default MainProjectScreen;
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
        <Text style={{alignItems: 'center', fontWeight: 'bold'}}>
          {item.name}
        </Text>
        <Text>{item.position}</Text>
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

export default class MainProjectScreen extends React.Component {
  state = {
    data: [
      {
        key: 1,
        name: 'CRM',
        email: 'miyah.myles@gmail.com',
        position: 'Customer Relationship Management',
        photo: 'https://www.crmsoftwareapp.com/f_logo.png',
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
    margin: 8,
    padding: 25,
    backgroundColor: '#FFF',
    width: '95%',
    flex: 1,
    alignSelf: 'center',
    flexDirection: 'row',
    // borderRadius: 5,
  },
});
