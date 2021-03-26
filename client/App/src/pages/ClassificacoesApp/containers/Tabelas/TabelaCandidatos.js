import React from 'react'
import styles from './Tabelas.module.css'
import DataTable from 'react-data-table-component';

function TabelaCandidatos(props){
    const data = props.data
    const columns = [
        {
          name: <h3> ID </h3>,
          selector: 'candidato_id',
          sortable: true,
          maxWidth: '5px' 
        },
        {
          name: <h3> NOME </h3>,
          selector: 'candidato_nome',
          sortable: true,
          maxWidth: '300px'  
        }, 
        {
          name: <h3> CONCURSO </h3>,
          selector: 'concurso_nome',
          sortable: true,
          maxWidth: '350px' 
        },
        {
          name: <h3>CARGO </h3>,
          selector: 'cargo_nome',
          sortable: true,
          maxWidth: '350px'  
        },
        {
          name: <h3>NOTA</h3>,
          selector:'candidato_nota_final',
          sortable: true,
          maxWidth: '10px' 
        },
        {
          name: <h3>CLASSIFICAÇÃO</h3>,
          selector: 'candidato_classificacao',
          sortable: true,
          maxWidth: '10px'  
        }  
    ]  


    return(      
        <div className={ styles.container }>                                  
            <DataTable
              title= { <h2>CANDIDATOS</h2> }  
              columns= { columns }
              data = { data }  
              highlightOnHover          
            />
        </div>
    )
}

export default TabelaCandidatos