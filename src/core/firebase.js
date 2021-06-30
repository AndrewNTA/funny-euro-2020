import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBSCOloY0R8fi9mLqAMhI1u7tkavRTZ9j0",
  authDomain: "funny-euro-2020.firebaseapp.com",
  databaseURL: "https://funny-euro-2020-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "funny-euro-2020",
  storageBucket: "funny-euro-2020.appspot.com",
  messagingSenderId: "469378819029",
  appId: "1:469378819029:web:d05f77c405d0f7d591d35c",
  measurementId: "G-449647M7KT"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
