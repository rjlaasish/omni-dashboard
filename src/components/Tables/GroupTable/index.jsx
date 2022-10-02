import React from "react";
import CExcelDownload from "../../ExcelDownload";
import "./styles.css";
import Filter from "../../Filter";

function GroupTable({ title, data }) {
  const columns = [
    {
      headerText: "Name",
      columnName: "name",
      exportable: true,
    },
    {
      headerText: "Created Date",
      columnName: "createdDate",
      exportable: true,
    },
    {
      headerText: "Recordings",
      columnName: "recordings",
      exportable: true,
    },
    {
      headerText: "Attendance Reports",
      columnName: "attendanceReports",
      exportable: true,
    },
  ];

  const downloadExcel = (data) => {
    const exportableColumns = columns.filter((c) => c.exportable);

    let csv = "";
    exportableColumns.forEach(({ headerText }) => (csv += headerText + ","));
    csv = csv.slice(0, csv.length - 1) + "\n";

    data.forEach((d) => {
      let rowData = "";
      exportableColumns.forEach(
        ({ columnName }) => (rowData += d[columnName] + ",")
      );
      csv += rowData.slice(0, rowData.length - 1) + "\n";
    });

    const link = document.createElement("a");
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute("download", "export.csv");
    link.click();
  };

  return (
    <>
      <Filter />
      <div className="table-container">
        <div className="table-header">
          <h5>{title}</h5>
          <CExcelDownload onClickHandler={() => downloadExcel(data)} />
        </div>
        <table class="table">
          <thead class="thead-light">
            <tr>
              {columns.map((column, idx) => (
                <th scope="col" key={column.columnName}>
                  {column.headerText}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((column, idx) => (
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
