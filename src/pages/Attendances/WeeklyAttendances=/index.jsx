import React from "react";
import Header from "../../../components/Header";
import GroupTable from "../../../components/Tables/GroupTable";

function WeeklyAttendance() {
  const breadCrumbData = [
    { path: "Home", href: "/" },
    { path: "Attendance Report", href: "/attendances/weekly-attendance" },
    { path: "Weekly Atttendance", href: "/attendances/weekly-attendance" },
  ];
  return (
    <>
      <Header breadCrumbData={breadCrumbData} />
      <GroupTable title="Weekly Attendance Report" />
    </>
  );
}

export default WeeklyAttendance;
