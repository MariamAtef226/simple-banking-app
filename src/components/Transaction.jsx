import React from "react";
import { useState, useEffect } from "react";
import {
  decreaseBalance,
  getAllUsers,
  increaseBalance,
  makeTransaction,
} from "../firebase";

const numberPattern = /^[0-9]*(\.[0-9]+)?$/;

export default function Transaction({ id, balance }) {
  let [inputError, setInputError] = useState("Please select a user to send the money to!");
  let [formData, setFormData] = useState({
    to: "",
    value: 0,
  });

  // store users
  let [users, setUsers] = useState([]);

  // load users names
  useEffect(function () {
    async function loadData() {
      let data = await getAllUsers();
      data = data.map((el) => {
        return { name: el.name, id: el.id };
      });
      data = data.filter((el) => {
        return el.id != id; // exclude current user
      });
      setUsers(data);
    }
    loadData();
  }, []);

  // form control - single source of truth
  function handleChange(event) {
    if (event.target.name == "value") {
      let value = event.target.value;
      if (numberPattern.test(value) && !isNaN(value) && value <= balance) {
        setInputError(false);
      } else {
        setInputError(
          "Make sure you enter a numeric value that doesn't exceed your balance!"
        );
      }
    } else {
      if (event.target.value != "") {
        setInputError(false);
      } else {
        setInputError("Please select a user to send the money to!");
      }
    }

    setFormData((prevFormData) => {
      return { ...prevFormData, [event.target.name]: event.target.value };
    });
  }

  // submitting transaction
  async function submitTransaction() {
    if (formData.to != "") {
      const value = formData.value;
      const source = id;
      const destination = formData.to;
      await decreaseBalance(source, value);
      await increaseBalance(destination, value);
      await makeTransaction(source, destination, value);
    }
  }

  return (
    <div className="p-4 pb-1 pb-md-4">
      <div className="to d-flex align-items-center mb-3">
        <label htmlFor="to" className="col-3 col-md-2">
          To:
        </label>
        <select
          className="form-control"
          id="to"
          value={formData.to}
          onChange={handleChange}
          name="to"
        >
          <option value="">-- Choose --</option>
          {users.map((el) => {
            return (
              <option key={el.id} value={el.id}>
                {el.name}
              </option>
            );
          })}
        </select>
      </div>

      <div className="value d-flex align-items-center mb-3">
        <label htmlFor="value" className="col-3 col-md-2">
          Value:
        </label>
        <input
          className="form-control"
          type="text"
          placeholder="Value"
          value={formData.value}
          onChange={handleChange}
          name="value"
        />
      </div>

      <div className={`text-danger ${!inputError && " invisible"}`}>
        - {inputError}
      </div>

      <div className="text-center">
        <button
          type="button"
          className="trans-btn btn"
          disabled={inputError}
          onClick={submitTransaction}
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Submit Transaction
        </button>

        {/*Transaction success modal*/}
        <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                  Transaction Done!
                </h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                Your Transaction has been done successfully!
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn trans-btn"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
