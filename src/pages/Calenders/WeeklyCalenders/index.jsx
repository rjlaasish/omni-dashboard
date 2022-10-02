import React from "react";
import Header from "../../../components/Header";
import GroupTable from "../../../components/Tables/GroupTable";
import DATA from "../../../tableData.json";

function WeeklyCalender() {
  const breadCrumbData = [
    { path: "Home", href: "/" },
    { path: "Calenders", href: "/calenders/daily-calender" },
    { path: "Weekly Calender", href: "/calenders/weekly-calender" },
  ];
  return (
    <>
      <Header breadCrumbData={breadCrumbData} />
      <GroupTable title="Weekly Calender Report" data={DATA.weeklyCalenders}/>
    </>
  );
}

export default WeeklyCalender;
