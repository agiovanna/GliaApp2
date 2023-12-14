import React, { useState, useEffect, useRef, } from 'react';
import { View, Text, Alert, StyleSheet, TouchableOpacity } from 'react-native';
import io from 'socket.io-client';
import { createRequest } from '../../../api/createRequest'; 

export function CronometroRequestLoading({ navigation, route }: { navigation: any, route: any }) {

    const socket = io('http://192.168.3.6:3000');

    const {
        clienteLat,
        clienteLong,
        itemId,
        itemName,
        itemCost,
        clienteId,
        clienteName,
        clienteTel,
        professionalId,
        anamneseId
    } = route.params;

    const [location, setLocation] = useState<{ latitude: number; longitude: number } | null>(null);
    const [address, setAddress] = useState<{
        city: string;
        neighborhood: string;
        street: string;
        postalCode: string;
        state: string;
    } | null>(null);

    useEffect(() => {
        const otherPersonLocation = { latitude: clienteLat, longitude: clienteLong };
        setLocation(otherPersonLocation);

        getAddressFromCoordinates(otherPersonLocation.latitude, otherPersonLocation.longitude)
            .then((result) => {
                setAddress(result);

                if (result) {
                    createRequestAndSendMessage(result);
                    console.log('Solicitação Enviada!');
                }
            })
            .catch((error) => console.error('Erro ao obter o endereço:', error));
    }, []);

    const getAddressFromCoordinates = async (latitude: number, longitude: number) => {
        const apiKey = 'AIzaSyBXrtR5J6Z25VkiG4kxu2rK2PFM8Rgaqyc';
        const apiUrl = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${apiKey}`;

        try {
            const response = await fetch(apiUrl);
            const data = await response.json();

            console.log(data);

            if (data.results && data.results.length > 0) {
                const result = data.results[0];
                const formattedAddress = result.formatted_address;
                const addressParts = formattedAddress.split(', ');

                const address = {
                    street: addressParts[0] || '',
                    neighborhood: addressParts[1] || '',
                    city: addressParts[2] || '',
                    postalCode: addressParts[3] || '',
                    state: result.address_components.find((component: any) => component.types.includes('administrative_area_level_1'))?.long_name || '',
                };

                console.log("Parsed Address:", address);

                return address;
            } else {
                throw new Error('Endereço não encontrado');
            }
        } catch (error) {
            throw new Error('Erro ao obter o endereço');
        }
    };

    const createRequestAndSendMessage = (address: {
        city: string;
        neighborhood: string;
        street: string;
        postalCode: string;
        state: string;
    }) => {
        socket.emit('messageClient', {
            clienteId,
            clienteName,
            clienteTel,
            itemId,
            itemName,
            itemCost,
            address,
            professionalId,
            anamneseId
        });


        if (address && clienteId && itemId) {

            createRequest(
                clienteId,
                itemId,
                [address.neighborhood, address.city, address.street, address.state, address.postalCode],
            );

        }

        console.log('Solicitação Enviada!');
    };

    const stopTimer = () => {
        if (timerRef.current !== null) {
            clearInterval(timerRef.current);
            timerRef.current = null;
            setUltimo(segundos); 
            navigation.navigate('avaliacao'); 
        }
    }

    useEffect(() => {
        const onClientResponse = (professionalName: string) => {
            if (professionalName) {
              Alert.alert(
                'Sua solicitação foi aceita! '+ professionalName,
                professionalName+' ,aceitou sua solicitação',
                [{ text: 'OK', onPress: () => navigation.navigate('inicioServicoProfissional') }]
              );
            }
        };
          

        socket.on('responseClient', onClientResponse);

        return () => {
            // Remove o ouvinte do evento quando o componente é desmontado
            socket.off('responseClient', onClientResponse);
        };
    }, []);

    const [segundos, setSegundos] = useState<number>(0);
    const [ultimo, setUltimo] = useState<number | null>(null);
    const timerRef = useRef<NodeJS.Timeout | null>(null);


    useEffect(() => {
        go(); // Inicia o cronômetro ao abrir a tela

        /*return () => {
            if (timerRef.current !== null) {
                clearInterval(timerRef.current);
                timerRef.current = null;
            }
        };*/
    }, []);

    const go = () => {
        timerRef.current = setInterval(() => {
            setSegundos((prevSegundos) => prevSegundos + 1);
        }, 1000);
    };

    const formatarTempo = (tempo: number): string => {
        const horas = Math.floor(tempo / 3600);
        const minutos = Math.floor((tempo % 3600) / 60);
        const segundos = Math.floor(tempo % 60);

        const formatoHora = (valor: number): string =>
            valor < 10 ? `0${valor}` : `${valor}`;

        return `${formatoHora(horas)}:${formatoHora(minutos)}:${formatoHora(segundos)}`;
    };


    return (
        <View style={styles.container}>

            <Text style={styles.timer}>{formatarTempo(segundos)}</Text>

            <View style={styles.btnArea}>
                <TouchableOpacity style={styles.btn} onPress={stopTimer}>
                    <Text style={styles.btnTexto}>Cancelar</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#00aeef',
    },

    timer: {
        marginTop: 60,
        color: '#FFF',
        fontSize: 65,
        fontWeight: 'bold',
    },

    btnArea: {
        marginTop: 70,
        height: 100,
    },

    btn: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF',
        height: 40,
        margin: 17,
        borderRadius: 9,
    },

    btnTexto: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#00aeef',
    },
    areaUltima: {
        marginTop: 40,
    },

    textoCorrida: {
        fontSize: 25,
        fontStyle: 'italic',
        color: '#FFF',
    },

});
