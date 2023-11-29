import React, { useState, } from 'react';
import MapView, { Marker } from 'react-native-maps';
import {
    requestForegroundPermissionsAsync,
    getCurrentPositionAsync,
    LocationObject,
    watchPositionAsync
} from 'expo-location';
import { StyleSheet, View, ActivityIndicator, Image } from 'react-native';
import { useEffect } from 'react';
import { api } from '../../lib/axios';
import io from 'socket.io-client';
import { useTheme } from "styled-components";

export function MapProfessional({ navigation }: { navigation: any }) {

    const socket = io('http://192.168.3.6:3000');
    const { COLORS } = useTheme();
    const [locationLoaded, setLocationLoaded] = useState(false);

    const [location, setLocation] = useState<LocationObject | null>(null);
    const [userOn, setUserOn] = useState<
        {
            tb_profissional_id: number;
            tb_profissional_rua: string;
            tb_profissional_longitude: number;
            tb_profissional_latitude: number;
            tb_profissional_nome: string;
            tb_profissional_img: string;
        }[]
    >([]);

    async function requestLocationPermission() {
        const { granted } = await requestForegroundPermissionsAsync();

        if (granted) {
            const currentPosition = await getCurrentPositionAsync()
            setLocation(currentPosition);
            setLocationLoaded(true);
        }
    }

    useEffect(() => {
        requestLocationPermission();
    }, []);


    useEffect(() => {
        socket.on('searchProfessionals', async () => {
            const professionals = await api.get('/getProfessionalsOn');
            setUserOn(professionals.data);
        });

    }, []);


    useEffect(() => {
        if (location) {
            watchPositionAsync(
                { distanceInterval: 10 },
                (newLocation) => {
                    api.put('/saveLocation', {
                        latitude: newLocation.coords.latitude,
                        longitude: newLocation.coords.longitude,
                    })
                        .then(() => {
                            console.log('Location Saved :)');
                        })
                        .catch((error) => {
                            console.log('ERRO: ' + error);
                        });
                }
            );
        }

    }, [location]);

    return (
        <View style={styles.container}>
            {locationLoaded ? (
                <MapView style={styles.map}
                    region={{
                        latitude: location?.coords.latitude || 0,
                        longitude: location?.coords.longitude || 0,
                        latitudeDelta: 0.0143,
                        longitudeDelta: 0.00134
                    }}
                    zoomEnabled={true}
                >
                    <Marker
                        coordinate={{
                            latitude: location?.coords.latitude || 0,
                            longitude: location?.coords.longitude || 0
                        }}

                        onPress={() => {
                            navigation.navigate('ChatProfessional');
                        }}

                    />

                    {userOn &&
                        userOn.map((user) => (
                            <Marker
                                key={user.tb_profissional_id}
                                coordinate={{
                                    latitude: user.tb_profissional_latitude,
                                    longitude: user.tb_profissional_longitude
                                }}
                                title={user.tb_profissional_nome}>

                                <View>
                                    <Image
                                        source={{
                                            uri: user.tb_profissional_img,
                                        }}
                                        style={{
                                            width: 50,
                                            height: 50,
                                            borderRadius: 50,
                                            resizeMode: "center"
                                        }}
                                    />
                                </View>

                            </Marker>
                        ))
                    }
                </MapView>
            ) : (
                <View style={styles.loadingContainer}>
                    <ActivityIndicator size="large" color={COLORS.DARKBLUE} />
                </View>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        flex: 1,
        width: '100%',
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

