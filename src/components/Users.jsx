import React from "react";
import { useState, useEffect } from "react";
import { getAllUsers } from "./../firebase";

export default function Users() {
  let [users, setUsers] = useState([]);
  useEffect(function () {
    async function loadData() {
      const data = await getAllUsers();
      setUsers(data);
    }
    loadData();
  }, []);

  return (
    <>
      <div className="cont">
        <div className="header p-4 pb-1 pb-md-4">
          <h1> Available Users</h1>
        </div>
        <table className="table p-4 table-striped table-responsive">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Balance</th>
              <th scope="col">Make a Transaction</th>
            </tr>
          </thead>
          <tbody>
            {
              users.map((el,i)=>{return <tr key={i}><td>{i+1}</td><td>{el.name}</td><td>{el.balance}</td><td>-</td></tr>})
            }
           
          </tbody>
        </table>
      </div>
    </>
  );
}
