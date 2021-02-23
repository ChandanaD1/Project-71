import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import AppHeader from '../components/AppHeader'

export default class ReadStoryScreen extends React.Component {
  render() {
    return (
      <View>
        <AppHeader title = 'Read Story Screen'/>
        <Text style={styles.text}>Read Story</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    text:{
        fontWeight: 'bold',
        fontFamily: 'Times New Roman',
        textAlign: 'center',
        fontSize: 40,
    },
}) 