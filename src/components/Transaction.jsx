import React from "react";
import { useState, useEffect } from "react";
import { getAllUsers } from "../firebase";

const numberPattern = /^[0-9]*(\.[0-9]+)?$/;

export default function Transaction({ balance }) {
  let [inputError, setInputError] = useState(false);
  let [formData, setFormData] = useState({
    to: "",
    value: 0,
  });

  let [users, setUsers] = useState([]);

  useEffect(function () {
    async function loadData() {
      let data = await getAllUsers();
      data = data.map((el) => {
        return { name: el.name, id: el.id };
      });
      setUsers(data);
    }
    loadData();

  }, []);

  function handleChange(event) {
    if (event.target.name == "value") {
      let value = event.target.value;
      if (numberPattern.test(value) && !isNaN(value) && value <= balance) {
        setInputError(false);
      } else {
        setInputError(true);
      }
    }

    setFormData((prevFormData) => {
      return { ...prevFormData, [event.target.name]: event.target.value };
    });
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
          {users.map(el=>{
            return (<option value={el.id}>{el.name}</option>)
          })}
        </select>
      </div>

      <div className="value d-flex align-items-center mb-3">
        <label htmlFor="value" className="col-3 col-md-2">
          Value:{" "}
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
        Make sure you enter a numeric value that doesn't exceed your balance!
      </div>
      <div className="text-center">
        <button className="trans-btn btn" disabled={inputError}>
          Submit Transaction{" "}
        </button>
      </div>
    </div>
  );
}
