import React from "react";
import { Outlet } from "react-router-dom";
import { Sidebar } from "./Sidebar";
import { MobileNavbar } from "./MobileNavbar";

export default function Layout() {
  return (
    <>
      <Sidebar/>
      <MobileNavbar />
      <Outlet />
    </>
  );
}
