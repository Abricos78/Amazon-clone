import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyB1NTVaN5lcgEnzl-Hbv1Y7c0SyZRGo21A",
    authDomain: "clone-21b8c.firebaseapp.com",
    projectId: "clone-21b8c",
    storageBucket: "clone-21b8c.appspot.com",
    messagingSenderId: "917262163657",
    appId: "1:917262163657:web:7ae997c148425a7382f718"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

export const db = firebaseApp.firestore()
export const auth = firebaseApp.auth()
