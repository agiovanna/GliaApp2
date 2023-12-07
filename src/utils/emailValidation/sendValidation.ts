import firebaseAuth from "../../api/firebase/firebaseConfig";
import { createUserWithEmailAndPassword, User as FirebaseUser, sendEmailVerification } from "firebase/auth";
import { Alert } from "react-native";


   export async function RegisterFirebaseandSendEmail(email: string, password: string) {
        try {
            //create user in Firebase
            const userCredential = await createUserWithEmailAndPassword(firebaseAuth, email, password)
            const user: FirebaseUser = userCredential.user;

            if (user) {
                //send a email verification
                await sendEmailVerification(user)
                Alert.alert('Informação', `Foi enviado um e-mail para ${email} para verificação.`);
            }
            else {
                console.log('Informação', 'Erro ao procurar usuário no Firebase.');
            }
        }
        catch (error) {
            console.error('Erro ao criar o usuário no Firebase:', error);

            if ('auth/email-already-exists') {
                Alert.alert('Erro', 'E-mail já cadastrado.');
            }
            if ('auth/invalid-email') {
                Alert.alert('Erro', 'E-mail inválido.');
            }
            if (error == 'auth/invalid-password' || error == 'auth/missing-password') {
                Alert.alert('Erro', 'Senha inválida. É necessário no mínimo 6 caracteres.');
            }
        }
    }