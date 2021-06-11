import React from 'react';
import './App.css';
import MaterialTable from 'material-table'

const empList = [
  { id: 1, name: "Neeraj", email: 'neeraj@gmail.com', phone: 9876543210, age: 23, year: 2019 },
  { id: 2, name: "Raj", email: 'raj@gmail.com', phone: 6678901234, age: 17, year: 2020 },
  { id: 3, name: "David", email: 'david342@gmail.com', phone: 6312345678, age: 34, year: 2019 },
  { id: 4, name: "Vikas", email: 'vikas75@gmail.com', phone: 9787654321, age: 20, year: 2021 },
  {id: 5, name: "Rajesh", email: 'rajesh12@gmail.com', phone: 8456107123, age: 25, year: 2015, }
  
]

function App() {
  const columns = [
    { title: "ID", field: "id" },
    { title: "Name", field: "name" },
    { title: "Email", field: "email" },
    { title: "Phone Number", field: 'phone' },
    { title: "Age", field: 'age' },
    { title: "Joining Year", field: 'year' }
  ]

  return (
    <div className="App">
      <h1 align="center">React-App</h1>
      <h4 align='center'>Show and Hide Columns in Material Table</h4>
      <MaterialTable
        title="Employee Data"
        data={empList}
        columns={columns}
        options={{columnsButton:true}}
         />
    </div> 
  );
}

export default App;
