import React, {Component} from 'react';
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

export default class MainProjectScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      userSelected: [],
      data: [
        {
          id: 1,
          name: 'PMS',
          position: 'Project Management System',
          image:
            'data:image/jpeg;base64,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',

          about:
            'Project management software is software used for project planning, scheduling, resource allocation and change management. It allows project managers (PMs), stakeholders and users to control costs and manage budgeting, quality management and documentation and also may be used as an administration system. Project management software is also used for collaboration and communication between project stakeholders. Project coordinator and Project guides a simple web portal to manage and monitor the overall project activities. All the modules of the system have a unique user id and password. Then any module can login into the system using their id and password to get authenticated further. PMS allows the group of students to provide at least three project domains and then the system will automatically assign the guides to the groups of students. Project coordinator is the main module of the system which assigns various tasks to the Developers',
        },
      ],
    };
  }

  clickEventListener = item => {
    this.setState({userSelected: item}, () => {
      this.setModalVisible(true);
    });
  };

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
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
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                style={styles.card}
                onPress={() => {
                  this.clickEventListener(item);
                }}>
                <Image style={styles.image} source={{uri: item.image}} />
                <View style={styles.cardContent}>
                  <Text style={styles.headerm}>{item.name}</Text>
                  <Text style={styles.position}>{item.position}</Text>
                  <TouchableOpacity
                    style={styles.followButton}
                    onPress={() => this.clickEventListener(item)}>
                    <Text style={styles.followButtonText}>Open</Text>
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
                    source={{uri: this.state.userSelected.image}}
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
              <View style={{alignSelf: 'center'}}>
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
    marginTop: 10,
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
    fontSize: 17,
    flex: 1,
    alignSelf: 'center',
    color: '#3B71F3',
    fontWeight: 'bold',
    marginLeft: 35,
  },

  name: {
    fontSize: 17,
    flex: 1,
    alignSelf: 'center',
    color: '#3B71F3',
    fontWeight: 'bold',
    marginTop: 5,
    marginBottom: 5,
  },
  position: {
    fontSize: 12,
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
    marginBottom: 10,
  },
  about: {
    marginHorizontal: 10,
  },

  followButton: {
    marginTop: 10,

    height: 30,
    width: 75,
    flexDirection: 'column',
    justifyContent: 'center',

    alignItems: 'center',
    borderRadius: 30,
    // backgroundColor: '#3B71F3',
    marginLeft: 70,
  },
  followButtonText: {
    color: '#3B71F3',
    fontSize: 15,
    fontWeight: '800',
  },
  txtClose: {
    color: '#3B71F3',
    fontSize: 16,
    marginBottom: 10,
    // backgroundColor: '#3B71F3',
    height: 33,
    width: 80,
    textAlign: 'center',
    // borderRadius: 20,
    fontWeight: '500',
  },
  /**** modals ****/
  popup: {
    backgroundColor: 'white',
    marginTop: 20,
    marginHorizontal: 20,
    borderRadius: 7,
    height: 700,
  },
  popupOverlay: {
    backgroundColor: '#00000057',
    flex: 1,
    marginTop: 30,
  },
  popupContent: {
    alignItems: 'center',
    // margin: 5,
    height: 600,
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
