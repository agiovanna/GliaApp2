import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { StackNavigationProp } from '@react-navigation/stack';
import { RootParamList } from '../../../@types/navigation';

import { styles } from './styles';


type authScreenProp = StackNavigationProp<RootParamList, 'dadosSolicitacao'>;

export function dadosSolicitacao() {

    const navigation = useNavigation<authScreenProp>();
    const clientLocation = { latitudeClient: -23.3955283, longitudeClient: -47.0036017 };
    const clientName = 'Luana Mendes Araújo';
    const itemName = 'Morena Iluminada';
    const itemPrice = 250
    const image = 'https://media.voguebusiness.com/photos/640b52514c264c5cc89d147b/2:3/w_1600,c_limit/article-name-voguebus-photographer-month-22-story.jpg';

    return (
        <View style={styles.container}>
            <Text>Item Catálogo X</Text>
            <Button title="Solicitar"
                onPress={() => { navigation.navigate('MapService', { clientLocation, clientName, itemName, itemPrice, image }) }} />
        </View>
    );
}
