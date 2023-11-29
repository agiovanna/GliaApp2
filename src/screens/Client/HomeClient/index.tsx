import { View } from 'react-native';
import { MapClient } from '../../../utils/MapClient';

export function HomeClient({ navigation } : { navigation : any }) {
    return (
        <View style={{ flex: 1, alignItems: "center", width: "100%" }}>
            <View style={{ flex: 0.8, width: "90%" }}>
                <MapClient navigation={navigation} />
            </View>
        </View>
    );
}