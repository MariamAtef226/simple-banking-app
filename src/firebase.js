// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs, doc, getDoc } from "firebase/firestore"


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
const transactionsCollection = collection(db, "transactions")

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


export async function getAllTransactions() {
  const snapshot = await getDocs(transactionsCollection);
  if (snapshot.empty) {
    throw {
      message: "Failed to load transactions history!"
    }
  }


  const dataArr = await Promise.all(snapshot.docs.map(async (d) => {
    let data = { ...d.data() };
    let fromRef = doc(db, "users", data.from);
    let toRef = doc(db, "users", data.to);

    // Use Promise.all to parallelize the async calls for fromName and toName
    const [fromName, toName] = await Promise.all([
      getDoc(fromRef),
      getDoc(toRef)
    ]);

    let date = new Date(data.date.toDate()); // Convert Firestore timestamp to JavaScript Date

    return ({
      date: date.toLocaleDateString(undefined, {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      }),
      from: fromName.data().name,
      to: toName.data().name,
      value: data.value
    });
  }));

  return dataArr;
}

export async function getUser(id) {
  let docRef = doc(db, "users", id);
  const snapshot = await getDoc(docRef);
  if (snapshot.empty) {
    throw {
      message: "Failed to load user!"
    }
  }


  return ({
    ...snapshot.data(),
    id: snapshot.id
  });


}
