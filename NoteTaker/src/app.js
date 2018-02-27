// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  * @flow
//  */
//
// import React, { Component } from 'react';
// import {
//   Platform,
//   StyleSheet,
//   Text,
//   View
// } from 'react-native';
//
// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' +
//     'Cmd+D or shake for dev menu',
//   android: 'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });
//
// type Props = {};
// export default class App extends Component<Props> {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.welcome}>
//           Welcome to React Native!
//         </Text>
//         <Text style={styles.instructions}>
//           To get started, edit App.js
//         </Text>
//         <Text style={styles.instructions}>
//           {instructions}
//         </Text>
//       </View>
//     );
//   }
// }
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Header,
} from 'react-native';
import MainBody from './app/components/mainBody/mainBody';

class NoteTaker extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Start taking Notes
        </Text>
        <MainBody />
        <Text style={styles.welcome}>
          About us
        </Text>
      </View>
    );
  }
}
const styles = {
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    paddingLeft: 10,
    paddingRight: 10,
  },
  welcome: {
    flex: 0.5,
    fontSize: 20,
    margin: 10,
    borderBottomWidth: 1,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
};
export default NoteTaker;
