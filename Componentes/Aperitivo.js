import { View , Text} from 'react-native';
import { Header } from 'react-native/Libraries/NewAppScreen';

import{styles,headers} from './../Estilos/styles';


export function Aperitivo(params) {

    let titulo = "Jornal O Aperitivo";
    let subtitulo = "um porre de informações";

    return <View style={headers.appbar}>
        <Text style={headers.appbarTitulo}>{titulo}</Text>
        <Text style={headers.appbarSubTitulo}>{subtitulo}</Text>
    </View>;
}