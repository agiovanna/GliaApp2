import React, { useEffect, useState, useRef } from 'react';
import { View, Text, Image, Button, Alert, TouchableOpacity } from 'react-native';
import { requestForegroundPermissionsAsync, getCurrentPositionAsync, watchPositionAsync, LocationAccuracy, LocationObject } from 'expo-location';
import MapView, { Marker, Polyline } from 'react-native-maps';
import { styles } from './styles';
import { Ionicons } from '@expo/vector-icons';

import { useRoute } from '@react-navigation/native';
import * as geolib from 'geolib';

type itemScreenParams = {
    clientLocation: { clienteLat: number; clienteLot: number };
    clientName: string;
    itemName: string;
    itemCost: number;
    image: string;
};

export function MapServiceProfessional() {

    const [location, setLocation] = useState<LocationObject | null>(null); //localizaççao do dispositivo
    const mapRef = useRef<MapView>(null);
    const [distance, setDistance] = useState<number | null>(null); //distancia da profissional até a clienteu

    const route = useRoute();
    const { clientLocation, clientName, itemName, itemCost, image } = route.params as itemScreenParams; //localização da cliente

    //permissão de acesso á localização do dispositivo
    async function requestLocationPermission() {
        const { granted } = await requestForegroundPermissionsAsync();

        if (granted) {
            const currentPosition = await getCurrentPositionAsync();
            setLocation(currentPosition);
            // console.log('localização atual: ', currentPosition);
        }
    }

    useEffect(() => {
        requestLocationPermission();
    }, []);

    useEffect(() => {
        watchPositionAsync(
            {
                accuracy: LocationAccuracy.Highest,
                timeInterval: 1000,
                distanceInterval: 1
            },
            (response) => {
                 setLocation(response);
                mapRef.current?.animateCamera({
                    pitch: 1,
                    center: response.coords
                });

                // Mover o marcador do profissional para a nova posição
                if (mapRef.current && response.coords) {
                    mapRef.current.animateToRegion({
                        latitude: response.coords.latitude,
                        longitude: response.coords.longitude,
                        latitudeDelta: 0.005,
                        longitudeDelta: 0.005,
                    }, 1000);
                }

                // // Calcula a distância em tempo real
                if (location && clientLocation) {

                    const clientCoordinates = {
                        latitude: clientLocation.clienteLat,
                        longitude: clientLocation.clienteLot
                    };

                    const dist = geolib.getDistance(response.coords, clientCoordinates, 1); // Distância em metros
                    setDistance(dist);
                }
            });

    }, []);

    async function Cancel() {
        Alert.alert('serviço cancelado!')
    }

    async function Chat() {
        Alert.alert('ira para o chat!')
    }

    async function didIt() {
        Alert.alert('cheguei!!!!!')
    }

    return (
        <View style={styles.container}>

            {location && (
                <MapView
                    style={styles.map}
                    ref={mapRef}
                    initialRegion={{
                        latitude: location.coords.latitude,
                        longitude: location.coords.longitude,
                        latitudeDelta: 0.005,
                        longitudeDelta: 0.005
                    }}
                >
                    <Marker
                        coordinate={{
                            latitude: location.coords.latitude,
                            longitude: location.coords.longitude,
                        }}
                        pinColor='pink'
                    />

                    {clientLocation && (
                        <Marker
                            coordinate={{
                                latitude: clientLocation.clienteLat,
                                longitude: clientLocation.clienteLot
                            }}
                            pinColor='purple'
                        />
                    )}

                    <Polyline
                        coordinates={[
                            { latitude: location.coords.latitude, longitude: location.coords.longitude },
                            { latitude: clientLocation.clienteLat, longitude: clientLocation.clienteLot },
                        ]}
                        strokeColor="#000000"
                        strokeWidth={2}
                    />
                    
                </MapView>
            )}

            <View style={styles.distanceContainer}>
                <Text>{`Distância até a cliente: ${distance} metros`}</Text>

                <Image style={styles.img} source={{ uri: image }} />
                <Text>{clientName}</Text>
                <Text>{itemName}</Text>
                <Text>R${itemCost},00</Text>

                <TouchableOpacity onPress={Chat}>
                    <Ionicons name="ios-chatbubble-ellipses-outline" size={28} color="black" />
                </TouchableOpacity>

                <Button title='Cheguei' onPress={didIt} />
                <Button title='Cancelar' onPress={Cancel} />
            </View>

        </View>
    );
}