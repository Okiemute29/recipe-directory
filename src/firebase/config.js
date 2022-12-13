import firebase from 'firebase/app';
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAjn4vwk1xyYeAUGo1FlD5eh-2XLqbvKpQ",
    authDomain: "cooking-ninja-site-33716.firebaseapp.com",
    projectId: "cooking-ninja-site-33716",
    storageBucket: "cooking-ninja-site-33716.appspot.com",
    messagingSenderId: "937597091677",
    appId: "1:937597091677:web:f6b6f2700425e9e237b2b4"
  };

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()

export { projectFirestore }