import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const app = firebase.initializeApp({
    apiKey: "AIzaSyCyq3sVncTscOeRFQg67tWX78Bu6yoNs3c",
    authDomain: "auth-development-5e558.firebaseapp.com",
    projectId: "auth-development-5e558",
    storageBucket: "auth-development-5e558.appspot.com",
    messagingSenderId: "12334493224",
    appId: "1:12334493224:web:8c94276db724ac35160f1d",
});

export const auth = app.auth();
export default app;
