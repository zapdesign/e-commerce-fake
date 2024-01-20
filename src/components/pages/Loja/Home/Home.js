/* eslint-disable jsx-a11y/alt-text */
import styles from './Home.module.css'

import banner from '../../../../img/LP.png'
import CategoriasGeral from './CategoriasGeral.js'
import { useEffect } from 'react'

function Home({categorias, produtos, recarregarProdutos}){
    useEffect(()=>{
        recarregarProdutos()
    }, [])
    return (
        <>
            <img src={banner} className={styles.imagemHome} />

            <CategoriasGeral categorias={categorias} produtos={produtos}/>
        </>
    )
}

export default Home