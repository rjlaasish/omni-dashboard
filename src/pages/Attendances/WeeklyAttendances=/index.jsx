import React from "react";
import Header from "../../../components/Header";
import GroupTable from "../../../components/Tables/GroupTable";
import DATA from "../../../tableData.json";

function WeeklyAttendance() {
  const breadCrumbData = [
    { path: "Home", href: "/" },
    { path: "Attendance Reports", href: "/attendances/weekly-attendance" },
    { path: "Weekly Atttendance", href: "/attendances/weekly-attendance" },
  ];
  return (
    <>
      <Header breadCrumbData={breadCrumbData} />
      <GroupTable title="Weekly Attendance Report" data={DATA.weeklyAttendances} />
    </>
  );
}

export default WeeklyAttendance;
