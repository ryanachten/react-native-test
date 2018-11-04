import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';

const App = () => (
  <View>
    <Header label="Albums" />
  </View>
);

AppRegistry.registerComponent('albums', () => App);
