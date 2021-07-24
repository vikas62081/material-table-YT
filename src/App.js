import React, { useState, useRef } from 'react';
import './App.css';
import MaterialTable from 'material-table'
import { CsvBuilder } from 'filefy';
import SaveAltIcon from '@material-ui/icons/SaveAlt';

const empList = [
  { id: 1, name: "Neeraj", email: 'neeraj@gmail.com', phone: 9876543210, age: 23, year: 2019 },
  { id: 2, name: "Raj", email: 'raj@gmail.com', phone: 6678901234, age: 17, year: 2020 },
  { id: 3, name: "David", email: 'david342@gmail.com', phone: 6312345678, age: 34, year: 2019 },
  { id: 4, name: "Vikas", email: 'vikas75@gmail.com', phone: 9787654321, age: 20, year: 2021 },
  { id: 5, name: "Neeraj", email: 'neeraj@gmail.com', phone: 9876543210, age: 23, year: 2019 },
  { id: 6, name: "Raj", email: 'raj@gmail.com', phone: 6678901234, age: 17, year: 2020 },
]

function App() {
  const tableRef = useRef(null)
  const [allChecked, setAllChecked] = useState(true)
  const [tableData, setTableData] = useState(empList)
  const [selectedRows, setSelectedRows] = useState([])
  const columns = [
    { title: "ID", field: "id" },
    { title: "Name", field: "name" },
    { title: "Email", field: "email" },
    { title: "Phone Number", field: 'phone' },
    { title: "Age", field: 'age' },
    { title: "Joining Year", field: 'year' }
  ]
  const handleBulkDelete = () => {
    const updatedData = tableData.filter(row => !selectedRows.includes(row))
    setTableData(updatedData)
  }
  const exportAllSelectedRows = () => {


    new CsvBuilder("tableData.csv")
      .setColumns(columns.map(col => col.title))
      .addRows(selectedRows.map(rowData => columns.map(col => rowData[col.field])))
      .exportFile();

  }
  const handleSelectionChange = (rows) => {
    setAllChecked(true)
    const { pagedData, pageSize, data } = tableRef.current.dataManager
    let selectedRows = rows
    if (rows.length == data.length && allChecked) {
      let c = []
      setTableData(preData => preData.map(p => {
        if (pagedData.find(pg => pg.id == p.id)) {
          c.push(p)
          return p
        }
        return { ...p, tableData: { ...p.tableData, checked: false } }
      }))
      selectedRows = c
      setAllChecked(false)
    }

    console.log(selectedRows)

  }
  return (
    <div className="App">
      <h1 align="center">React-App</h1>
      <h4 align='center'>Export Selected Rows only in Material Table</h4>
      <MaterialTable
        title="Employee Data"
        data={tableData}
        tableRef={tableRef}
        columns={columns}
        onSelectionChange={(rows) => handleSelectionChange(rows)}
        options={{ selection: true, exportButton: true, exportAllData: true }}
        actions={[
          {
            icon: 'delete',
            tooltip: "Delete all selected rows",
            onClick: () => handleBulkDelete()
          },
          {
            icon: () => <SaveAltIcon />,
            tooltip: "Export all selected rows",
            onClick: () => exportAllSelectedRows()
          }

        ]}
      />
    </div>
  );
}
 
export default App;
