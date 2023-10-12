import React from "react";
import logo from "../assets/money.webp";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faUser,
  faCalendarDays,
} from "@fortawesome/free-solid-svg-icons";

import { NavLink, useMatch } from "react-router-dom";

export function MobileNavbar() {
  const isActive = useMatch(":activeLink");

  return (
    <>
      <div className="d-md-none mob-navbar pt-3 pb-3 ps-1 pe-1 navbar sticky-top">
        <div className="d-flex justify-content-between align-items-center ">
          
          <div className="justify-content-center fs-3 fw-bold text-light d-flex align-items-center">
            <img src={logo} alt="logo" className='logo' width="40" />
            <span>SoloBanker</span>
          </div>

          <ul className="nav nav-pills d-flex mb-auto">
            <li className="nav-item ms-2 mb-2 mt-2">
              <NavLink
                to="/"
                className={`p-2  ${!isActive ? "my-link" : null}`}
              >
                <FontAwesomeIcon icon={faHouse}  className='ps-1 pe-1'/>
              </NavLink>
            </li>

            <li className="nav-item ms-2 mb-2 mt-2">
              <NavLink
                to="/users"
                className={`p-2   ${
                  isActive
                    ? isActive.pathname == "/users"
                      ? "my-link"
                      : null
                    : null
                }`}
              >
                <FontAwesomeIcon icon={faUser} className='ps-1 pe-1' />
              </NavLink>
            </li>

            <li className="nav-item ms-2 mb-2 mt-2">
              <NavLink
                to="/history"
                className={`p-2   ${
                  isActive
                    ? isActive.pathname == "/history"
                      ? "my-link"
                      : null
                    : null
                } `}
              >
                <FontAwesomeIcon icon={faCalendarDays} className='ps-1 pe-1' />
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
