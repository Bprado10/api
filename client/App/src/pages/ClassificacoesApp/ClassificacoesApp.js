import React, { useState } from 'react'
import Buscador from './containers/Buscador/Buscador' 
import Tabelas from './containers/Tabelas/Tabelas' 
import Rodape from './containers/Rodape/Rodape'


function ClassificacoesApp(){   
        const [ tbSelecionada, setTbSelecionada] = useState("")
        const [ tbData, setTbData] = useState([])
    
        function atualizeTabela(id, data){
            setTbSelecionada(id)
            setTbData(data)
        }        
   
    return(
        <>
            <Buscador atualizarTabela = { atualizeTabela } />
            <Tabelas 
                tabela_id = { tbSelecionada } 
                tabela_data = { tbData }
                atualizarTabela = { atualizeTabela }
                />
            <Rodape/>
        </>
    )
}

export default ClassificacoesApp 