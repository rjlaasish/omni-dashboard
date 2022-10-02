import React, { useState } from "react";
import Sidebar from "../Sidebar";
import { Outlet } from "react-router-dom";

function Layout() {
  const [isOpen, setisOpen] = useState(false);

  const toggleSidebar = () => {
    setisOpen(!isOpen);
  };

  return (
    <>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Sidebar isOpen={isOpen} />
        <i class="ham-menu fa-solid fa-bars" onClick={toggleSidebar}></i>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            margin: "25px 10px",
            flex: 1,
          }}
        >
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default Layout;
