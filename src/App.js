import React from 'react';
import './App.css';
import MaterialTable from 'material-table'


function App() {
  const columns = [
    { title: "Athlete", field: "athlete" },
    { title: "Age", field: "age" },
    { title: "Country", field: "country" },
    { title: "Year", field: "year" },
    { title: "Date", field: 'date' },
    { title: "Sport", field: 'sport' },
    { title: "Gold", field: 'gold' },
    { title: "Silver", field: 'silver' },
    { title: "Bronze", field: 'bronze' },
    { title: "Total", field: 'total' },
  ]

  return (
    <div className="App">
      <h1 align="center">React-App</h1>
      <h4 align='center'>Implement Server-Side Pagination, Filter, Search and Sorting in Material Table</h4>
      <MaterialTable
        title="Olympic Data"
        columns={columns}
        options={{ debounceInterval: 700, padding: "dense", filtering: true }}
        data={query =>
          new Promise((resolve, reject) => {
            // prepare your data and then call resolve like this:
            let url = 'http://localhost:3002/olympic?'
            //searching
            if (query.search) {
              url += `q=${query.search}`
            }
            //sorting 
            if (query.orderBy) {
              url += `&_sort=${query.orderBy.field}&_order=${query.orderDirection}`
            }
            //filtering
            if (query.filters.length) {
              const filter = query.filters.map(filter => {
                return `&${filter.column.field}${filter.operator}${filter.value}`
              })
              url += filter.join('')
            }
            //pagination
            url += `&_page=${query.page + 1}`
            url += `&_limit=${query.pageSize}`

            fetch(url).then(resp => resp.json()).then(resp => {
              resolve({
                data: resp,// your data array
                page: query.page,// current page number
                totalCount: 499// total row number
              });
            })

          })
        }
      />
    </div>
  );
}

export default App;
