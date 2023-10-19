// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyADjI1e-wsZRJII4B9Jp2Bj9sOQCZskjB8",
  authDomain: "gizmo-tech-world.firebaseapp.com",
  projectId: "gizmo-tech-world",
  storageBucket: "gizmo-tech-world.appspot.com",
  messagingSenderId: "577339158735",
  appId: "1:577339158735:web:d4e22523c507ceb23247ba"
};

// Initialize Firebase
const App = initializeApp(firebaseConfig);
export default App;