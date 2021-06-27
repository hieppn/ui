import firebase from "firebase";
import 'firebase/storage';
const firebaseConfig = {
  apiKey: "AIzaSyAO70qVTEYlTVTZjAocFjFEyrEjk2FhhLg",
  authDomain: "api-images-ec7ab.firebaseapp.com",
  projectId: "api-images-ec7ab",
  storageBucket: "api-images-ec7ab.appspot.com",
  messagingSenderId: "229705124751",
  appId: "1:229705124751:web:b1d5eb669a629ca0dcd9fa",
  measurementId: "G-E9N2MJ4MH2"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const storage = firebase.storage();
export {storage, firebase as default} ;