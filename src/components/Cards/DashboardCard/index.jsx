import React from "react";
import "./styles.css";
function DashboardCard({ category, lastCount, lastSynced, icon, trend }) {
  return (
    <div className="card-container">
      <div className="icon-container">
        <i className={icon}></i>
      </div>
      <p className="card-title">{category}</p>

      {trend === "up" && <i class=" trend-up fa-solid fa-arrow-trend-up"></i>}
      {trend === "down" && (
        <i class=" trend-down fa-solid fa-arrow-trend-down"></i>
      )}
      <span className={trend === "up" ? "trend-up" : "trend-down"}>
        {lastCount} from last {lastSynced}
      </span>
    </div>
  );
}

export default DashboardCard;
