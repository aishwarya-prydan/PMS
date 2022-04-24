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

export default class AboutEmployeeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      userSelected: [],
      data: [
        {
          id: 1,
          name: 'Kishan Kumar',
          position: 'Full Stack Developer',
          image: 'https://randomuser.me/api/portraits/men/94.jpg',
          about:
            'Kishan has professional experience working with Python, React Native, HTML, CSS, DJAngo.Experience with building pixel perfect  UIs that match designs. Expert in developing Mobile based applications and cross browser applications. Love coding and look forward to taking on complex features. Proven ability to analyse problems, root causes, and develop innovative solutions to business challenges and streamlining operations.  Worked on GIT for version control, Code Review Performed Unit testing. Experience working with Redux. Created Reusable react presentation and container components. Good understanding and usage of states and props. Implemented EcmaScript6 (ES6) arrow functions, constants, block-scope variables, class inheritance. Solid experience of redux development using Babel, Web pack, NPM.',
        },
        {
          id: 2,
          name: 'Vedangi Patel',
          position: 'React Native Developer',
          image: 'https://randomuser.me/api/portraits/women/57.jpg',
          about:
            ' Vedangi has professional experience working with Python, React Native, HTML, CSS, DJAngo.Experience with building pixel perfect  UIs that match designs. Expert in developing Mobile based applications and cross browser applications. Love coding and look forward to taking on complex features. Proven ability to analyse problems, root causes, and develop innovative solutions to business challenges and streamlining operations.  Worked on GIT for version control, Code Review Performed Unit testing. Experience working with Redux. Created Reusable react presentation and container components. Good understanding and usage of states and props. Implemented EcmaScript6 (ES6) arrow functions, constants, block-scope variables, class inheritance. Solid experience of redux development using Babel, Web pack, NPM.',
        },
        {
          id: 3,
          name: 'Aishwarya Birewar',
          position: 'React Native Developer',
          image:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=707b9c33066bf8808c934c8ab394dff6',
          about:
            'Aishwarya has professional experience working with Python, React Native, HTML, CSS, DJAngo.Experience with building pixel perfect  UIs that match designs. Expert in developing Mobile based applications and cross browser applications. Love coding and look forward to taking on complex features. Proven ability to analyse problems, root causes, and develop innovative solutions to business challenges and streamlining operations.  Worked on GIT for version control, Code Review Performed Unit testing. Experience working with Redux. Created Reusable react presentation and container components. Good understanding and usage of states and props. Implemented EcmaScript6 (ES6) arrow functions, constants, block-scope variables, class inheritance. Solid experience of redux development using Babel, Web pack, NPM.',
        },
        {
          id: 4,
          name: 'Abishek Yadav',
          position: 'Dot Net Developer',
          image: 'https://randomuser.me/api/portraits/men/20.jpg',
          about:
            'Abhishek has professional experience working with Python, React Native, HTML, CSS, DJAngo.Experience with building pixel perfect  UIs that match designs. Expert in developing Mobile based applications and cross browser applications. Love coding and look forward to taking on complex features. Proven ability to analyse problems, root causes, and develop innovative solutions to business challenges and streamlining operations.  Worked on GIT for version control, Code Review Performed Unit testing. Experience working with Redux. Created Reusable react presentation and container components. Good understanding and usage of states and props. Implemented EcmaScript6 (ES6) arrow functions, constants, block-scope variables, class inheritance. Solid experience of redux development using Babel, Web pack, NPM.',
        },
        {
          id: 5,
          name: 'Mihir Koshti',
          position: 'Dot Net Developer',
          image: 'https://randomuser.me/api/portraits/men/39.jpg',
          about:
            'Mihir  has professional experience working with Python, React Native, HTML, CSS, DJAngo.Experience with building pixel perfect  UIs that match designs. Expert in developing Mobile based applications and cross browser applications. Love coding and look forward to taking on complex features. Proven ability to analyse problems, root causes, and develop innovative solutions to business challenges and streamlining operations.  Worked on GIT for version control, Code Review Performed Unit testing. Experience working with Redux. Created Reusable react presentation and container components. Good understanding and usage of states and props. Implemented EcmaScript6 (ES6) arrow functions, constants, block-scope variables, class inheritance. Solid experience of redux development using Babel, Web pack, NPM.',
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
    marginLeft: 52,
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
