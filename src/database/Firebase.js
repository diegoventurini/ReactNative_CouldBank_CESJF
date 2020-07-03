import firebase from 'firebase';
import firestore from 'firebase/firestore';



var firebaseConfig = {
    apiKey: "AIzaSyA7RSbq5qTWa3jiVCMstMUWCJv_SEKBpJI",
    authDomain: "projetoteste-d4b2d.firebaseapp.com",
    databaseURL: "https://projetoteste-d4b2d.firebaseio.com",
    projectId: "projetoteste-d4b2d",
    storageBucket: "projetoteste-d4b2d.appspot.com",
    messagingSenderId: "349036326212",
    appId: "1:349036326212:web:8987f7ced5ab52ce21fb11",
    measurementId: "G-MZGS288ZGP"
};

// Initialize Firebase
if(!firebase.apps.length) { 
    firebase.initializeApp(firebaseConfig);
    
}


export default firebase;