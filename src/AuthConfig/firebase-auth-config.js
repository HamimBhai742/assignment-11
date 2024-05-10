// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// console.log(import.meta.env.LLL);
const firebaseConfig = {
    apiKey: import.meta.env.USER_APIKEY,
    authDomain: import.meta.env.USER_AUTHDOMAIN,
    projectId: import.meta.env.USER_PROJECTID,
    storageBucket: import.meta.env.USER_STORAGEBUCKET,
    messagingSenderId: import.meta.env.USER_MESSAGINGSENDERID,
    appId: import.meta.env.USER_APPID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app