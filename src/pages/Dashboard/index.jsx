import React from "react";
import DashboardCard from "../../components/Cards/DashboardCard";
import Header from "../../components/Header";
import GroupTable from "../../components/Tables/GroupTable";
import "./styles.css";

function Dashboard() {
  const CARD_DATA = [
    {
      category: "Groups",
      count: 68,
      trend: "up",
      lastCount: 51,
      lastSynced: "7 days",
      icon: "fa-solid fa-people-group",
      href: "/",
    },
    {
      category: "Calenders",
      count: 3947,
      trend: "up",
      lastCount: 2571,
      lastSynced: "7 days",
      icon: "fa-solid fa-calendar-days",
      href: "/calenders/daily-calender",
    },
    {
      category: "Recordings",
      count: 1869,
      trend: "up",
      lastCount: 1446,
      lastSynced: "7 days",
      icon: "fa-solid fa-camera",
      href: "/recordings/daily-recording",
    },
    {
      category: "Attendance Reports",
      count: 571,
      trend: "down",
      lastCount: 368,
      lastSynced: "7 days",
      icon: "fa-solid fa-clipboard-user",
      href: "/attendances/daily-attendances",
    },
  ];

  const breadCrumbData = [{ path: "Home", href: "/" }];
  return (
    <>
      <Header breadCrumbData={breadCrumbData} />
      <div className="dash-card-container">
        {CARD_DATA.map((data, idx) => (
          <DashboardCard {...data} />
        ))}
      </div>
      <GroupTable title="Groups" />
    </>
  );
}

export default Dashboard;
