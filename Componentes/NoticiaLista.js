import React from 'react';
import {StyleSheet,Linking ,FlatList,View,Text,Image, TouchableOpacity} from 'react-native';

import{NewsItem} from './NoticiaItem.js'
import{estiloListaNoticias} from './../Estilos/listaStyle.js'

export function NewsList({news, numNoticias}) {
  const ultnoticias = {id:0, title: "Ultimas Noticias"};
  return (
    <View >
      <FlatList
      data={[ultnoticias].concat(news.slice(0,Number(numNoticias)))}
      renderItem={({ item }) => (
        <View style={item.id?estiloListaNoticias.linha:estiloListaNoticias.primeralinha}>
          <Text onPress={() => { 
            console.log(item.link)
            Linking.openURL(item.link);

          }} style={item.id?estiloListaNoticias.titulo:estiloListaNoticias.primeirotitulo}>{item.title}</Text>
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
