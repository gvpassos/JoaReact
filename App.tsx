import React, { Component } from 'react';
import {View,Text} from 'react-native';

import{parseXmlNoticias,parseXmlCategorias} from './Componentes/spliter';
import{NewsList} from './Componentes/NoticiaLista';
import{Aperitivo} from './Componentes/Aperitivo';

import { estiloListaNoticias } from './Estilos/listaStyle';
import { Categorias } from './Componentes/Categorias';



export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      noticiasArray: [],
      categoriasArray: [],
      carregando: true,
      nNoticias: 5
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state['noticiasArray'] !== nextState['noticiasArray']) {
      return true;
    }
    if(this.state['nNoticias'] !== nextState['noticiasArray']){
      return true;
    }
    return false;
  }
  async fetchData() {
    try {
      let url = 'https://www.jornaloaperitivo.com.br/feeds/posts/default';
      let urlprimaria = 'https://feeds.feedburner.com/jornaloaperitivo/hkmn';
      const response = await fetch(urlprimaria);
      const xml = await response.text();
      
      const news = parseXmlNoticias(xml);
      const cat = parseXmlCategorias(xml);


      this.setState({
        noticiasArray: news,
        categoriasArray: cat,
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
        <View>{this.state['carregando'] ? (
          <Text>Carregando ... </Text>
        ) : (
          <NewsList numNoticias={this.state['nNoticias']}  news={this.state['noticiasArray']} 
          atualizar={()=>{ this.setState({nNoticias:this.state['nNoticias']+5 })}}/>
          
          )}
          </View>
          <Categorias cat={this.state['categoriasArray']}></Categorias>
      </View>
    );
  }
}


