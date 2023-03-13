import React from 'react';
import { Text, Image} from 'react-native';

function NewsItem({ title, image, content }) {
  return (
    <View>
      <Image source={{ uri: image }} />
      <Text>{title}</Text>
      <Text>{content}</Text>
    </View>
  );
}

export default NewsItem;