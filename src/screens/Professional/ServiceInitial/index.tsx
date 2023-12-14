import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { createService } from '../../../api/createService'; 

export function InicioServicoProfissional({ navigation, route }: { navigation: any, route: any }) {

  const [segundos, setSegundos] = useState<number>(0);
  const [botao, setBotao] = useState<string>('VAI');
  const [ultimo, setUltimo] = useState<number | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const {
    itemName,
    itemCost,
    itemTime,
    clienteImg,
    clienteName,
    professionalId,
    requestId,
  } = route.params;

  const stopTimer = () => {
    if (timerRef.current !== null) {
        clearInterval(timerRef.current);
        timerRef.current = null;
        setUltimo(segundos); 
        navigation.navigate('responseClient'); 
    }
}

  useEffect(() => {
    go(); // Inicia o cronômetro ao abrir a tela

    createService(professionalId, requestId);

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
32
    const formatoHora = (valor: number): string =>
        valor < 10 ? `0${valor}` : `${valor}`;

    return `${formatoHora(horas)}:${formatoHora(minutos)}:${formatoHora(segundos)}`;
};

  return (
    <View style={styles.container}>

            <Text style={styles.timer}>{formatarTempo(segundos)}</Text>

            <View style={styles.btnArea}>
                <TouchableOpacity style={styles.btn} onPress={stopTimer}>
                    <Text style={styles.btnTexto}>Finalizar</Text>
                </TouchableOpacity>
            </View>

      </View>
  );
};

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