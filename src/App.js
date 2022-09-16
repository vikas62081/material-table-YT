import "./App.css";
import React, { useEffect, useState } from "react";
import MaterialTable from "material-table";

function App() {
  const [data, setData] = useState([]);
  const [selectedRow, setSelectedRow] = useState();
  const columns = [
    { title: "ID", field: "id", hidden: true },
    { title: "Username", field: "username", hiddenByColumnsButton: true },
    { title: "Name", field: "name" },
    { title: "Email", field: "email" },
    { title: "Phone", field: "phone" },
    { title: "Web Link", field: "address.street" },
  ];

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((resp) => resp.json())
      .then((resp) => {
        setData(resp);
      });
  }, []);

  const onSelectionChange = (selectedRows) => {
    console.log(selectedRows);
  };
  const onRowClick = (e, clickedRow) => {
    setSelectedRow(clickedRow);
  };

  return (
    <div className="App">
      <h1 align="center">React-App</h1>
      <h4 align="center">
        Learn Row Selection (single/ mutiple) in Material Table
      </h4>
      <MaterialTable
        title="Employee Data"
        data={data}
        columns={columns}
        onRowClick={onRowClick}
        options={{
          //For multi select
          // selection: true,
          // showSelectAllCheckbox: false,
          // showTextRowsSelected: false,
          rowStyle: (row) =>
            row?.id === selectedRow?.id ? { background: "#e7e7e7" } : {},
        }}
        onSelectionChange={onSelectionChange}
      />
      {selectedRow && <h4>Selected Employee Name : {selectedRow?.name}</h4>}
    </div>
  );
}

export default App;
