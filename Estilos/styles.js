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


export const categoria = StyleSheet.create({
  container:{
    height:200,
    backgroundColor: "#0b10a3",
    paddingTop:2,
    marginTop:20,
  }, 
  titulo:{
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
    margin:5,
    textAlign:'center',
    
    
  },

  subTitulo:{
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
    lineHeight: 15,
    margin:20
    
  },


});