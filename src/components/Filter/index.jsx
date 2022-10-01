import React, { useState } from "react";
import "./styles.css";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

function Filter() {
  const [dropdownVisible, setDropDownVisible] = useState(false);
  const [from, setFrom] = useState(new Date());
  const [to, setTo] = useState(new Date());

  const handleFilterClick = () => {
    setDropDownVisible(!dropdownVisible);
  };
  return (
    <div>
      <div className="filter-wrapper">
        <button
          type="button"
          class="filter-btn btn btn-primary"
          onClick={handleFilterClick}
        >
          <>
            <i className="fa-solid fa-sliders"></i>
            &nbsp; Filter
          </>
        </button>
        <div className="filter-picker">{from.toDateString()}</div>
        <div className="filter-picker">{to.toDateString()}</div>
      </div>
      {dropdownVisible && (
        <div className="filter-container">
          <div className="from-picker">
            <h6>From</h6>
            <DatePicker
              className="date-picker-custom"
              selected={from}
              onChange={(date) => setFrom(date)}
            />
          </div>
          <div className="from-picker">
            <h6>To</h6>
            <DatePicker
              className="date-picker-custom"
              selected={to}
              minDate={from}
              onChange={(date) => setTo(date)}
            />
          </div>
          <button
            type="button"
            class="apply-btn btn btn-primary"
            onClick={handleFilterClick}
          >
            <>
              <i class="fa-solid fa-filter"></i>
              &nbsp; Apply
            </>
          </button>
        </div>
      )}
    </div>
  );
}

export default Filter;
