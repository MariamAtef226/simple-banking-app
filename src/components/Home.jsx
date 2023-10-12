import React from "react";
import logo from "../assets/money.webp";
import bank from "../assets/bank.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoneyBill } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <>
      <div className="cont home text-center">
        <header className="d-flex justify-content-center">
          <h1 className="fw-bold d-flex align-items-center mt-5 ">
            <img src={logo} alt="logo" width="80" className="grey-img" />
            <span>SoloBanker</span>
          </h1>
        </header>
        <div className="slogan">
          Manage transactions between users smoothly... from home!
        </div>
        <img src={bank} alt="bank-vector" className="mt-5 bank-img" />

        <div className="info-container">
          <div className="info d-flex align-items-center pt-4 pb-4">
            <div className="pe-4">
              {" "}
              Carry out infinite transactions between registered users, quickly
              and easily!
            </div>
            <FontAwesomeIcon icon={faMoneyBill} className="info-icon" />
          </div>

          <div className="info d-flex flex-row-reverse align-items-center  pt-4 pb-4">
            <div className="ps-4">
              Carry out infinite transactions between registered users, quickly
              and easily!
            </div>
            <FontAwesomeIcon icon={faCheck} className="info-icon" />
          </div>

          <div className="info d-flex align-items-center  pt-4 pb-4">
            <div className="pe-4">
              Carry out infinite transactions between registered users, quickly
              and easily!
            </div>
            <FontAwesomeIcon icon={faCalendarDays} className="info-icon" />
          </div>
        </div>
      </div>
    </>
  );
}
