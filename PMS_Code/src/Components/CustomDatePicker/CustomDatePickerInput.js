import { StyleSheet, View, Text, Button, Platform } from 'react-native';
import React, { useState } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
// import Custominput from '../CustomInput/CustomInput.js';
function CustomDatePickerInput() {

  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [text, setText] = useState('EMPTY');

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios')
    setDate(currentDate);

    let tempDate = new Date(currentDate);
    let fDate = tempDate.getDate() + '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear();
    setText(fDate);
    console.log('fDate');
  };

  const showMode = currentMode => {
    setShow(true);
    setMode(currentMode);
  };

  return (
    <View style={styles.container}>
      <Text style={{ fontWeight: 'bold', fontSize: 20 }}> {text} </Text>
      <View style={{ Margins: 20 }}>
        <Button title="Date Picker" onPress={() => showMode('date')} />
      </View>

      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          display="default"
          onChange={onChange}
        />
      )}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default CustomDatePickerInput;




// import React, { useState } from 'react';
// import { View, Button, Platform, SafeAreaView, StyleSheet } from 'react-native';
// import DateTimePicker from '@react-native-community/datetimepicker';
// export default function CustomDatePickerInput() {
//   const [mydate, setDate] = useState(new Date());
//   const [displaymode, setMode] = useState('date');
//   const [isDisplayDate, setShow] = useState(false);
//   const changeSelectedDate = (event, selectedDate) => {
//     const currentDate = selectedDate || mydate;
//     setDate(currentDate);
//   };
//   const showMode = (currentMode) => {
//     setShow(true);
//     setMode(currentMode);
//   };
//   const displayDatepicker = () => {
//     showMode('date');
//   };
//   return (
//     <SafeAreaView style={styles.container}>
//       <View>
//         <Button onPress={displayDatepicker} title="Show date picker!" />
//       </View>
//       {isDisplayDate && (
//         <DateTimePicker
//           testID="dateTimePicker"
//           value={mydate}
//           mode={displaymode}
//           is24Hour={true}
//           display="default"
//           onChange={changeSelectedDate}
//         />
//       )}
//     </SafeAreaView>
//   );
// };
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center"
//   },
// });




// import React, { Component } from 'react';
// import DatePicker from 'react-native-custom-datetimepicker';

// export default class CustomDatePickerInput extends React.PureComponent {
//   constructor(props) {
//     super(props);
//     this.state = { date: '2016-05-15' };
//   };

//   render() {
//     return (
//       <DatePicker
//         // eslint-disable-next-line react-native/no-inline-styles
//         style={{ width: 200 }}
//         date={this.state.date}
//         mode="date"
//         placeholder="select date"
//         format="YYYY-MM-DD"
//         minDate="2016-05-01"
//         maxDate="2016-06-01"
//         confirmBtnText="Confirm"
//         cancelBtnText="Cancel"
//         customStyles={{
//           dateIcon: {
//             position: 'absolute',
//             left: 0,
//             top: 4,
//             marginLeft: 0
//           },
//           dateInput: {
//             marginLeft: 36
//           }
//           // ... You can check the source to find the other keys.
//         }}
//         onDateChange={date => {
//           this.setState({ date: date });
//         }}
//       />
//     );
//   }
// }

// import {
//   View,
//   Text,
//   Modal,
//   StyleSheet,
//   TouchableHighlight,
//   Platform,
// } from 'react-native';
// import React, {useState} from 'react';
// import DateTimePicker from '@react-native-community/datetimepicker';
// import moment from 'moment';
// import CustomInput from './../CustomInput/CustomInput';
// import CustomDatePicker from './CustomDatePickerInput';
// import CustomDatePickerInput from './CustomDatePickerInput';

// const CustomDatePicker = props => {
//   const {textStyle} = props;
//   const [date, setDate] = useState(moment());
//   const [show, setShow] = useState(false);

//   const onChange = (e, selectedDate) => {
//     setDate(moment(selectedDate));
//   };

//   return (
//     <TouchableHighlight activeOpacity={0} onPress={() => setShow(true)}>
//       <View>
//       {/* <View style={styles.container}> */}
//         <Text style={textStyle}>{date.format('yyyy-MM-dd')}</Text>
//         <Modal
//           transparent={true}
//           animationType="slide"
//           visible={show}
//           supportedOrientations={['portrait']}
//           onRequestClose={() => setShow(false)}>
//           <View style={{flex: 1}}>
//             <TouchableHighlight
//               // eslint-disable-next-line react-native/no-inline-styles
//               style={{
//                 flex: 1,
//                 alignItems: 'flex-end',
//                 flexDirection: 'row',
//               }}
//               activeOpacity={1}
//               visible={show}
//               onPress={() => setShow(false)}>
//                 <TouchableHighlight
//                   underlayColor={'#FFFFFF'}
//                   style={{
//                     flex: 1,
//                     borderTopColor: '#E9E9E9',
//                   borderTopWidth: 1,
//                 }}
//                 onPress={() => console.log('datepicker clicked')}>
//                     <View
//                       style={{
//                         backgroundColor: '#FFFFFF',
//                         height: '256',
//                         overflow: 'hidden'}}>
//                     </View>
//                         <View style={{ marginTop: '20' }}>
//                           <DateTimePicker
//                             timeZoneOffsetInMinutes={0}
//                             value={new Date(date)}
//                             mode="date"
//                             minimumDate={new Date(moment().subtract(120, 'years').format('yyyy-MM-dd'))}
//                             maximumDate={new Date(moment().format('yyyy-MM-dd'))}
//                             onChange={onChange}
//                           />
//                         </View>
//                         <TouchableHighlight
//                           underlayColor={'transparent'}
//                           onpress={() => console.log('cancelled')}
//                           style={[styles.btnText, styles.btnCancel]}>
//                           <Text> Cancel </Text>
//                         </TouchableHighlight>
//                         <TouchableHighlight
//                           underlayColor={'transparent'}
//                           onpress={() => console.log('cancelled')}
//                           style={[styles.btnText, styles.btnDone]}>
//                           <Text> Cancel </Text>
//                         </TouchableHighlight>
//                 </TouchableHighlight>
//             </TouchableHighlight>
//           </View>
//         </Modal>
//       </View>
//     </TouchableHighlight>
//   );
// };

// CustomDatePicker.defaultProps = {
//   textStyle: {},
// };

// const styles = StyleSheet.create({
//   btnText: {
//     position: 'absolute',
//     top: 0,
//     height: 42,
//     paddingHorizontal: 20,
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },

//   btnCancel: {
//     left: 0,
//   },

//   btnDone: {
//     right: 0,
//   },
// });

// export default CustomDatePicker;
