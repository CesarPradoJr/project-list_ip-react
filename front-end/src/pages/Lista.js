//Página responsável por incluir os ips desejados na lista de exclusão
import React from 'react';
import MaterialTable from 'material-table'
import { forwardRef } from 'react';

import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import { TablePagination } from '@material-ui/core';

const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
  };

function Lista() {
  let page = 0
  return (
    <div className='container'>
    <MaterialTable
      title="Lista Filtrada"
      columns={[
        { title: 'IP', field: 'ip', filtering: false },
        { title: 'Tipo', field: 'tipo'}
      ]}
      data={query =>
        new Promise((resolve, reject) => {
          let url = 'http://localhost:3333/default_list/'
          fetch(url)
            .then(response => response.json())
            .then(result => {
              console.log(query)
              let dados
              if(query.filters.length > 0){
               dados = result.filter(ip => ip.tipo.includes(query.filters[0].value))
              }else{
                dados = result
              }
              dados = dados.slice((query.pageSize*(page-1)),(query.pageSize*(page)))
              resolve({
                data: dados,
                page: page,
                totalCount: dados.length
              })
            })
        })
        
      }
      components={{
        Pagination: props => (
          <TablePagination
                  {...props}
            rowsPerPageOptions={[5, 10, 20, 30]}
            onPageChange={(e, page) =>
              page = page + 1
            }
          />
        ),
      }}
      icons={tableIcons} 
      options={{
        filtering: true,
      }}
    />
    </div>
  )
}


export default Lista