import React, { useState, useCallback, useEffect, useRef } from 'react'
import styles from './Buscador.module.css'
import Tabelas from '../Tabelas/Tabelas'
import TabelaConcursos from '../Tabelas/TabelaConcursos'
import TabelaCandidatos from '../Tabelas/TabelaCandidatos'
import axios from 'axios'

function Buscador(props) {
    const inputName = useRef(null) 
    useEffect( () => {
        inputName.current.focus()
    },
    [inputName])

    const [ name, setName ] = useState("")   

    const handleChange = useCallback(evt => {
        setName(evt.target.value);      
    }, [setName]
    );

    const handleClick = useCallback(evt => {
        evt.preventDefault();
        axios.get('http://127.0.0.1:5000/concursos')
        .then (res => {
            const apiResult = res.data;    
            props.atualizarTabela("CONCURSOS",  apiResult )            
        }) 
    })

    const handleClick2 = useCallback(evt => {
        evt.preventDefault();
        if (name) {        
        axios.get('http://127.0.0.1:5000/candidatos/' + name)
        .then (res => {
            const apiResult = res.data;  
            props.atualizarTabela("CANDIDATOS", apiResult )
            })
        }
        else{
            alert("O campo 'nome' precisa ser preenchido ");
        }  
    })
      

    return (
        <form className = { styles.container } >
            <h1 className = {styles.title }>CLASSIFICAÇÕES</h1>
            <br></br>
            <button className={ styles.button } onClick={ handleClick } >
                Listar todos os concursos
            </button>
            <br></br>
            <input className = { styles.input } 
            onChange={handleChange}
            type='text'
            autoComplete='off'
            placeholder= 'Nome'
            ref = { inputName }             
            />
            <button className={styles.button} value={name} onClick={ handleClick2 } >
                    Buscar candidato
           </button>
        </form>
    )
}

export default Buscador