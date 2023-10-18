// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCEDx2gQMuAwUKeJCO8laL2w26AnhDvIT8",
  authDomain: "netflixgpt-82206.firebaseapp.com",
  projectId: "netflixgpt-82206",
  storageBucket: "netflixgpt-82206.appspot.com",
  messagingSenderId: "910257265489",
  appId: "1:910257265489:web:b6b594fe944de4c0b69170",
  measurementId: "G-5VNW0ZZL28"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
//writing this here because ot is used everywhere. in all firebase api this need to be there
export const auth = getAuth();