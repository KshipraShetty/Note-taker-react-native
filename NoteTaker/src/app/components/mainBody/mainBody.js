import React, { Component } from 'react';
import { View } from 'react-native';
import styles from './mainBody.style';
import NoteTakerHeader from '../noteTakerHeader/noteTakerHeader';
import NoteTitle from '../noteTitle/noteTitle';
import NoteInfo from '../noteInfo/noteInfo';

class MainBody extends Component {
  render() {
    return (
      <View style={styles.MainContainer}>
        <NoteTakerHeader noteTitle="Note Title" />
        <NoteTitle />
        <NoteInfo noteInfo="Please enter your notes here" />
      </View>
    );
  }
}

export default MainBody;
