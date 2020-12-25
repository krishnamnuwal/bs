import firebase from 'firebase';
require('@firebase/firestore')

const firebaseConfig = {
  apiKey: "AIzaSyD2DsTbYKPYeZPicSWsB71mZaVb0l4n-cU",
  authDomain: "booksanta2-6929e.firebaseapp.com",
  projectId: "booksanta2-6929e",
  storageBucket: "booksanta2-6929e.appspot.com",
  messagingSenderId: "869987025723",
  appId: "1:869987025723:web:b104952e1251ba33acad1e"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
