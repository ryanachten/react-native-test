import React from 'react';
import { View, Text } from 'react-native';

export default ({ album }) => {
  const { title } = album;
  return (
    <View>
      <Text>{title}</Text>
    </View>
  );
};
