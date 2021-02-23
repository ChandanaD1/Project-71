import React from 'react';
import { Text, View, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import AppHeader from '../components/AppHeader'
import fs from '../config'
import firebase from 'firebase'

export default class WriteStoryScreen extends React.Component {
    constructor() {
        super();
        this.state = {
            inputT: '',
            inputA: '',
            inputS: '',
            title: '',
            author: '',
            story: '',
            
        };
      }

      submitStory = async () => {
        this.setState({ 
            title: this.state.inputT,
            author: this.state.inputA,
            story: this.state.inputS,
         })
        fs.collection("stories").add({
            'title': this.state.title,
            'author': this.state.author,
            'story': this.state.story,
        })
      }
  render() {
    return (
      <View>
        <AppHeader title = 'Write Story Screen'/>
        <TextInput placeholder="Title of the Story" 
        onChangeText={(text) => {
            this.setState({ inputT: text });
        }}
        value={this.state.inputT}></TextInput>
        <TextInput placeholder="Author of the Story" style={{marginTop: 10}}
        onChangeText={(text) => {
            this.setState({ inputA: text });
        }}
        value={this.state.inputA}></TextInput>
        <TextInput placeholder="Write Story" multiline numberOfLines={10} style={{marginTop: 10}}
        onChangeText={(text) => {
            this.setState({ inputS: text });
        }}
        value={this.state.inputS}></TextInput>
        <TouchableOpacity style = {styles.submitButton} onPress={async()=> {this.submitStory()}}>
            <Text style = {styles.submitText}>Submit</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    submitButton:{ 
        marginTop: 20, 
        width: 100, 
        height: 50,
        borderWidth: 2, 
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
        backgroundColor: "#FFD3CA",
    },
    submitText:{
        fontWeight: 'bold',
    }
}) 