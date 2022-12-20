import firebase from "firebase/app";
import 'firebase/auth';
// Your web app's Firebase configuration
let firebaseConfig = {
  apiKey: "AIzaSyA4X8WWStWLTt7CIFRyU2KSsiTq__R2zAs",
  authDomain: "projeto-react-wise.firebaseapp.com",
  projectId: "projeto-react-wise",
  storageBucket: "projeto-react-wise.appspot.com",
  messagingSenderId: "866603790926",
  appId: "1:866603790926:web:5a4e1030145995433c491f"
};

// Initialize Firebase
if (!firebase.app.length) {
    firebase.initializeApp(firebaseConfig);
}
export default firebase;