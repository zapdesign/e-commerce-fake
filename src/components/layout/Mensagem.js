import { useEffect, useState } from 'react'
import styles from './Mensagem.module.css'

function Mensagem({msg, tipo}){

    return (
        <>  
           <div className={`${styles.fundoMensagem} ${styles[tipo]}`}>{msg}</div>
        </>
    )
}

export default Mensagem