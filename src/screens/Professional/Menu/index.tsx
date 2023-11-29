
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { AntDesign } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

import { HomeProfessional } from "../HomeProfessional";
import { ProfileProfessional } from "../Profile";
import { ChatProfessional } from "../Chat";
import { HistoricProfissional } from "../Historic";

import { useTheme } from "styled-components";

const Bottom = createBottomTabNavigator();


export function MenuProfessional() {

    const { COLORS } = useTheme();

    return (

        <Bottom.Navigator screenOptions={{
            headerShown: false, tabBarShowLabel: false, tabBarInactiveTintColor: COLORS.PINK, tabBarStyle: {
                backgroundColor: COLORS.VIOLET,
                height: 60,
            }
        }}>

            <Bottom.Screen
                name='HomeProfessional'
                component={HomeProfessional}
                options={{
                    tabBarIcon: () => (
                        <AntDesign name="home" size={28} color={"white"} />
                    ),
                }}
            />

            <Bottom.Screen
                name='HistoricProfessional'
                component={HistoricProfissional}
                options={{
                    tabBarIcon: () => (
                        <Octicons name="history" size={28} color={"white"} />
                    ),
                }}
            />

            <Bottom.Screen
                name='ChatProfessional'
                component={ChatProfessional}
                options={{
                    tabBarIcon: () => (
                        <Ionicons name="ios-chatbubble-ellipses-outline" size={28} color="white" />
                    ),
                }}
            />

            <Bottom.Screen
                name='ProfileProfessional'
                component={ProfileProfessional}
                options={{
                    tabBarIcon: () => (
                        <AntDesign name="user" size={28} color={"white"} />
                    ),
                }}
            />

        </Bottom.Navigator>
    );
}