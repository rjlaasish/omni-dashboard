import React from "react";
import Header from "../../../components/Header";
import GroupTable from "../../../components/Tables/GroupTable";

function DailyCalender() {
  const breadCrumbData = [
    { path: "Home", href: "/" },
    { path: "Calender", href: "/calenders/daily-calender" },
    { path: "Daily Calender", href: "/calenders/daily-calender" },
  ];
  return (
    <>
      <Header breadCrumbData={breadCrumbData} />
      <GroupTable title="Daily Calender Report"/>
    </>
  );
}

export default DailyCalender;
