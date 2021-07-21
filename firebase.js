import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA2k2g6xCEwEGIVLcXmLk1KNyal_vZMhAo",
  authDomain: "clone-74f18.firebaseapp.com",
  projectId: "clone-74f18",
  storageBucket: "clone-74f18.appspot.com",
  messagingSenderId: "38905235927",
  appId: "1:38905235927:web:a8cd93cbb9ab17c041e392",
  measurementId: "G-0ZZZQPZMG1",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
