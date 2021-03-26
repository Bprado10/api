import React from 'react'
import styles from './Tabelas.module.css'
import DataTable from 'react-data-table-component';

function TabelaCompleta(props){
    const data = props.data
    const columns = [
      {
        name: <h3>ID</h3>,
        selector: 'id',
        sortable: true,
        maxWidth: '5px' 
      },
      {
        name: <h3>NOME</h3>,
        selector: 'nome',
        sortable: true 
      },
      {
        name: <h3>NOTA</h3>,
        selector: 'notafinal',
        sortable: true 
      }, 
      {
        name: <h3>CLASSIFICAÇÃO</h3>,
        selector: 'classificacao',
        sortable: true 
      }
    ]     
    return(        
        <div className={ styles.container}>
              <DataTable
                title= { <h2>CANDIDATOS</h2> }  
                columns = { columns }
                data ={ data }     
                highlightOnHover
  
              />  
        </div>
    )
}

export default TabelaCompleta