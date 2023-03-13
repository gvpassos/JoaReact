import React from 'react';
import {StyleSheet,Linking ,FlatList,View,Text,Image} from 'react-native';

import{NewsItem} from './NoticiaItem.js'

export function NewsList({ news, style }) {
  return (
    <FlatList
      data={news}
      renderItem={({ item }) => (
        <View style={{
          borderBottomColor: 'black',
          borderBottomWidth: StyleSheet.hairlineWidth,
        }}>
          <Text onPress={() => { 
            Linking.openURL(item.link);

          }} style={style.lista}>{item.title}</Text>
          <Image source={{uri:item.image}} style={style.imagem}/>

        </View>
        
      )}
      keyExtractor={(item) => item.id}
    />
  );
}

export default NewsList;
