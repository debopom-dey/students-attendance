import firebase from 'firebase';
 const firebaseConfig = {
    apiKey: "AIzaSyCKpWP60lFbzmP-fyNw8F8R-Ij_O4T-4Tg",
    authDomain: "class60-8a3ef.firebaseapp.com",
    databaseURL: "https://class60-8a3ef-default-rtdb.firebaseio.com",
    projectId: "class60-8a3ef",
    storageBucket: "class60-8a3ef.appspot.com",
    messagingSenderId: "215887852831",
    appId: "1:215887852831:web:b4ab65fa276bb2d5bd2c2a",
    measurementId: "G-RSRFBQ6XJZ"
  };
  if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}
export default firebase.database()