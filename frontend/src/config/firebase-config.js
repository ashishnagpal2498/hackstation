
import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/analytics"

const firebaseConfig = {
    apiKey: "AIzaSyBghImeu-R2MaFltjKWjvJ1vCxw2vXeYMQ",
    authDomain: "hackstation-login.firebaseapp.com",
    projectId: "hackstation-login",
    storageBucket: "hackstation-login.appspot.com",
    messagingSenderId: "249158695472",
    appId: "1:249158695472:web:7cd646296cbecf53840bf5",
    measurementId: "G-V1XQF53R8L"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  
export default firebase;
