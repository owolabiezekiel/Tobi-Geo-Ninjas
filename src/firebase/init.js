import firebase from 'firebase'
import firestore from 'firebase/firestore'

var firebaseConfig = {
  apiKey: "AIzaSyCjkXjkmI5XcM2lTQyy5-twwF8y3Kcot8w",
  authDomain: "tobi-geo-ninjas.firebaseapp.com",
  databaseURL: "https://tobi-geo-ninjas.firebaseio.com",
  projectId: "tobi-geo-ninjas",
  storageBucket: "tobi-geo-ninjas.appspot.com",
  messagingSenderId: "129080495091",
  appId: "1:129080495091:web:3ce4abdfe4b6a890c82086",
  measurementId: "G-9SLMWG1RF3"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore()