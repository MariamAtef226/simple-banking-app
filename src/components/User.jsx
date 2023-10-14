import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getUser } from "../firebase";
import Transaction from "./Transaction";

import { db, usersCollection } from "../firebase";
import { doc, onSnapshot } from "firebase/firestore";

export default function User() {
  let id = useParams().id;
  let [user, setUser] = useState(null);
  let [transactionWindow, setTransactionWindow] = useState(false);

  useEffect(function () {
    // initial data loading
    async function loadData() {
      let data = await getUser(id);
      setUser(data);
    }
    loadData();

    // Use onSnapshot to listen for real-time updates
    const unsubscribe = onSnapshot(
      usersCollection,
      function (snapshot) {
        const u = snapshot.docs.filter((doc) => {
          return doc.id == id;
        });

        setUser(u[0].data());
      }
    );

    // Cleanup the listener when the component unmounts
    return () => unsubscribe();
  }, []);

  function transactionMode() {
    setTransactionWindow((prev) => !prev);
  }

  return (
    <>
      <div className="cont">
        {user == null ? (
          <h1 className="p-4 pb-1 pb-md-4">Loading...</h1>
        ) : (
          <div className="user">
            <div className="header p-4 pb-1 pb-md-4">
              <h1>{user.name}</h1>
            </div>
            <div className="user-info p-4 pb-1 pb-md-4">
              <div className=" mb-3">
                <span className="title">Email: </span> {user.email}
              </div>
              <div className="mb-3 mt-3">
                <span className="title">Phone: </span>
                {user.phone}
              </div>
              <div className="mb-3 mt-3">
                <span className="title">Current Balance: </span>
                {user.balance}
              </div>
              <button className="btn trans-btn" onClick={transactionMode}>
                {transactionWindow ? "Close Form" : "Make a Transaction"}
              </button>
            </div>
            {transactionWindow ? (
              <Transaction balance={user.balance} id={id} />
            ) : null}
          </div>
        )}
      </div>
    </>
  );
}
