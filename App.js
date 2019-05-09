import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createAppContainer } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import Search from './components/search.js';
import Playlist from './components/Playlist.js';
class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.appContainer}>
        <Text>+ create</Text>
        <Playlist />
      </View>
    );
  }
}
class SearchScreen extends React.Component {
  render() {
    return (
      <View style={styles.appContainer}>
        <Search />
      </View>
    );
  }
}

class ChatScreen extends React.Component {
  render() {
    return (
      <View style={styles.appContainer}>
        <Text>let's chat!</Text>
      </View>
    );
  }
}

export default createAppContainer(
  createMaterialBottomTabNavigator(
    {
      Home: {
        screen: HomeScreen,
        navigationOptions: {
          tabBarLabel: 'Home',
          tabBarIcon: ({ tintColor }) => (
            <Icon name="ios-home" color={tintColor} size={24} />
          )
        }
      },

      Search: {
        screen: SearchScreen,
        navigationOptions: {
          tabBarLabel: 'Search',
          tabBarIcon: ({ tintColor }) => (
            <Icon name="ios-search" color={tintColor} size={24} />
          )
        }
      },
      Chat: {
        screen: ChatScreen,
        navigationOptions: {
          tabBarLabel: 'Chat',
          tabBarIcon: ({ tintColor }) => (
            <Icon name="md-chatboxes" color={tintColor} size={24} />
          )
        }
      }
    },
    {
      initialRouteName: 'Home',
      order: ['Home', 'Search', 'Chat'],
      // defaultNavigationOptions: {
      //   headerStyle: {
      //     backgroundColor: '#fff'
      //   }
      // },
      barStyle: { backgroundColor: '#694fad' }
    }
  )
);

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    // backgroundColor: '#fff',
    alignItems: 'flex-start',
    // justifyContent: 'center',
    top: 30,
    margin: 10
  }
});
