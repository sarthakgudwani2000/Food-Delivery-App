// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBAE5jyajePIaN9cf43Mry6q_G-pYW_UQg",
  authDomain: "yummie-953c2.firebaseapp.com",
  projectId: "yummie-953c2",
  storageBucket: "yummie-953c2.appspot.com",
  messagingSenderId: "359074842218",
  appId: "1:359074842218:web:5d4674a6fc885be46eec13"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { storage, db }