import React from 'react';
import './App.css';
import MaterialTable from 'material-table'
import {Link} from '@material-ui/core'
const empList = [
  { id: 1, name: "Neeraj", email: 'neeraj@gmail.com', phone: 9876543210, },
  { id: 2, name: "Raj", email: 'raj@gmail.com', phone: 6678901234 },
  { id: 3, name: "David", email: 'david342@gmail.com', phone: 6312345678 },
  { id: 4, name: "Vikas", email: 'vikas75@gmail.com', phone: 9787654321 },
]

function App() {
  const columns = [
  { title: "ID", field: "id",render:rowData=><Link href={`https://picsum.photos/1000?random=${rowData.id}`} target="_blank">{rowData.id}</Link> },
    { title: "Name", field: "name",render:rowData=><Link href={`/user?id=${rowData.id}`} target="_blank">{rowData.name}</Link> },
    { title: "Email", field: "email" },
    { title: "Phone Number", field: 'phone' },
    {title:"Profile",render:rowData=><Link href={`/user?id=${rowData.id}`} target="_blank">Profile</Link>}
    ]   

  return (
    <div className="App">
      <h1 align="center">React-App</h1>
      <h4 align='center'>Add hyperlink to column in Material Table</h4>
      <MaterialTable
        title="Employee Data"
        data={empList}
        columns={columns} />
    </div>
  );
}

export default App;
