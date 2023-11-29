import { View } from 'react-native';
import { MapProfessional } from '../../../utils/MapProfessional';

export function HomeProfessional({ navigation } : { navigation : any }) {
    return(
        <View style={{ flex: 1, alignItems: "center", width: "100%" }}>
            <View style={{ flex: 0.8, width: "90%" }}>
                <MapProfessional navigation={navigation} />
            </View>
        </View>
    );
}