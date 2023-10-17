// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs, doc, getDoc, setDoc, addDoc, Timestamp } from "firebase/firestore"


// Your web app's Firebase configuration
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
export const db = getFirestore(app)
export const usersCollection = collection(db, "users")
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
}


export async function getAllTransactions(page) {

  const snapshot = await getDocs(baseQuery);
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
  dataArr.sort((a, b) => new Date(b.date) - new Date(a.date));

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


export async function decreaseBalance(id, value) {
  try {
    const docRef = doc(db, "users", id);
    const snapshot = await getDoc(docRef);
    if (snapshot.empty) {
      throw {
        message: "Failed to load source's data!"
      }
    }

    let source = {
      ...snapshot.data(),
      id: snapshot.id
    };
    await setDoc(docRef, { balance: Number(source.balance) - Number(value) }, { merge: true })
  }
  catch (err) {
    console.log("Error in decreaseing balance!")
    console.error(err)
  }
}


export async function increaseBalance(id, value) {
  try {
    const docRef = doc(db, "users", id);
    const snapshot = await getDoc(docRef);
    if (snapshot.empty) {
      throw {
        message: "Failed to load destination's data!"
      }
    }

    let destination = {
      ...snapshot.data(),
      id: snapshot.id
    };
    await setDoc(docRef, { balance: Number(destination.balance) + Number(value) }, { merge: true })
  }
  catch (err) {
    console.log("Error in increasing balance!")
    console.error(err)
  }
}


export async function makeTransaction(srcId, destId, value) {
  try{
  const currentTimestamp = Timestamp.now();
  const transaction = {
    from: srcId,
    to: destId,
    value: value,
    date: currentTimestamp
  };
  let newTransactionAdded = await addDoc(transactionsCollection, transaction)
}
catch(err){
  console.log('Failed to log transaction!');
  console.error(err)
}
}


  // const baseQuery = query(transactionsCollection, orderBy('date'), limit(5));
  // if (page > 1) {
  //    const lastVisibleDoc = getLastVisibleDocForPage(page - 1); // Implement this function
  //    baseQuery = query(baseQuery, startAfter(lastVisibleDoc));
  //  }