import firebase from "firebase";



firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export { db };
