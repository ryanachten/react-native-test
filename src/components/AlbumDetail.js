import React from 'react';
import { Text } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

export default ({ album }) => {
  const { title } = album;
  return (
    <Card>
      <CardSection>
        <Text>{title}</Text>
      </CardSection>
    </Card>
  );
};
