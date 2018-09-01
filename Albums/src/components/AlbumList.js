import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetails from './AlbumDetails';

class AlbumList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      albums: []
    };
  }

  componentWillMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(({ data }) => this.setState({ albums: data }))
      .catch(err => console.log(err));
  }

  renderAlbums = () => this.state.albums.map(album => (
    <AlbumDetails album={album}>1</AlbumDetails>
  ));

  render() {
    const { albums } = this.state;
    console.log(albums);
    return (
      <ScrollView style={styles.container}>
        {this.renderAlbums()}
      </ScrollView>
    );
  }
}

const styles = {
  container: {
    // backgroundColor: '#eee',
    // flex: 1,
    // justifyContent: 'space-evenly',
  }
};

export default AlbumList;
