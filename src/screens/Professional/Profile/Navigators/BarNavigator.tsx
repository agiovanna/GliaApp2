import React from 'react';
import { Text, View } from 'react-native';
import {Catalog} from '../ProfileCatalog';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { InfoScreen } from '../ProfileInfo';

const Tab = createMaterialTopTabNavigator();

function Catalogo() {
    return (
        <Catalog />
    );
}

function Info() {
    return (
       <InfoScreen />
    );
}

function Avaliacoes() {
    return (
        <View style={{
            flex: 1,
            backgroundColor: '#03cafc'
        }}>
            <Text>Avaliacoes Screen</Text>
        </View>
    );
}

function Tabs() {
    return (
        <Tab.Navigator
            initialRouteName='Catálogo'
            screenOptions={{
                tabBarActiveTintColor: "#d89"
            }}
        >
            <Tab.Screen
                name='Catalogo'
                component={Catalogo}
                options={{ tabBarLabel: "Catalogo" }}
            />

            <Tab.Screen
                name='infoScreen'
                component={Info}
                options={{ tabBarLabel: "Informações" }}
            />

            <Tab.Screen
                name='Avaliacoes'
                component={Avaliacoes}
                options={{ tabBarLabel: "Avaliacoes" }}
            />

        </Tab.Navigator>
    );
}

export default function TopBarNavigator() {
    return (
        <Tabs />
    )
}

