import React, { useState } from 'react';
import './App.css';
import MaterialTable from 'material-table'
import NameCustomComponent from './component';

const empList = [
  { id: 1, name: "Neeraj", email: 'neeraj@gmail.com', status: 0, dob: '01/09/1998' },
  { id: 2, name: "Raj", email: 'raj@gmail.com', status: 1, dob: '11/06/1999' },
  { id: 3, name: "David", email: 'david342@gmail.com', status: 1, dob: '08/26/1995' },
  { id: 4, name: "Vikas", email: 'vikas75@gmail.com', status: 0, dob: '02/20/2000' },
]

function App() {

  const [data, setData] = useState(empList)

  const columns = [
    { title: "ID", field: 'id' },
    {
      title: "Name", field: "name", render: (row) => <NameCustomComponent name={row.name} />
    },
    { title: "Email", field: "email" },
    {
      title: "Status", field: 'status', render: (row) => <div className={row.status ? "active" : "deactive"}>
        {row.status ? "Active" : "Deactive"}
      </div>
    },
    { title: "Date of Birth", field: "dob", }
  ]


  return (
    <div className="App">
      <h1 align="center">React-App</h1>
      <h4 align='center'>Render Custom Component in Material Table</h4>
      <MaterialTable
        title="Employee Data"
        data={data}
        columns={columns}
      />
    </div>
  );
}

export default App;
