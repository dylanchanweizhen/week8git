import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCnRC6-J-D11mXWpEw67dL_X9Gh_UR6C9w",
    authDomain: "bt3103-week-6-daed8.firebaseapp.com",
    projectId: "bt3103-week-6-daed8",
    storageBucket: "bt3103-week-6-daed8.appspot.com",
    messagingSenderId: "718311377635",
    appId: "1:718311377635:web:c1676e00b8506157d1d3d6",
    measurementId: "G-BQNXE44V8P"
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var database = firebase.firestore();
export default database;