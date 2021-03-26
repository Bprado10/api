import React, { useState } from 'react'
import styles from './Tabelas.module.css'
import TabelaConcursos from './TabelaConcursos'
import TabelaCargos from './TabelaCargos'
import TabelaCandidatos from './TabelaCandidatos'
import TabelaCompleta from './TabelaCompleta'


function Tabelas(props){
  return (    
    <>      
      { props.tabela_id==="CONCURSOS" && 
        <TabelaConcursos data={props.tabela_data} atualizarTabela = {props.atualizarTabela}/> }

      { props.tabela_id==="CARGOS" && 
        <TabelaCargos data={props.tabela_data} atualizarTabela = {props.atualizarTabela}/> }
        
      { props.tabela_id==="CANDIDATOS" && <TabelaCandidatos data={props.tabela_data}/> }
      { props.tabela_id==="COMPLETA" && <TabelaCompleta data={props.tabela_data}/> }
    </>  
  )
}

export default Tabelas