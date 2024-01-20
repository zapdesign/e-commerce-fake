import IndividualCarrinho from './IndividualCarrinho';
import styles from './ItensCarrinho.module.css'
import { FaTrash } from "react-icons/fa";


function ItensCarinho({carrinhoProduto,abrirMensagem, existeProduto, editar, removerCarrinho, produtos}){

    const apenasNoCarrinho = produtos.filter(todos => todos.id === carrinhoProduto.produto)

    return (
        <>
            {apenasNoCarrinho.map(todos => (
                <div key={todos.id}>
                    <IndividualCarrinho abrirMensagem={abrirMensagem} existeProduto={existeProduto} editar={editar} removerCarrinho={removerCarrinho} carrinhoProduto={carrinhoProduto} produto={todos}/>
                </div>
            ))}
        </>
    )
}

export default ItensCarinho