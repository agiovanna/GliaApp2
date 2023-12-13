import React, {useEffect} from "react";
import {View, Text, Image} from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import theme from "../../theme";

const SplashScreen = ({navigation}: {navigation: any}) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.replace('Welcome');
        }, 5000);
        return () => clearTimeout(timer);
    }, [navigation]);


return (
    <LinearGradient
    colors={theme.COLORS.GRADIENT1}
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 1 }}
    style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}
>
    <Image source={require('../../../assets/white-icon.png')} style={{width: 200, height: 200, marginBottom: 20}} resizeMode="contain"/>
    </LinearGradient>
);
};

export default SplashScreen;