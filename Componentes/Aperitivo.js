import React, { Component } from 'react';
import {View, Text, Image, TouchableOpacity,TextInput, Linking} from 'react-native';

import { headers } from '../Estilos/styles';

export class Aperitivo extends Component {
  constructor(props) {
    super(props);
    this.state = {
        buscarAtivo:false,
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    
    if (this.state['buscarAtivo'] !== nextState['buscarAtivo']) {
      return true;
    }
    return false;
  }
  render() {

    const titulo    = "Jornal O Aperitivo";///Titulo
    const subtitulo = "Um porre de Informações";// Sub titulo
    let buscaString = 'digite aqui';// Place Holder de input busca
    const buscaUrl  = "https://www.jornaloaperitivo.com.br/search?q="//URL para buscar no site

    return (
    <View style={this.state['buscarAtivo']? headers.appbarEx :headers.appbar}>
      <View style={headers.line}>
        <View style={headers.box}>
            <Text style={headers.appbarTitulo}>{titulo}</Text>
            <Text style={headers.appbarSubTitulo}>{subtitulo}</Text>
        </View>
        <View style={headers.busca}>
            <TouchableOpacity onPress={()=>
                {
                    this.setState({'buscarAtivo' : !this.state['buscarAtivo']});
                    console.log(this.state['buscarAtivo']);
                }}>
                <Image source={require('./../assets/lupa.png')}/>
            </TouchableOpacity>
        </View>
      </View>{this.state['buscarAtivo']?          
        <View style={headers.menuBusca}>
          <TextInput placeholder={buscaString} style={headers.inputBusca} onChangeText={(value)=>{buscaString = value}}/>
          <TouchableOpacity style={{padding:20}} onPress={()=>{Linking.openURL(buscaUrl + buscaString);}}><Image source={require('./../assets/lupa.png')}/></TouchableOpacity>
        </View>:<View style={headers.textNoticias}/>}
      </View>
    );
  }

}


export default Aperitivo;