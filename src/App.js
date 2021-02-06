import React, { useState, useEffect } from 'react';
import './App.css';
import MaterialTable from 'material-table'

const empList = [
  { id: 1, name: "Neeraj", email: 'neeraj@gmail.com', status: 0, role: 1 },
  { id: 2, name: "Raj", email: 'raj@gmail.com', status: 1, role: 0 },
  { id: 3, name: "David", email: 'david342@gmail.com', status: 1, role: 3 },
  { id: 4, name: "Vikas", email: 'vikas75@gmail.com', status: 0, role: 2 },
]

function App() {

  const [data, setData] = useState(empList)
  const columns = [
    { title: "ID", field: "id" },
    { title: "Name", field: "name" },
    { title: "Email", field: "email" }, 
    { title: "Status", field: 'status', },
    { title: "Role", field: "role", }
  ] 
 

  return (
    <div className="App">
      <h1 align="center">React-App</h1>
      <h4 align='center'>Material Table</h4>
      <MaterialTable
        title="Employee Data"
        data={data}
        columns={columns}
      />
    </div>
  );
}

export default App;
