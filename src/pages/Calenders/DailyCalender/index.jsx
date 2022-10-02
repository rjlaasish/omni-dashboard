import React from "react";
import Header from "../../../components/Header";
import GroupTable from "../../../components/Tables/GroupTable";
import DATA from "../../../tableData.json";

function DailyCalender() {
  const breadCrumbData = [
    { path: "Home", href: "/" },
    { path: "Calenders", href: "/calenders/daily-calender" },
    { path: "Daily Calender", href: "/calenders/daily-calender" },
  ];
  return (
    <>
      <Header breadCrumbData={breadCrumbData} />
      <GroupTable title="Daily Calender Report" data={DATA.dailyCalenders}/>
    </>
  );
}

export default DailyCalender;
