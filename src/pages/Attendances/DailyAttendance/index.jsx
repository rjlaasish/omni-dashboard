import React from "react";
import Header from "../../../components/Header";
import GroupTable from "../../../components/Tables/GroupTable";

function DailyAttendance() {
  const breadCrumbData = [
    { path: "Home", href: "/" },
    { path: "Attendance Report", href: "/attendances/daily-attendance" },
    { path: "Daily Atttendance", href: "/attendances/daily-attendance" },
  ];
  return (
    <>
      <Header breadCrumbData={breadCrumbData} />
      <GroupTable title="Daily Attendance Report" />
    </>
  );
}

export default DailyAttendance;
