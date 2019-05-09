import React from 'react';
import { StyleSheet, Text, TextInput, View, FlatList } from 'react-native';
import SC_KEY from '../config.js';
import axios from 'axios';
// import search from '../soundcloud.js';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      data: [],
      query: ''
    };
    this.handleSearch = this.handleSearch.bind(this);
  }
  componentDidMount() {
    this.handleSearch();
  }
  handleSearch() {
    let limit = 10;
    let page = 0;
    let query = this.state.query;
    // e.preventDefault;
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

  render() {
    return (
      <View style={styles.searchContainer}>
        <TextInput
          placeholder="search"
          autoCorrect={false}
          onChangeText={text => this.setState({ query: text })}
          onSubmitEditing={this.handleSearch}
        />
        {this.state.data.map((obj, i) => (
          <Text key={i}>{obj.title}</Text>
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  searchContainer: {
    // flex: 1,
    // backgroundColor: 'black'
  }
});
export default Search;
