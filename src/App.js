import React, { useState } from 'react'
import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import 'ag-grid-enterprise';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

const App = () => {
  const [gridApi, setGridApi] = useState(null);
  const [rowData, setRowData] = useState([])

  const columns = [
    { title: "Athlete", field: "athlete", filter: "agTextColumnFilter" },
    { headerName: "Age", field: "age", filter: "agTextColumnFilter" },
    { title: "Country", field: "country",filter: "agTextColumnFilter" },
    { title: "Year", field: "year",filter: 'agNumberColumnFilter', },
    { title: "Date", field: 'date',filter: 'agDateColumnFilter',  },
    { title: "Sport", field: 'sport',filter: 'agTextColumnFilter', },
    { title: "Gold", field: 'gold', filter: 'agNumberColumnFilter', },
    { title: "Silver", field: 'silver',filter: 'agNumberColumnFilter',  },
    { title: "Bronze", field: 'bronze',filter: 'agNumberColumnFilter',  },
    { title: "Total", field: 'total',filter: 'agNumberColumnFilter',  },
  ]

  const onGridReady = (params) => {
    setGridApi(params);
    const datasource = {
      getRows(params) {
        console.log(params.request)
        const { startRow, endRow, sortModel, filterModel } = params.request
        let url = `http://localhost:4000/olympic?`
        if (sortModel.length) {
          const { colId, sort } = sortModel[0]
          url += `_sort=${colId}&_order=${sort}&`
        }
        const filtersKey = Object.keys(filterModel)
        if (filtersKey.length) {
          filtersKey.map(filter => {
            url += `${filter}=${filterModel[filter].filter}&`
          })
        }

        url += `_start=${startRow}&_end=${endRow}}`
        fetch(url)
          .then(httpResponse => httpResponse.json())
          .then(response => {
            params.successCallback(response, 499);
          })
          .catch(error => {
            console.error(error);
            params.failCallback();
          })
      }
    };

    params.api.setServerSideDatasource(datasource);
  }

  return (
    <div className="ag-theme-alpine" style={{ height: 600, }}>
      <h1>React-App</h1>
      <AgGridReact
        //  rowData={rowData} 
        pagination={true}
        // paginationPageSize={10}
        columnDefs={columns}
        rowModelType={'serverSide'}
        autoHeight={true}
        animateRows={true}
        onGridReady={onGridReady}
        defaultColDef={{ floatingFilter: true, filter: true, sortable: true }} />

    </div>
  );
};
export default App