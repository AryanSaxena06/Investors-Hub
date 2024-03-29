import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCoD7kBIMl7bNLMwnRMwQ2_OebreLYzOe4",
    authDomain: "investors-hub-409a6.firebaseapp.com",
    projectId: "investors-hub-409a6",
    storageBucket: "investors-hub-409a6.appspot.com",
    messagingSenderId: "414360466294",
    appId: "1:414360466294:web:2444bcc2fbb8c6d3310057"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebaseApp.storage();

export { auth, provider, storage };
export default db;