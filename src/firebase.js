import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBM7Eka-_Pugf7Hikdfn4FX50asl5lsT1g",
    authDomain: "clone-7b90d.firebaseapp.com",
    projectId: "clone-7b90d",
    storageBucket: "clone-7b90d.appspot.com",
    messagingSenderId: "373416738684",
    appId: "1:373416738684:web:939fad6bd6959f61a8eef9",
    measurementId: "G-7Y9RZ1B9J3"
  };

const firebaseApp=firebase.initializeApp(firebaseConfig);
const db=firebaseApp.firestore();

export default db