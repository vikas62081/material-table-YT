import React from 'react';
import './App.css';
import MaterialTable, { MTablePagination } from 'material-table'
import { TablePagination, Grid, Typography, Divider } from '@material-ui/core'
const empList = [
  { id: 1, name: "Neeraj", email: 'neeraj@gmail.com', phone: 9876543210, age: 23 },
  { id: 2, name: "Raj", email: 'raj@gmail.com', phone: 6678901234, age: 17 },
  { id: 3, name: "David", email: 'david342@gmail.com', phone: 6312345678, age: 34 },
  { id: 4, name: "Vikas", email: 'vikas75@gmail.com', phone: 9787654321, age: 20 }, { id: 2, name: "Raj", email: 'raj@gmail.com', phone: 6678901234, age: 17 },
  { id: 3, name: "David", email: 'david342@gmail.com', phone: 6312345678, age: 34 },
  { id: 4, name: "Vikas", email: 'vikas75@gmail.com', phone: 9787654321, age: 20 },
]

function App() {
  const columns = [
    { title: "ID", field: "id" },
    { title: "Name", field: "name" },
    { title: "Email", field: "email" },
    { title: "Phone Number", field: 'phone' },
    { title: "Age", field: 'age' }
  ]

  return (
    <div className="App">
      <h1 align="center">React-App</h1>
      <h4 align='center'>Add summary row feature to Material Table</h4>
      <MaterialTable
        title="Employee Data"
        data={empList}
        columns={columns}
        components={{
          Pagination: (props) => <>
            <Grid container style={{ padding:15}}>
              <Grid sm={6} item><Typography variant="subtitle2">Total</Typography></Grid>
              <Grid sm={6} item align="center"><Typography variant="subtitle2" >Number of rows : {props.count}</Typography></Grid>
            </Grid>
            <Divider/>
            <TablePagination {...props} />
          </>
        }}
      />
    </div>
  );
}

export default App;
