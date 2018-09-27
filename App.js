/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, View} from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList'


type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={styles.container}>
          <Header headerText={'Albums'}/>
        </View>
        <AlbumList />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  }
});
