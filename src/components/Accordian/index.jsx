import React, { useState } from "react";
import "./style.css";

const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
        <div>{title}</div>
        <div>
          {isActive ? (
            <i class="accordian-icon fa-solid fa-caret-up"></i>
          ) : (
            <i class="accordian-icon fa-solid fa-caret-down"></i>
          )}
        </div>
      </div>
      {isActive && <div className="accordion-content">{content}</div>}
    </div>
  );
};

export default Accordion;
