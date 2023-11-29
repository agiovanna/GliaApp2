import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCymMcz9iIwDDdLwFyxq6VVBgEGTn_0Bmw",
    authDomain: "bd-glia.firebaseapp.com",
    projectId: "bd-glia",
    storageBucket: "bd-glia.appspot.com",
    messagingSenderId: "447740296378",
    appId: "1:447740296378:web:1b9760bd48dd92cb6e9683",
    measurementId: "G-HNCMEHE1XD",
};

export const firebaseApp = initializeApp(firebaseConfig);
export const firebaseDb = getFirestore(firebaseApp);
export const firebaseAuth= getAuth(firebaseApp);
export const storage = getStorage(firebaseApp);


export default firebaseAuth;
