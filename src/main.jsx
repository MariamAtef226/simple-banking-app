import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./scripts/script.js";

import { HashRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Home from "./components/Home";
import History from "./components/History";
import User from "./components/User";
import Users from "./components/Users";

ReactDOM.createRoot(document.getElementById("root")).render(
  <HashRouter>
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:id" element={<User />} />
        <Route path="/history" element={<History />} />
      </Route>
    </Routes>
  </HashRouter>
);
