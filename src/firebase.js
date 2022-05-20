import firebase from 'firebase'

const config={
    apiKey: "AIzaSyCWKj94JDt-piHilyFjQrn4Zr3fJvfV8y4",
    authDomain: "vidyuttech-2f9fb.firebaseapp.com",
    projectId: "vidyuttech-2f9fb",
    storageBucket: "vidyuttech-2f9fb.appspot.com",
    messagingSenderId: "891478410025",
    appId: "1:891478410025:web:18549c136709d5894a6d38",
    measurementId: "G-4H27LSEWE3"
}
firebase.initializeApp(config);
let auth = firebase.auth();
export {auth , firebase};