import React from 'react';
import { View, StyleSheet } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

const appTitle = 'Image Compiler';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header title={appTitle} />
        <AlbumList style={styles.albumList} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  albumList: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
