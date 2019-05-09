import React from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  StyleSheet,
  TextInput,
  Button
} from 'react-native';
import { List, ListItem } from 'react-native-elements';

import { db } from '../config.js';
let addItem = item => {
  db.ref('/items').push({
    name: item
  });
};
let songsRef = db.ref('/songs');

class Playlist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      songs: []
    };
  }
  componentDidMount() {
    songsRef.on('value', snapshot => {
      let data = snapshot.val();
      let songs = Object.values(data);
      this.setState({ songs });
    });
  }

  render() {
    return (
      <View style={styles.playlistContainer}>
        {this.state.songs.map((song, i) => (
          <View key={i} uri={song.uri} style={styles.songContainer}>
            <ListItem
              leftAvatar={{
                source: {
                  uri:
                    'https://i1.sndcdn.com/artworks-000473021343-9xjedj-large.jpg'
                }
              }}
              title={song.title}
              // onPress={}
            />
            {/* <Button title="-" /> */}
          </View>
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  playlistContainer: {
    width: '100%'
  }
  // songContainer: {
  //   flex: 1,
  //   // height: 50,
  //   // width: 50,
  //   flexDirection: 'row'
  // }
});

export default Playlist;
