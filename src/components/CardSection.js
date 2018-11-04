import React from 'react';
import { View } from 'react-native';

const styles = {
  containerStyle: {
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderColor: '#ddd',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    padding: 5,
    position: 'relative'
  }
};

export default ({ children }) => (
  <View style={styles.containerStyle}>
    {children}
  </View>
);
