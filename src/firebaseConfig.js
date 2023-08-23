import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyBPX_ja3KTYopJM5A1v8KB0AGfyIkSG3FY",
    authDomain: "acciojob-project-27884.firebaseapp.com",
    projectId: "acciojob-project-27884",
    storageBucket: "acciojob-project-27884.appspot.com",
    messagingSenderId: "738943250653",
    appId: "1:738943250653:web:416b800d86c7377e15ab34",
    measurementId: "G-4CEZD6D7ZR"
  };


const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebaseApp.firestore();

export { auth, db } 