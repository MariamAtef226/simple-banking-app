import React from "react";
import logo from "../assets/money.webp";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faUser,
  faCalendarDays,
} from "@fortawesome/free-solid-svg-icons";

import { NavLink, useMatch } from "react-router-dom";

export function Sidebar() {
  const isActive = useMatch(":activeLink");

  return (
    <>
      <div className="sidebar d-none d-md-block">
        <div className="side-navbar d-flex flex-column justify-content-between">
          <div>
            <div className="justify-content-center fs-3 fw-bold text-light d-flex align-items-center">
              <img src={logo} alt="logo" width="40"  className='logo' />
              <span>SoloBanker</span>
            </div>
            <hr />

            <ul className="nav nav-pills flex-column mt-3 mb-auto">
              <li className="nav-item ms-2 mb-2 mt-2">
                <NavLink
                  to="/"
                  className={`p-2  ${!isActive ? "my-link" : null}`}
                >
                  <FontAwesomeIcon icon={faHouse} className="pe-2" />
                  Home
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
                  <FontAwesomeIcon icon={faUser} className="pe-2" />
                  &nbsp;Users
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
                  <FontAwesomeIcon icon={faCalendarDays} className="pe-2" />
                  &nbsp;Transactions History
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
