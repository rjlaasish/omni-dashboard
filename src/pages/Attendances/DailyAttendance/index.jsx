import React from "react";
import Header from "../../../components/Header";
import GroupTable from "../../../components/Tables/GroupTable";
import DATA from "../../../tableData.json";

function DailyAttendance() {
  const breadCrumbData = [
    { path: "Home", href: "/" },
    { path: "Attendance Reports", href: "/attendances/daily-attendance" },
    { path: "Daily Atttendance", href: "/attendances/daily-attendance" },
  ];
  return (
    <>
      <Header breadCrumbData={breadCrumbData} />
      <GroupTable title="Daily Attendance Report" data={DATA.dailyAttendances} />
    </>
  );
}

export default DailyAttendance;
