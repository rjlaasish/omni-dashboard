import React from "react";
import Header from "../../../components/Header";
import GroupTable from "../../../components/Tables/GroupTable";

function WeeklyCalender() {
  const breadCrumbData = [
    { path: "Home", href: "/" },
    { path: "Calender", href: "/calenders/daily-calender" },
    { path: "Weekly Calender", href: "/calenders/weekly-calender" },
  ];
  return (
    <>
      <Header breadCrumbData={breadCrumbData} />
      <GroupTable title="Weekly Calender Report"/>
    </>
  );
}

export default WeeklyCalender;
