import React, { Component } from 'react';
import {StyleSheet, View,Text} from 'react-native';

import{parseXml} from './Componentes/spliter';
import{NewsList} from './Componentes/NoticiaLista';

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

  componentDidUpdate(prevProps, prevState) {
    if (prevState.noticiasArray !== this.state['noticiasArray']) {
      this.fetchData();
    }
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
      <View>
        <Text>Notícias</Text>
        {this.state['carregando'] ? (
          <Text>Carregando ... </Text>
        ) : (
          <NewsList news={this.state['noticiasArray']} style={styles}/>)}
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
  lista: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  imagem: {
    width: 200,
    height: 200,
  },
});