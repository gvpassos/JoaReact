import React, { Component } from 'react';
import {View,Text,Button} from 'react-native';

import{parseXml} from './Componentes/spliter';
import{NewsList} from './Componentes/NoticiaLista';
import{Aperitivo} from './Componentes/Aperitivo';

import{styles} from './Estilos/styles';
import { estiloListaNoticias } from './Estilos/listaStyle';



export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      noticiasArray: [],
      carregando: true,
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state['noticiasArray'] !== nextState['noticiasArray']) {
      return true;
    }
    return false;
  }
  async fetchData() {
    try {
      const response = await fetch('https://feeds.feedburner.com/jornaloaperitivo/hkmn');
      const xml = await response.text();
      
      const news = parseXml(xml);

      this.setState({
        noticiasArray: news,
        carregando: false,
      });
    } catch (error) {
      console.log('Erro ao buscar notícias:', error);
    }
  }

  render() {
    return (
      <View style={estiloListaNoticias.container}>
        <Aperitivo>Jornal O Aperitivo</Aperitivo>
        <Text>Notícias</Text>
        {this.state['carregando'] ? (
          <Text>Carregando ... </Text>
        ) : (
          <NewsList numNoticias={26}  news={this.state['noticiasArray']}/>
          
          )}
        
      </View>
    );
  }
}


