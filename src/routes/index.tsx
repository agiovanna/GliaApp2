import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';

import { Routes } from './app.d.routes';

export function AppRoutes() {
    return (
        <View style={{ flex: 1 }}>
            <NavigationContainer >
                <StatusBar style="light" backgroundColor='#451952' translucent />
                <Routes />
            </NavigationContainer>
        </View>
    );
}


