import React, { useCallback, useState } from 'react'
import styles from './Tabelas.module.css'
import DataTable from 'react-data-table-component';
import axios from 'axios'

function TabelaCargos(props){
  const data = (props.data)
  const concursoId = (props.data[0])
  const [idConcurso, setIdConcurso] = useState(concursoId)

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
    }
    ]    

  const handleClick = useCallback(data => {      
      const idCargo = data.id     
      axios.get('http://127.0.0.1:5000/cargos/' + idCargo) 
        .then (res => {
          const apiResult = res.data  
          props.atualizarTabela("COMPLETA", apiResult)
      })
    })  
    

  return(
    <div className={ styles.container}>
      <DataTable
        title= { <h2>CARGOS</h2> }   
        columns={columns}
        data ={ data }    
        highlightOnHover
        pointerOnHover
        onRowClicked = { handleClick }
       />  
    </div>
    )
  }

export default TabelaCargos