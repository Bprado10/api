import React, { useCallback } from 'react'
import styles from './Tabelas.module.css'
import DataTable from 'react-data-table-component';
import axios from 'axios'

function TabelaConcursos(props){
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
        name: <h3>DATA</h3>,
        selector: 'data',
        sortable: true 
      }
    ]

    const handleClick = useCallback(data => {
      const idConcurso = data.id
      axios.get('http://127.0.0.1:5000/concursos/' + idConcurso) 
      .then (res => {
        const apiResult = res.data;    
        props.atualizarTabela("CARGOS",  apiResult )
        }
      ) 
    })
      
    return(              
        <div className={ styles.container}>
              <DataTable
                title = { <h2>CONCURSOS</h2> }  
                columns = { columns }
                data = { data } 
                onRowClicked = { handleClick } 
                highlightOnHover
                pointerOnHover
            
              />  
        </div>
    )
}

export default TabelaConcursos