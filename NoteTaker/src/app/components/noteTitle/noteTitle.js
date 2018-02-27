import React, { Component } from 'react';
import { TextInput, View } from 'react-native';
import styles from './noteTitle.style';


class NoteTitle extends Component {
  render() {
    return (
      <View style={styles.noteTitle}>
        <TextInput />
      </View>
    );
  }
}

export default NoteTitle;
