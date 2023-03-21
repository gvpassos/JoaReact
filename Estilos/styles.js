import { StyleSheet, Dimensions} from "react-native";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

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
  appbarEx:{
    height:200,
    backgroundColor: "#0b10a3",
    paddingTop:40,
  }, 
  line:{
    display: 'flex',
    flexDirection: 'row', 
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
  box:{
    width:0.85*windowWidth,
    lexWrap: 'wrap',
  },
  busca:{
    width:0.15*windowWidth,
    flexGrow:0,
    textAlign:"center",
    paddingTop:10,
  },
  menuBusca:{
    paddingTop:30,
    paddingLeft:30,
    flexWrap: 'wrap',
    width:windowWidth,
    flexDirection:'row'
  },
  inputBusca:{
    backgroundColor:'white',
    width:windowWidth*0.5,
    padding:3,
    margin:12,
  },
  break :{
    flexBasis: windowWidth,
    height: 10,
    borderBottomWidth:1,
    borderColor:'black',
    backgroundColor: 'black'
  },
  textNoticias:{
    color :'white',
  }

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