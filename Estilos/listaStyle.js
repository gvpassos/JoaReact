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
        borderColor:'#031945',
        backgroundColor: "#1044a1",
        borderRadius:3,
        marginRight:windowWidth*0.1,
        marginLeft:windowWidth*0.1,
        borderWidth:1,
        height:25,
        textAlign:'center',
        marginTop:5,
        color:'#d8dce6',
        fontWeight: "bold",
        fontSize:20,
        
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
        marginBottom:0,
        paddingBottom: 5,
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