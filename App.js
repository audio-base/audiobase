import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity
} from 'react-native';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createAppContainer } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import Chatbox from './components/Chat/Chatbox.js';
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
  state = {
    text: '',
    name: ''
  };

  onSubmitEdit = () => this.setState({ name: this.state.text });

  render() {
    if (this.state.name === '') {
      return (
        <View style={styles.chatLogin}>
          <Text style={styles.title}>Enter your name:</Text>
          <TextInput
            style={styles.nameInput}
            textAlign="center"
            autoCorrect={false}
            onSubmitEditing={this.onSubmitEdit}
            onChangeText={text => this.setState({ text })}
          />
          <TouchableOpacity onPress={this.onSubmitEdit}>
            <Text style={styles.buttonText}>Next</Text>
          </TouchableOpacity>
        </View>
      );
    } else {
      return <Chatbox name={this.state.name} />;
    }
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
      initialRouteName: 'Search',
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
  },
  chatLogin: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center'
  }
});
