import React from 'react';
import { Image, Text, View } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const styles = {
  headerStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  titleStyle: {
    fontSize: 18
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  },
  thumbnailContainerStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  albumImageStyle: {
    flex: 1,
    height: 300,
    width: null
  }
};

export default ({ album }) => {
  const {
    headerStyle, thumbnailStyle, thumbnailContainerStyle,
    titleStyle, albumImageStyle
  } = styles;
  const { title, artist, thumbnail_image, image } = album;
  return (
    <Card>
      <CardSection>
        <View style={thumbnailContainerStyle}>
          <Image
            style={thumbnailStyle}
            source={{ uri: thumbnail_image }}
          />
        </View>
        <View style={headerStyle}>
          <Text style={titleStyle}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>
      <CardSection>
        <Image
          style={albumImageStyle}
          source={{ uri: image }}
        />
      </CardSection>
    </Card>
  );
};
