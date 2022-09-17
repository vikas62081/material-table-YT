import "./App.css";
import React, { useEffect, useState } from "react";
import MaterialTable from "material-table";

function App() {
  const [data, setData] = useState([]);
  const [rowPerPage] = useState(() => {
    const perPage = localStorage.getItem("row_per_page");
    return perPage ? perPage : 10;
  });
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

  const onChangeRowsPerPage = (page) => {
    localStorage.setItem("row_per_page", page);
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
        options={{
          pageSize: rowPerPage,
        }}
        onChangeRowsPerPage={onChangeRowsPerPage}
      />
    </div>
  );
}

export default App;
