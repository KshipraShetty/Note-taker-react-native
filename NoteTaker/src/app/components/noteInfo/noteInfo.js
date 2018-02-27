import React, { Component } from 'react';
import { Text } from 'react-native';
import styles from './noteInfo.style';


class NoteInfo extends Component {
  render() {
    return (
      <Text style={styles.noteInfo}>
        {this.props.noteInfo}
      </Text>
    );
  }
}

export default NoteInfo;
