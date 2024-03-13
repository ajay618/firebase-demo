
import firebaseApp from 'firebase/compat/app';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCBQ4dF_oufxZyEkogkaOACWCWFzMIT-VQ",
    authDomain: "fir-4d184.firebaseapp.com",
    projectId: "fir-4d184",
    storageBucket: "fir-4d184.appspot.com",
    messagingSenderId: "744743382462",
    appId: "1:744743382462:web:7441ad9c5ea807ca351def",
    measurementId: "G-1LW58K1XYF"
  };

export const Firebase = firebaseApp.initializeApp(firebaseConfig);
