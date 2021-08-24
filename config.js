import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyCPGMaejvPmtAETnqvCOp-XhLDOOnvCKlA",
  authDomain: "book-santa-dbaba.firebaseapp.com",
  projectId: "book-santa-dbaba",
  storageBucket: "book-santa-dbaba.appspot.com",
  messagingSenderId: "1042660676383",
  appId: "1:1042660676383:web:d55211bd3f7b5d2d52562a"
};
  
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
