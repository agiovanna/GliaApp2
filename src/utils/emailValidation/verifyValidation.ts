import {User as FirebaseUser } from "firebase/auth";
import { Alert } from "react-native";

 async function verificationEmail({ route }: { route: any }) {

    const { firebaseAuth } = route.params;
    
    const user: FirebaseUser = firebaseAuth.currentUser;
    user.reload();

    //verify if the verification was concluded
    if (!user.emailVerified) {
        Alert.alert('Informação', 'Você deve verificar seu e-mail.');
        return
    }

    Alert.alert('Informação','E-mail verificado com sucesso!');

}

export default verificationEmail;