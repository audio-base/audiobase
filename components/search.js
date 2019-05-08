import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ''
    };
    this.handleSearch = this.handleSearch.bind(this);
  }
  handleSearch(e) {
    e.preventDefault;
    axios.get();
  }
  render() {
    return (
      <View>
        <TextInput
          placeholder="search"
          onChangeText={text => this.setState({ search: text })}
        />
      </View>
    );
  }
}
export default Search;
