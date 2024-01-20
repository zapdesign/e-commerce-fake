import { useState } from "react";
import ModalExcluir from "../../../layout/Modal/ModalExcluir.js"
import ModalPopup from "../../../layout/Modal/ModalPopup/ModalPopup"


import styles from './CategoriaLista.module.css'

import { FaEdit } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";


function CategoriaLista({categorias, excluir, editar, oque}){
    const [ modalExiste, setModal ] = useState(false)
    const [ modalClicado, setClicado ] = useState()
    const [ editarExiste, setEditar ] = useState(false)

    function abrirModal(idClicado){
        setModal(true)
        setClicado(idClicado)
    }

    function fecharModal(){
        setModal(false)
    } 

    function abrirEdicao(idClicado){
        setEditar(true)
        setClicado(idClicado)
    }

    function fecharEdicao(){
        setEditar(false)
    }

    return (
        <div className={styles.fundoCategoria}>
            {categorias.map((todos, index) => (
                <div key={todos.id} className={styles.categoriaOrganizar}>
                    <h2>{index + 1} - {todos.nome}</h2>
                    <div className={styles.iconesPrincipalCategoria}>
                        <FaEdit className={styles.iconesPrincipalCat} onClick={(e) => abrirEdicao(todos)} />
                        <FaTrash className={styles.iconesPrincipalCat} onClick={(e) => abrirModal(todos.id)}/>

                        {modalExiste && modalClicado === todos.id ?(
                        <ModalExcluir fecharModal={fecharModal} prod={'categorias'} excluir={excluir} id={todos.id}/>
                    ): ('')}
                    </div>
                </div>
            ))}

        {editarExiste && <ModalPopup tipo='categoria' idDoClicado={modalClicado} fechar={fecharEdicao} editar={editar} oque={'categorias'}/>}
        </div>
    )
}

export default CategoriaLista