import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  Dimensions,
  Modal,
  ScrollView,
} from 'react-native';

export default class RecentProjectScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      userSelected: [],
      data: [
        {
          id: 1,
          name: 'Work Smart',
          position: 'Website',
          image:
            'data:image/png;base64,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',
          about:
            'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.',
        },
        {
          id: 2,
          name: 'CRM',
          position: 'Mobile Application',
          image:
            'data:image/jpeg;base64,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',
          about:
            'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.',
        },
        {
          id: 3,
          name: 'Prydan Blog',
          position: 'Website',
          image:
            'https://upwork-usw2-prod-assets-static.s3.us-west-2.amazonaws.com/org-logo/1235158278842847232',
          about:
            'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.',
        },
        {
          id: 4,
          name: 'ERP',
          position: 'Mobile Application',
          image:
            'https://thumbs.dreamstime.com/b/erp-enterprise-resource-planning-icon-sign-logo-erp-enterprise-resource-planning-icon-sign-logo-white-background-151157452.jpg',
          about:
            'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.',
        },
      ],
    };
  }

  clickEventListener = item => {
    this.setState({ userSelected: item }, () => {
      this.setModalVisible(true);
    });
  };

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          style={styles.userList}
          columnWrapperStyle={styles.listContainer}
          data={this.state.data}
          keyExtractor={item => {
            return item.id;
          }}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                style={styles.card}
                onPress={() => {
                  this.clickEventListener(item);
                }}>
                <Image style={styles.image} source={{ uri: item.image }} />
                <View style={styles.cardContent}>
                  <Text style={styles.headerm}>{item.name}</Text>
                  <Text style={styles.position}>{item.position}</Text>
                  <TouchableOpacity
                    style={styles.followButton}
                    onPress={() => this.clickEventListener(item)}>
                    <Text style={styles.followButtonText}>About</Text>
                  </TouchableOpacity>
                </View>
              </TouchableOpacity>
            );
          }}
        />

        <Modal
          animationType={'fade'}
          transparent={true}
          onRequestClose={() => this.setModalVisible(false)}
          visible={this.state.modalVisible}>
          <View style={styles.popupOverlay}>
            <View style={styles.popup}>
              <View style={styles.popupContent}>
                <ScrollView contentContainerStyle={styles.modalInfo}>
                  <Image
                    style={styles.image2}
                    source={{ uri: this.state.userSelected.image }}
                  />
                  <Text style={styles.name}>
                    {this.state.userSelected.name}
                  </Text>
                  <Text style={styles.position2}>
                    {this.state.userSelected.position}
                  </Text>
                  <Text style={styles.about}>
                    {this.state.userSelected.about}
                  </Text>
                </ScrollView>
              </View>
              <View style={{ alignSelf: 'center' }}>
                <View style={styles.popupButtons}>
                  <TouchableOpacity
                    onPress={() => {
                      this.setModalVisible(false);
                    }}
                    style={styles.btnClose}>
                    <Text style={styles.txtClose}>Close</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 15,
    marginLeft: 0,
    marginRight: 0,
    backgroundColor: '#eeeeee',
  },
  header: {
    backgroundColor: '#00CED1',
    height: 200,
    alignSelf: 'center',
  },
  headerContent: {
    padding: 30,
    alignItems: 'center',
    // flex: 1,
  },
  detailContent: {
    top: 80,
    height: 500,
    // width: Dimensions.get('screen').width - 90,
    marginHorizontal: 30,
    flexDirection: 'row',
    position: 'absolute',
    backgroundColor: '#ffffff',
  },
  userList: {
    flex: 1,
  },
  cardContent: {
    marginLeft: 20,
    marginTop: 10,
  },
  image: {
    width: 90,
    height: 90,
    borderRadius: 45,
    alignSelf: 'center',
  },
  image2: {
    width: 90,
    height: 90,
    borderRadius: 45,
    alignSelf: 'center',
    marginTop: 5,
  },

  card: {
    shadowColor: '#00000021',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,

    marginVertical: 10,
    marginHorizontal: 20,
    backgroundColor: 'white',
    flexBasis: '46%',
    padding: 10,
    flexDirection: 'row',
  },
  headerm: {
    fontSize: 15,
    flex: 1,
    alignSelf: 'center',
    color: '#3B71F3',
    fontWeight: 'bold',
    marginLeft: 35,
  },

  name: {
    fontSize: 15,
    flex: 1,
    alignSelf: 'center',
    color: '#3B71F3',
    fontWeight: 'bold',
    marginTop: 5,
    marginBottom: 5,
  },
  position: {
    fontSize: 14,
    flex: 1,
    alignSelf: 'center',
    color: '#696969',
    marginLeft: 35,
  },
  position2: {
    fontSize: 14,
    flex: 1,
    alignSelf: 'center',
    color: '#696969',
  },
  about: {
    marginHorizontal: 10,
  },

  followButton: {
    marginTop: 10,
    height: 30,
    width: 75,
    flexDirection: 'row',
    justifyContent: 'center',

    alignItems: 'center',
    borderRadius: 30,
    backgroundColor: '#3B71F3',
    marginLeft: 52,
  },
  followButtonText: {
    color: '#FFFFFF',
    fontSize: 12,
  },
  txtClose: {
    color: '#FFFFFF',
    fontSize: 15,
    marginBottom: 10,
    backgroundColor: '#3B71F3',
    height: 33,
    width: 80,
    textAlign: 'center',
    borderRadius: 20,
    fontWeight: '500',
  },
  /**** modals ****/
  popup: {
    backgroundColor: 'white',
    marginTop: 80,
    marginHorizontal: 20,
    borderRadius: 7,
  },
  popupOverlay: {
    backgroundColor: '#00000057',
    flex: 1,
    marginTop: 30,
  },
  popupContent: {
    alignItems: 'center',
    // margin: 5,
    height: 250,
  },
  popupHeader: {
    marginBottom: 45,
    alignSelf: 'center',
  },
  popupButtons: {
    marginTop: 15,
    flexDirection: 'row',
    borderTopWidth: 1,
    borderColor: '#eee',
    justifyContent: 'center',
  },
  popupButton: {
    flex: 1,
    marginVertical: 16,
  },
  // btnClose: {
  //   height: 20,
  //   // backgroundColor: '#20b2aa',
  //   backgroundColor: '#3B71F3',
  //   padding: 20,
  // },
  modalInfo: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
