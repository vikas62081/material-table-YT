import React, { useState } from 'react';
import './App.css';
import MaterialTable, { MTableToolbar } from 'material-table'
import { MuiThemeProvider, createMuiTheme, FormControlLabel, Switch, Grid, Typography, Divider } from '@material-ui/core'
const empList = [
  { id: 1, name: "Neeraj", email: 'neeraj@gmail.com', phone: 9876543210, age: 23 },
  { id: 2, name: "Raj", email: 'raj@gmail.com', phone: 6678901234, age: 17 },
  { id: 3, name: "David", email: 'david342@gmail.com', phone: 6312345678, age: 34 },
  { id: 4, name: "Vikas", email: 'vikas75@gmail.com', phone: 9787654321, age: 20 },
]

function App() {
  const [preferDarkMode, setPreferDarkMode] = useState(() => {
    const mode = localStorage.getItem('_tableDarkMode')
    return mode === "true" || false
  })
  const columns = [
    { title: "ID", field: "id" },
    { title: "Name", field: "name" },
    { title: "Email", field: "email" },
    { title: "Phone Number", field: 'phone' },
    { title: "Age", field: 'age' }
  ]
  const theme = createMuiTheme({
    palette: {
      type: preferDarkMode ? 'dark' : 'light'
    }
  })

  const handleDarkModeChange = () => {
    setPreferDarkMode(!preferDarkMode)
    localStorage.setItem('_tableDarkMode', !preferDarkMode)
  }

  return (
    <div className="App">
      <h1 align="center">React-App</h1>
      <h4 align='center'>Override toolbar component in Material Table</h4>

      <MuiThemeProvider theme={theme}>
        <MaterialTable
          title="Employee Data"
          data={empList}
          columns={columns}
          components={{
            Action: (props) => <FormControlLabel
              value="top"
              control={<Switch color="primary" checked={preferDarkMode} />}
              onChange={handleDarkModeChange}
              label="Dark Mode"
              labelPlacement="top"
            />,
            Toolbar: (props) => <div>
              <MTableToolbar {...props} />
              <Grid style={{ padding: 15 }} align="right">
                <Typography variant="subtitle2">Number of rows : {props.data.length}</Typography>
              </Grid>
              <Divider />
            </div>
          }}
          actions={[
            { isFreeAction: true }
          ]}
        />
      </MuiThemeProvider>
    </div>
  );
}

export default App;
