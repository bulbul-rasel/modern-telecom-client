// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB2sLo_xL37F6OqhrzWjgi3oCrLFecFeRs",
    authDomain: "modern-telecom-client.firebaseapp.com",
    projectId: "modern-telecom-client",
    storageBucket: "modern-telecom-client.appspot.com",
    messagingSenderId: "675136234590",
    appId: "1:675136234590:web:03a48324b94b9459ca40cf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;