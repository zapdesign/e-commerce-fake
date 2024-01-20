import styles from './ItensCarrinho.module.css'
import { FaTrash } from "react-icons/fa";
import { FaMinusCircle } from "react-icons/fa";
import { FaCirclePlus } from "react-icons/fa6";



function IndividualCarrinho({carrinhoProduto,abrirMensagem, existeProduto, editar, removerCarrinho, produto}){

    const totalProduto = Number(produto.preco) * Number(carrinhoProduto.quantidade) 

    function remover(){
        removerCarrinho(carrinhoProduto.id, 'carrinho')
    }
    
    function alterarQuantidade(recebido){
        let novoValor = carrinhoProduto.quantidade + recebido
        if(novoValor <= 0){
            remover()
        }else if(novoValor <= produto.quantidade){
            editar(carrinhoProduto.id,{produto: carrinhoProduto.produto, quantidade: novoValor}, 'carrinho')
        }else{
            abrirMensagem('Nâo possuimos mais em estoque esse produto..', 'medio')
        }
    }

    return (
        <div className={styles.fundoCarrinhoProduto} key={produto.id}>

                    <div className={styles.blocoProduto}>
                        <FaTrash onClick={remover} className={styles.botoesEdicaoCarrinho} />
                        <img className={styles.imagemCart} src={produto.img} alt="" />
                        <h2>{produto.nome}</h2>
                    </div>

                    <div className={styles.blocoPreco}>
                        <h3 className={styles.totalProduto}>{Number(produto.preco).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</h3>
                    </div>

                    <div className={styles.blocoQuantidade}>
                        <FaMinusCircle  onClick={e => alterarQuantidade(-1)} className={styles.botoesEdicaoCarrinho}/>
                            <p className={styles.produtoQuantidade}>{carrinhoProduto.quantidade}</p>
                        <FaCirclePlus onClick={e => alterarQuantidade(+1)} className={styles.botoesEdicaoCarrinho}/>
                    </div>

                    <div className={styles.blocoTotal}>
                        <p className={styles.totalProduto}>{totalProduto.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</p>
                    </div>
         </div>
    )
}

export default IndividualCarrinho