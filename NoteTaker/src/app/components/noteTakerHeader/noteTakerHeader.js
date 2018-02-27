import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import styles from './noteTakerHeader.style';

class NoteTakerHeader extends Component {
  render() {
    return (
      <View style={styles.noteContainer}>
        <Text style={styles.noteTopTitle}>
          {this.props.noteTitle}
        </Text>
        <Button title="en" style={styles.noteLangButton} />
      </View>
    );
  }
}

export default NoteTakerHeader;
