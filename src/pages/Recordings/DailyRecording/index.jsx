import React from "react";
import Header from "../../../components/Header";
import GroupTable from "../../../components/Tables/GroupTable";
import DATA from "../../../tableData.json";

function DailyRecording() {
  const breadCrumbData = [
    { path: "Home", href: "/" },
    { path: "Recordings", href: "/recordings/daily-calender" },
    { path: "Daily Recording", href: "/recordings/daily-recording" },
  ];
  return (
    <>
      <Header breadCrumbData={breadCrumbData} />
      <GroupTable title="Daily Recording Report" data={DATA.dailyRecordings}/>
    </>
  );
}

export default DailyRecording;
