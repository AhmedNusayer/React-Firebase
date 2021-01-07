import firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyCWq94nr6wtz6bztW3aqs6br5VxB7xWfs0",
  authDomain: "fir-auth-development-56b75.firebaseapp.com",
  projectId: "fir-auth-development-56b75",
  storageBucket: "fir-auth-development-56b75.appspot.com",
  messagingSenderId: "987094747322",
  appId: "1:987094747322:web:2bf498c74749ccb8551a83",
});

const auth = app.auth();
export { auth };
export default app;
