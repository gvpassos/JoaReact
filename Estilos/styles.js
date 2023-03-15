import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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

export const headers = StyleSheet.create({

  appbar:{
    height:110,
    backgroundColor: "#0b10a3",
    paddingTop:40,
  }, 
  appbarTitulo:{
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30,
    alignSelf:'center',
    lineHeight: 30,
    
  },
  appbarSubTitulo:{
    color: 'white',
    fontWeight: 'bold',
    fontSize:20,
    alignSelf:'center',
    lineHeight: 20,
    
  },


});