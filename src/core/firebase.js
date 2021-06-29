import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyC8voV_V0BpGN3BtJxqtY_TrIjaicEHfLg",
  authDomain: "zalora-euro.firebaseapp.com",
  databaseURL: "https://zalora-euro-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "zalora-euro",
  storageBucket: "zalora-euro.appspot.com",
  messagingSenderId: "323664097969",
  appId: "1:323664097969:web:0594337c9738f114ac2890",
  measurementId: "G-1BEC1L4WDF"
};

firebase.initializeApp(firebaseConfig);

export default firebase;
