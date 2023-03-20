import React from 'react';
import {StyleSheet,Linking ,FlatList,View,Text,Image, TouchableOpacity} from 'react-native';

import{NewsItem} from './NoticiaItem.js'
import{estiloListaNoticias} from './../Estilos/listaStyle.js'

export function NewsList({news, numNoticias}) {
  
  return (
    <View >
      <FlatList
      data={news.slice(0,Number(numNoticias))}
      renderItem={({ item }) => (
        <View style={estiloListaNoticias.linha}>
          <Text onPress={() => { 
            console.log(item.link)
            Linking.openURL(item.link);

          }} style={estiloListaNoticias.titulo}>{item.title}</Text>
          <Image source={{uri:item.image}} style={estiloListaNoticias.imagem}/>
            
        </View>
        
      )}
      keyExtractor={(item) => item.id}
      style={estiloListaNoticias.lista}
    />
   

    </View>
  );
}

export default NewsList;
