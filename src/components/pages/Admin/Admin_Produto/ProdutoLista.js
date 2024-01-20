import { FaEdit } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";

import styles from './ProdutoLista.module.css'
import ModalExcluir from "../../../layout/Modal/ModalExcluir.js";
import { useState } from "react";
import ModalPopup from "../../../layout/Modal/ModalPopup/ModalPopup.js";

function ProdutoLista({produtos, excluir, categorias, editar}){
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
        fecharModal()
        setEditar(true)
        setClicado(idClicado)
    }

    function fecharEdicao(){
        setEditar(false)
    }
 
    return (
        <div className={styles.geralProdutos}>
            {produtos.map(todos => (
            <div key={todos.id} className={styles.fundoProduto}>
                <div>
                    <img className={styles.imagemPrincipalProduto} src={todos.img} alt="" />                    
                </div>
                <div className={styles.geralPrincipalProduto}>
                    <h2>{todos.nome}</h2>
                    <p>{todos.desc}</p>
                    <p>Quantidade atual: {todos.quantidade}</p>
                </div>
                <div className={styles.iconesPrincipalProduto}>
                    <FaEdit className={styles.iconesPrincipal} onClick={(e) => abrirEdicao(todos.id)} />
                    <FaTrash className={styles.iconesPrincipal} onClick={(e) => abrirModal(todos.id)}/>
                    {modalExiste && modalClicado === todos.id ?(
                        <ModalExcluir fecharModal={fecharModal} prod={'produtos'} excluir={excluir} id={todos.id}/>
                    ): ('')}
                
                </div>

                
                {editarExiste && <ModalPopup categorias={categorias} produtos={produtos} idDoClicado={modalClicado} fechar={fecharEdicao} editar={editar} oque={'produtos'}/>}
            </div>
            ))}
        </div>
    )
}

export default ProdutoLista