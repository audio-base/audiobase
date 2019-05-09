import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  FlatList,
  Button
} from 'react-native';
import { List, ListItem } from 'react-native-elements';
import { SC_KEY } from '../config.js';
import axios from 'axios';
import { db } from '../config.js';

let addItem = (item, title) => {
  db.ref('/songs').push({
    uri: item,
    title: title
  });
};

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      data: [],
      query: '',
      uri: '',
      title: '',
      album: ''
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.addSong = this.addSong.bind(this);
  }
  componentDidMount() {
    this.handleSearch();
  }
  handleSearch() {
    let limit = 10;
    let page = 0;
    let query = this.state.query;
    axios
      .get(
        `https://api-v2.soundcloud.com/search/tracks?q=${query}&client_id=${SC_KEY}&limit=${limit}&offset=${page *
          limit}&linked_partitioning=1`
      )
      .then(response =>
        this.setState({
          data: response.data.collection
        })
      )
      .catch(error => console.error(error));
  }
  addSong(uri, title, album) {
    this.setState(
      {
        uri: uri,
        title: title,
        album: album
      },
      () => addItem(this.state.uri, this.state.title)
    );
  }

  render() {
    return (
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchBar}
          placeholder="search"
          autoCorrect={false}
          onChangeText={text => this.setState({ query: text })}
          onSubmitEditing={this.handleSearch}
        />
        {this.state.data.map((obj, i) => {
          return (
            <View key={i}>
              <ListItem
                leftAvatar={{
                  source: {
                    uri:
                      'https://i1.sndcdn.com/artworks-000473021343-9xjedj-large.jpg'
                  }
                }}
                title={obj.title}
              />
              <Button
                title="add"
                onPress={() =>
                  this.addSong(
                    obj.uri,
                    obj.title
                    // obj.user.visuals.visuals[0].visual_url
                  )
                }
              />
            </View>
          );
        })}
      </View>
      // <List containerStyle={{ borderTopWidth: 0, borderBottomWidth: 0 }}>
      //   <FlatList
      //     data={this.state.data}
      //     renderItem={this.state.data.map((item, i) => (
      //       <ListItem
      //         roundAvatar
      //         title={`${item.title}`}
      //         avatar={{ uri: item.artwork_url }}
      //         containerStyle={{ borderBottomWidth: 0 }}
      //       />
      //     ))}
      //     keyExtractor={item => item.title}
      //   />
      // </List>
    );
  }
}

const styles = StyleSheet.create({
  searchContainer: {
    width: '100%'
  },
  searchBar: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1
  }
});

export default Search;
