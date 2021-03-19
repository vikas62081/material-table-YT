import React, { useState } from 'react';
import './App.css';
import MaterialTable from 'material-table'
import CustomRow from './components/customRow';

const empList = [
  { id: 1, name: "Neeraj", email: 'neeraj@gmail.com', gender: "Male", phone: 9876543210, city: "Bangalore" },
  { id: 2, name: "Raj", email: 'raj@gmail.com', gender: "Male", phone: 9812345678, city: "Chennai" },
  { id: 3, name: "David", email: 'david342@gmail.com', gender: "Male", phone: 7896536289, city: "Jaipur" },
  { id: 4, name: "Sapna", email: 'sapna436@gmail.com', gender: "Female", phone: 9087654321, city: "Hyderabad" },
]

function App() {

  const [data, setData] = useState(empList)
  const columns = [
    { title: "ID", field: "id", editable: false },
    { title: "Name", field: "name" },
    { title: "Email", field: "email" },
    { title: "Gender", field: 'gender' },
    { title: "Phone Number", field: 'phone', },
    { title: "City", field: "city", }
  ]

  const handleDelete=(index)=>{
    alert(index)
  }
  return (
    <div className="App">
      <h1 align="center">React-App</h1>
      <h4 align='center'>Row overlay with supportive icons in Material table (Component Overriding)</h4>
      <MaterialTable
        title="Employee Data"
        data={data}
        columns={columns}
        components={{
          Row: props => <CustomRow {...props} handleDelete={handleDelete}/>
        }} />
    </div>
  );
}

export default App;
