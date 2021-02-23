import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Header} from 'react-native-elements'

export default class AppHeader extends React.Component {
  render() {
    return (
        <Header centerComponent={{text:this.props.title, style:{color: "#FD684A", fontSize: 20, fontWeight:'bold'}} }
        backgroundColor= "#FFD3CA"/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
