// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDFCY9HcZ4Jz87vznv_VRJYOzJLpPpwIyI",
  authDomain: "dragon-news-project-14c90.firebaseapp.com",
  projectId: "dragon-news-project-14c90",
  storageBucket: "dragon-news-project-14c90.firebasestorage.app",
  messagingSenderId: "126026818448",
  appId: "1:126026818448:web:9feafb83ab64a49dbf8915",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
