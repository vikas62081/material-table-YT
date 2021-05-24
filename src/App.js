import React, { useState, useEffect } from 'react';
import './App.css';
import MaterialTable from 'material-table'
import {FormControlLabel,Checkbox,Select,MenuItem} from '@material-ui/core'
const empList = [
  { id: 1, name: "Neeraj", email: 'neeraj@gmail.com', phone: 9876543210, age: 23, year: 2019 },
  { id: 2, name: "Raj", email: 'raj@gmail.com', phone: 6678901234, age: 17, year: 2020 },
  { id: 3, name: "David", email: 'david342@gmail.com', phone: 6312345678, age: 34, year: 2019 },
  { id: 4, name: "Vikas", email: 'vikas75@gmail.com', phone: 9787654321, age: 20, year: 2021 },
]

function App() {
  const [filteredData,setFilteredData]=useState(empList)
 const [filter,setFilter]=useState(false)
 const [year,setYear]=useState('all')
 useEffect(()=>{
setFilteredData(year==="all"?empList:empList.filter(dt=>dt.year===year))
 },[year])
  const columns = [
    { title: "ID", field: "id" },
    { title: "Name", field: "name" },
    { title: "Email", field: "email" },
    { title: "Phone Number", field: 'phone' },
    { title: "Age", field: 'age' },
    { title: "Joining Year", field: 'year' }
  ]
const handleChange=()=>{
  setFilter(!filter)
}
  return (
    <div className="App">
      <h1 align="center">React-App</h1>
      <h4 align='center'>Filtering in Material Table</h4>
      
      <MaterialTable
        title="Employee Data"
        data={filteredData}
        columns={columns}
        options={{
          filtering:filter
        }}
        components={{
          Action:(props)=><>
          <FormControlLabel
        control={
          <Checkbox
            checked={filter}
            onChange={handleChange}
            name="checkedB"
            color="secondary"
          />
        }
        label="Filter"
      />
      <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          style={{width:100}}
          value={year}
          onChange={(e)=>setYear(e.target.value)}
        >
          <MenuItem value={'all'}><em>All</em></MenuItem>
          <MenuItem value={2019}>2019</MenuItem>
          <MenuItem value={2020}>2020</MenuItem>
          <MenuItem value={2021}>2021</MenuItem>
        </Select>
        </>
        }}
        actions={[
          {isFreeAction:true}
        ]}
      />
    </div>
  );
}

export default App;
