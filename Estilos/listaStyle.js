import { StyleSheet,Dimensions } from "react-native";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const estiloListaNoticias = StyleSheet.create({
    container:{
        backgroundColor:'#d0d5d6',
        borderWidth:1,
        width:windowWidth,
        height:windowHeight*2.5,
        overflow:"hidden",
        flexGrow: 0,
    },

    lista:{
      height:windowHeight*0.6,
      overflow:"hidden",
      flexGrow: 0,
    },
    titulo: {
      color: '#0a7da1',
      fontWeight: 'bold',
      fontSize: 20,
      textAlign:'center',
      width: windowWidth*0.7,
      padding: 10,
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
      width: windowWidth*0.3,
      marginTop:20,
    },
    linha:{
        display: 'flex',
        flexWrap: 'wrap', // Quebra a linha
        flexDirection: 'row', 
        borderBottomColor: '#2f4a52',
        borderBottomWidth: 1,
        flexWrap:'wrap',
        marginBottom:5,
        height: 120,
        width:windowWidth,
        backgroundColor:'#edf5f7',

    },
    primeiralinha:{
        display: 'flex',
        flexWrap: 'wrap', // Quebra a linha
        flexDirection: 'row', 
        borderBottomColor: '#2f4a52',
        borderBottomWidth: 1,
        flexWrap:'wrap',
        marginBottom:5,
        height: 20,
        width:windowWidth,
        backgroundColor:'#edf5f7',

      },
      primeirotitulo: {
        color: '#0a7da1',
        fontWeight: 'bold',
        fontSize: 20,
        textAlign:'center',
        width: windowWidth,
      },
  });