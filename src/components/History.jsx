import React from "react";
import { useState, useEffect } from "react";
import { getAllTransactions } from "./../firebase";
import { Link } from "react-router-dom";

export default function History() {
  let [transactions, setTransactions] = useState([]);

  useEffect(function () {
    async function loadData() {
      const data = await getAllTransactions();
      setTransactions(data);
    }
    loadData();
  }, []);

  return (
    <>
      <div className="cont">
        <div className="header p-4 pb-1 pb-md-4">
          <h1>Past Transactions</h1>
        </div>

        {transactions.length == 0 ? (
          <h1 className="p-4 pb-1 pb-md-4">Loading...</h1>
        ) : (
          <table className="table p-4 table-striped table-responsive">
            <thead>
              <tr>
                <th scope="col">Date</th>
                <th scope="col">From</th>
                <th scope="col">To</th>
                <th scope="col">Value</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((el, i) => {
                return (
                  <tr key={i}>
                    <td>{el.date}</td>
                    <td>{el.from}</td>
                    <td>{el.to}</td>
                    <td className="fw-bold">{el.value}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
}
