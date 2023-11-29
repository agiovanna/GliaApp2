
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { AntDesign } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

import { HomeClient } from "../HomeClient";
import { ProfileClient } from "../Profile";
import { HistoricClient } from "../Historic";
import { ChatClient } from "../Chat";

import { useTheme } from "styled-components";

const Bottom = createBottomTabNavigator();


export function MenuClient() {

    const { COLORS } = useTheme();

    return (

        <Bottom.Navigator screenOptions={{
            headerShown: false, tabBarShowLabel: false, tabBarInactiveTintColor: COLORS.PINK, tabBarStyle: {
                backgroundColor: COLORS.VIOLET,
                height: 60,
            }
        }}>

            <Bottom.Screen
                name='HomeClient'
                component={HomeClient}
                options={{
                    tabBarIcon: () => (
                        <AntDesign name="home" size={28} color={"white"} />
                    ),
                }}
            />

            <Bottom.Screen
                name='HistoricClient'
                component={HistoricClient}
                options={{
                    tabBarIcon: () => (
                        <Octicons name="history" size={28} color={"white"} />
                    ),
                }}
            />

            <Bottom.Screen
                name='ChatClient'
                component={ChatClient}
                options={{
                    tabBarIcon: () => (
                        <Ionicons name="ios-chatbubble-ellipses-outline" size={28} color="white" />
                    ),
                }}
            />

            <Bottom.Screen
                name='ProfileClient'
                component={ProfileClient}
                options={{
                    tabBarIcon: () => (
                        <AntDesign name="user" size={28} color={"white"} />
                    ),
                }}
            />

        </Bottom.Navigator>
    );
}