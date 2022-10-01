import React from "react";
import CExcelDownload from "../../ExcelDownload";
import DATA from "../../../tableData.json";
import "./styles.css";
import Filter from "../../Filter";

function GroupTable({ title }) {
  const downloadExcel = () => {};
  console.log(DATA.groups);

  return (
    <>
      <Filter />
      <div className="table-container">
        <div className="table-header">
          <h5>{title}</h5>
          <CExcelDownload onClickHandler={downloadExcel} />
        </div>
        <table class="table">
          <thead class="thead-light">
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Created Date</th>
              <th scope="col">Recordings</th>
              <th scope="col">Attendance Reports</th>
            </tr>
          </thead>
          <tbody>
            {DATA.groups.map((column, idx) => (
              <tr key={idx}>
                <td>{column.name}</td>
                <td>{column.createdDate}</td>
                <td>{column.recordings}</td>
                <td>{column.attendanceReports}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default GroupTable;
