import { StyleSheet,screen } from "react-native";


export const estiloListaNoticias = StyleSheet.create({
    container:{
        backgroundColor:'#d0d5d6',
        borderWidth:1,
        borderColor:'red',
        width:411,
        height:600,
        overflow:"hidden"
    },
    titulo: {
      color: '#0a7da1',
      fontWeight: 'bold',
      fontSize: 20,
      textAlign:'center',
      width: 300,
      paddingBottom: 10,
      paddingLeft: 10,

    },
    botaoMostrarMais:{
        borderColor:'#2f4a52',
        width:350,
        borderWidth:1,
        height:25,
        textAlign:'center',
        marginLeft:15,
        marginTop:5,
    },
    imagem: {
      width: 100,
      height: 100,
      //alignSelf:'right'
      marginRight:35,
      marginTop:15,
    },
    linha:{
        display: 'flex',
        flexWrap: 'wrap', // Quebra a linha
        flexDirection: 'row', 
        borderBottomColor: '#2f4a52',
        borderBottomWidth: 1,
        flexWrap:'wrap',
        marginBottom:5,
        height: 160,
        width:450,
        backgroundColor:'#edf5f7',

      }
  });