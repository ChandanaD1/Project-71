import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import ReadStoryScreen from './screens/ReadStoryScreen';
import WriteStoryScreen from './screens/WriteStoryScreen';
import {createBottomTabNavigator} from 'react-navigation-tabs'
import {createAppContainer} from 'react-navigation'

export default class App extends React.Component {
  render() {
    return (
      <AppContainer/>
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

const tabNavigator = createBottomTabNavigator ({
  ReadStoryScreen: {screen: ReadStoryScreen},
  WriteStoryScreen: {screen: WriteStoryScreen},
},
{
  defaultNavigationOptions: ({navigation})=> ({
    tabBarIcon: ({})=> {
      const routeName= navigation.state.routeName
      if(routeName=="ReadStoryScreen") {
        return(
          <Image style={{width:40,height:40}} source={require('./images/read.png')}></Image>
        )
      } else if(routeName=="WriteStoryScreen") {
        return(
          <Image style={{width:40,height:40}} source={require('./images/write.png')}></Image>
        )
      }
    }
  })
})

const AppContainer = createAppContainer (tabNavigator)