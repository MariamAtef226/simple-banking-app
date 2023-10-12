// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs } from "firebase/firestore"


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCyKnk0W-TlUSuRGVwssVmhl7N6dDNY044",
  authDomain: "solobanker-4e82b.firebaseapp.com",
  projectId: "solobanker-4e82b",
  storageBucket: "solobanker-4e82b.appspot.com",
  messagingSenderId: "684581452754",
  appId: "1:684581452754:web:6a879656f37a40c3b4e60b",
  measurementId: "G-PXB27771LR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app)
const usersCollection = collection(db, "users")

export async function getAllUsers() {
  const snapshot = await getDocs(usersCollection);
  if (snapshot.empty) {
    throw {
      message: "Failed to load users!"
    }
  }
  const dataArr = snapshot.docs.map(doc => ({
    ...doc.data(),
    id: doc.id
  }))
  return dataArr
};
