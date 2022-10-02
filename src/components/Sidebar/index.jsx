import React, { useState } from "react";
import { Link } from "react-router-dom";
import sidebarNavItems from "../../sidemenu.json";
import Accordion from "../Accordian";
import "./styles.css";

function Sidebar({ isOpen }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleItemClick = (idx) => {
    setActiveIndex(idx);
  };

  return (
    <nav id="sidebar" className={isOpen ? "active" : "" }>
      <div class="sidebar-header">
        <img
          src={require("../../assets/images/omni.png")}
          className="sidebar-image"
          alt="omni-logo"
        />
      </div>

      <ul class="list-unstyled components">
        {sidebarNavItems.map((item, index) => (
          <li>
            {!item.hasChildren ? (
              <Link
                to={item.to}
                key={item.id}
                onClick={() => handleItemClick(index)}
              >
                <div
                  className={`sidebar__menu__item ${
                    activeIndex === index ? "active" : ""
                  }`}
                >
                  <div className="sidebar__menu__item__text">
                    {item.display}
                  </div>
                </div>
              </Link>
            ) : (
              <Link>
                <Accordion
                  title={item.display}
                  content={
                    item.hasChildren &&
                    item.children.map((children, idx) => (
                      <Link to={children.to} key={children.id}>
                        {children.display}
                      </Link>
                    ))
                  }
                />
              </Link>
            )}
          </li>
        ))}
      </ul>
      <button className="send-feedback-btn">
        Send Feedback &nbsp; <i class="fa-solid fa-paper-plane"></i>
      </button>
    </nav>
  );
}

export default Sidebar;
