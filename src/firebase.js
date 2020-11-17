import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyB_4WYpxKvFc0-b8UCC5wrK3BMBX8HLw4U",
    authDomain: "crudfb-4b242.firebaseapp.com",
    databaseURL: "https://crudfb-4b242.firebaseio.com",
    projectId: "crudfb-4b242",
    storageBucket: "crudfb-4b242.appspot.com",
    messagingSenderId: "181411766952",
    appId: "1:181411766952:web:57ce344ded8cf014efd89d",
    measurementId: "G-YQRYK6R5GH"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  //firebase.analytics();

  export default firebase;