import React from "react";
import Header from "../../../components/Header";
import GroupTable from "../../../components/Tables/GroupTable";

function WeeklyRecording() {
    const breadCrumbData = [
        { path: "Home", href: "/" },
        { path: "Recordings", href: "/recordings/daily-calender" },
        { path: "Weekly Recording", href: "/recordings/weekly-recording" },
      ];
      return (
        <>
          <Header breadCrumbData={breadCrumbData} />
          <GroupTable title="Weekly Recording Report"/>
        </>
      );
}

export default WeeklyRecording;
