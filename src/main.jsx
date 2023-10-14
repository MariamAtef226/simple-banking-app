import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./scripts/script.js";
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // For Bootstrap JavaScript functionality

import { HashRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Home from "./components/Home";
import History from "./components/History";
import User from "./components/User";
import Users from "./components/Users";
import Error from "./components/Error";

ReactDOM.createRoot(document.getElementById("root")).render(
  <HashRouter>
    <Routes>
      <Route element={<Layout />}>
        <Route errorElement={Error} path="/" element={<Home />} />
        <Route errorElement={Error} path="/users" element={<Users />} />
        <Route errorElement={Error} path="/users/:id" element={<User />} />
        <Route errorElement={Error} path="/history" element={<History />} />
      </Route>
    </Routes>
  </HashRouter>
);
