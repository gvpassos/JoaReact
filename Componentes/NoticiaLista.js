import React from 'react';
import {StyleSheet,Linking ,FlatList,View,Text,Image, TouchableOpacity} from 'react-native';

import{NewsItem} from './NoticiaItem.js'
import{estiloListaNoticias} from './../Estilos/listaStyle.js'

export function NewsList({news, numNoticias,atualizar}) {
  const ultnoticias = {id:0, title: "Ultimas Noticias"};
  
  return (
    <View >
      <FlatList
      data={[ultnoticias].concat(news.slice(0,Number(numNoticias)))}
      renderItem={({ item ,index}) => (
        <View>
        <View style={item.id?estiloListaNoticias.linha:estiloListaNoticias.primeralinha}>
          <Text onPress={() => { 
            console.log(item.link)
            Linking.openURL(item.link);

          }} style={item.id?estiloListaNoticias.titulo:estiloListaNoticias.primeirotitulo}>{item.title}</Text>
          <Image source={{uri:item.image}} style={estiloListaNoticias.imagem}/>
        </View>
          {ultimaposicao(index,numNoticias,atualizar)}
        </View>
        
      )}
      keyExtractor={(item) => item.id}
      style={estiloListaNoticias.lista}
    />
   

    </View>
  );
}

function ultimaposicao(pos,numNoticias,atualizar){
  if(pos == numNoticias){
    return <TouchableOpacity onPress={()=>{atualizar()}}>
              <Text style={estiloListaNoticias.botaoMostrarMais}> Mostrar Mais</Text>
            </TouchableOpacity>;
  }else if(pos <= numNoticias){
    <TouchableOpacity onPress={()=>{atualizar()}}>
              <Text style={estiloListaNoticias.botaoMostrarMais}> isso é Tudo </Text>
            </TouchableOpacity>;
  }

}
export default NewsList;
