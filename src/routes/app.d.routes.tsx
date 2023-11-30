import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { HomeClient } from "../screens/Client/HomeClient"
import { HomeProfessional } from '../screens/Professional/HomeProfessional';
import { MenuProfessional } from '../screens/Professional/Menu';
import { MenuClient } from '../screens/Client/Menu';
import { SignUpClient1 } from '../screens/Client/SignUp/SignUpFirstStep';
import { SignUpClient2 } from '../screens/Client/SignUp/SignUpSecondStep';
import { SignUpClient3 } from '../screens/Client/SignUp/SignUpThirdStep';
import { SignUpProfessional1 } from '../screens/Professional/SignUp/SignUpFirstStep';
import { SignUpProfessional2 } from '../screens/Professional/SignUp/SignUpSecondStep';
import { SignUpProfessional3 } from '../screens/Professional/SignUp/SignUpThirdStep';
import { SignUpProfessional4 } from '../screens/Professional/SignUp/SignUpFourthStep';
import { SignUpProfessional5 } from '../screens/Professional/SignUp/SignUpFifthStep';
import { MapClient } from '../utils/MapClient';
import { MapProfessional } from '../utils/MapProfessional';
import { SignIn } from '../screens/SignIn';
import { ChatProfessional } from '../screens/Professional/Chat';
import { ProfileProfessional } from '../screens/Professional/Profile';
import AddItem from '../screens/Professional/Profile/AddItem';

const { Navigator, Screen } = createNativeStackNavigator();

export function Routes() {
    return (
        <Navigator screenOptions={{ headerShown: false }}>

            {/* <Screen
                name='SignIn'
                component={SignIn}
            /> */}

            {/* <Screen
                name='HomeClient'
                component={HomeClient}
            />

            <Screen
                name='HomeProfessional'
                component={HomeProfessional}
            />

            <Screen
                name='MenuProfessional'
                component={MenuProfessional}
            />

            <Screen
                name='MenuClient'
                component={MenuClient}
            /> */}

            {/* <Screen
                name='SignUpClient1'
                component={SignUpClient1}
            />

            <Screen
                name='SignUpClient2'
                component={SignUpClient2}
            />

            <Screen
                name='SignUpClient3'
                component={SignUpClient3}
            /> */}

            {/* <Screen
                name='SignUpProfessional1'
                component={SignUpProfessional1}
            />

            <Screen
                name='SignUpProfessional2'
                component={SignUpProfessional2}
            />

            <Screen
                name='SignUpProfessional3'
                component={SignUpProfessional3}
            />

            <Screen
                name='SignUpProfessional4'
                component={SignUpProfessional4}
            />

            <Screen
                name='SignUpProfessional5'
                component={SignUpProfessional5}
            /> */}

            {/* <Screen
                name='MapClient'
                component={MapClient}
            /> */}

            {/* <Screen
                name='MapProfessional'
                component={MapProfessional}
            />

            <Screen
                name='ChatProfessional'
                component={ChatProfessional}
            /> */}

            <Screen
                name='ProfileProfessional'
                component={ProfileProfessional}
            />

           <Screen
                name='AddItem'
                component={AddItem}
            /> 

        </Navigator>
    );
}
