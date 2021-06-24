import React, { useState } from 'react';
import './App.css';
import MaterialTable from 'material-table'

const empList = [
  { id: 1, name: "Neeraj", email: 'neeraj@gmail.com', phone: 9876543210, city: "Bangalore", status: 0 },
  { id: 2, name: "Raj", email: 'raj@gmail.com', phone: 9812345678, city: "Chennai" },
  { id: 3, name: "David", email: 'david342@gmail.com', phone: 7896536289, city: "Jaipur" },
  { id: 4, name: "Vikas", email: 'vikas75@gmail.com', phone: 9087654321, city: "Hyderabad" },
]

function App() {

  const [data, setData] = useState(empList)
  const columns = [
    { title: "ID", field: "id", editable: false },
    {
      title: "Name", field: "name", validate: rowData => {
        if (rowData.name === undefined || rowData.name === "") {
          return "Required"
        } else if (rowData.name.length < 3) {
          return "Name should contains atleast 3 chars"
        }
        return true
      }
    },
    {
      title: "Email", field: "email", validate: rowData => {
        if (rowData.email === undefined || rowData.email === "") {
          return "Required"
        } else if (!rowData.email.includes('@' && '.')) {
          return "Enter valid email address"
        }
        return true
      }
    },
    {
      title: "Phone Number", field: 'phone', validate: rowData => {
        if (rowData.phone === undefined || rowData.phone === "") {
          return "Required"
        } else if (rowData.phone.length < 10 || rowData.phone.length > 10) {
          return "Phone number should contains 10 digits"
          //  return {isValid:false,helperText:"Phone number should contains 10 digits"}
        }
        return true
      }
    },
    { title: "City", field: "city", validate: rowData => ({ isValid: true, helperText: "Optional" }) },
    {
      title: "Status", field: 'status', lookup: { 0: "Inactive", 1: "Active" }, validate: rowData => {
        if (rowData.status === undefined || rowData.status === "") {
          return "Required"
        }
        return true
      }
    }

  ]


  return (
    <div className="App">
      <h1 align="center">React-App</h1>
      <h4 align='center'>CRUD operation in Material Table with Proper Validation</h4>
      <MaterialTable
        title="Employee Data"
        data={data}
        columns={columns}
        editable={{
          onRowAdd: (newRow) => new Promise((resolve, reject) => {
            const updatedRows = [...data, { id: Math.floor(Math.random() * 100), ...newRow }]
            setTimeout(() => {
              setData(updatedRows)
              resolve()
            }, 2000)
          }),
          onRowDelete: selectedRow => new Promise((resolve, reject) => {
            const index = selectedRow.tableData.id;
            const updatedRows = [...data]
            updatedRows.splice(index, 1)
            setTimeout(() => {
              setData(updatedRows)
              resolve()
            }, 2000)
          }),
          onRowUpdate: (updatedRow, oldRow) => new Promise((resolve, reject) => {
            const index = oldRow.tableData.id;
            const updatedRows = [...data]
            updatedRows[index] = updatedRow
            setTimeout(() => {
              setData(updatedRows)
              resolve()
            }, 2000)
          })

        }}
        options={{
          actionsColumnIndex: -1, addRowPosition: "first"
        }}
      />
    </div>
  );
}

export default App;
