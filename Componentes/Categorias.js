import { View, Text, FlatList,Linking,ScrollView} from 'react-native';
import { Header } from 'react-native/Libraries/NewAppScreen';

import{styles,headers, categoria} from './../Estilos/styles';


export function Categorias({cat}) {

    return <View style={categoria.container}>
        <Text style={categoria.titulo}>Categorias</Text>
    <FlatList
     //style={categoria.listaCate}
      horizontal={true}
      scrollIndicatorInsets={{ top: 50 }}
      showsHorizontalScrollIndicator = {true}

      data={cat}
      renderItem={({ item }) => (
        <View >
          <Text style={categoria.subTitulo} onPress={() => { 
            console.log(item.categoria)
            Linking.openURL(`https://www.jornaloaperitivo.com.br/search/label/${item.categoria}`);

          }}>{item.categoria}</Text>
            
        </View>
        
      )}
      keyExtractor={(item) => item.i}
      
    />
    </View>;
}


