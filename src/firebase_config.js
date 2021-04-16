import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyDey3SeIJkT95yvYH86OebteozH335Maj4",
  authDomain: "todoapp-78604.firebaseapp.com",
  projectId: "todoapp-78604",
  storageBucket: "todoapp-78604.appspot.com",
  messagingSenderId: "811022097327",
  appId: "1:811022097327:web:f7fb92ad9ab3d4768e6d5a"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export { db };
