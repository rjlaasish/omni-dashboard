import React, { useState } from "react";
import Breadcrumb from "../BreadCrumb";
import "./styles.css";

function Header({ breadCrumbData }) {
  const [isOpen, setIsOpen] = useState(false);
  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="header-wrapper">
      <Breadcrumb data={breadCrumbData} />
      <div className="nav-right-content">
        <div className="search-wrapper">
          <p>
            Press Double Shift Key To Search Menu &nbsp;
            <i class="fa-solid fa-magnifying-glass"></i>
          </p>
        </div>
        <i class="header-bookmark fa-solid fa-star"></i>
        <div className="user-profile-wrapper">
          <img
            className="header-user-image"
            alt="header-user-avatar"
            src={require("../../assets/images/avatar.png")}
            onClick={handleMenuToggle}
          />
          {isOpen && (
            <div className="dropdown-profile">
              <p>
                <i class="fa-solid fa-user"></i> &nbsp;Edit Profile
              </p>
              <p>
                <i class="fa-solid fa-gear"></i>&nbsp;Setting
              </p>
              <p>
                <i class="fa-solid fa-right-from-bracket"></i>&nbsp;Logout
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
