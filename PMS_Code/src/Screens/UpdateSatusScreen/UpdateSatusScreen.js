import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import ProgressBar from '../../Components/ProgressBar/ProgressBar.js';

const data = [{
  percentage: 70,
  color: 'blue',
  max: 10
}]

export default function UpdateSatusScreen() {
  return (
    <View style={styles.container}>
      {/* <StatusBar hidden /> */}
      <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', flexWrap: 'wrap', alignItems: 'center' }}>
        {data.map((p, i) => {
          return <ProgressBar key={i} percentage={p.percentage} color={p.color} delay={500 + 100 * i} max={p.max} />
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 8,
  },

  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});




// import {StyleSheet, View, Text} from 'react-native';
// import {Dimensions} from 'react-native';
// import React from 'react';
// import Svg, {Circle} from 'react-native-svg';
// import Animated, { useSharedValue, withTiming, useAnimatedProps } from 'react-native-reanimated';

// const BACKGROUND_STROKE_COLOR = '#444B6F';
// const STROKE_COLOR = '#A6E1FA';

// const {height, width} = Dimensions.get('window');

// const CIRCLE_LEGNTH = 1000;
// const R = CIRCLE_LEGNTH / (2 * Math.PI);

// const AnimatedCircle = Animated.createAnimatedComponent(Circle);

// const UpdateSatusScreen = () => {

//   const progress = useSharedValue{0};

//   useEffect(() => {
//     progress.value = withTiming(1, {duration: 1000});
//   },
//   []);

//   const animatedProps = useAnimatedProps(() => ({
//     strokeDashoffset = CIRCLE_LEGNTH * progress.value
//   }));

//   return (
//     <View style={styles.container}>
//       <Text>UpdateSatusScreen</Text>
//       <Svg>
//         <Circle
//           cx={width / 2}
//           cy={height / 2}
//           r={R}
//           stroke={BACKGROUND_STROKE_COLOR}
//           strokeWidth={30}
//         />

//          <AnimatedCircle
//           cx={width / 2}
//           cy={height / 2}
//           r={R}
//           stroke={STROKE_COLOR}
//           strokeWidth={10}
//           strokeDasharray={CIRCLE_LEGNTH}
//           strokeDashoffset={animatedProps}
//         />

//         {/* <Circle
//           cx={width / 2}
//           cy={height / 2}
//           r={R}
//           stroke={STROKE_COLOR}
//           strokeWidth={10}
//           strokeDasharray={CIRCLE_LEGNTH}
//           strokeDashoffset={CIRCLE_LEGNTH * 0.40}
//         /> */}
//       </Svg>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'white',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

// export default UpdateSatusScreen;
