import firebase from 'firebase/app';
import 'firebase/firestore';
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCvensN6yKRYLTQ59B3avs76v4tK-3GaUQ",
    authDomain: "react-sysopsis.firebaseapp.com",
    databaseURL: "https://react-sysopsis.firebaseio.com",
    projectId: "react-sysopsis",
    storageBucket: "react-sysopsis.appspot.com",
    messagingSenderId: "316961199999",
    appId: "1:316961199999:web:e15f3277091c986651ac4a"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

const firestore = firebaseApp.firestore();

export {firestore}
