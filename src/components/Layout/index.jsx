import React from "react";
import Sidebar from "../Sidebar";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Sidebar />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            margin: "25px 10px",
            width: "100%",
          }}
        >
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default Layout;
