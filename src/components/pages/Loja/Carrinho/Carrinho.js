import { useEffect, useState } from 'react'
import styles from './Carrinho.module.css'
import ItensCarinho from './ItensCarrinho'
import Mensagem from '../../../layout/Mensagem';
import TotalCarinho from './TotalCarrinho';

function Carrinho({carrinho,recarregarProdutos, editarPartes, editar, removerCarrinho, produtos}){
    const [visivel, setVisible] = useState(false)
    const [msg, setMsg] =useState('')
    const [tipo, setTipo] =useState('')

    function abrirMensagem(msg, tipo){
        setVisible(true)
        setMsg(msg)
        setTipo(tipo)

        const timer = setTimeout(() => {
            setVisible(false)
        }, 4000)

    }

    function remover(id){
        removerCarrinho(id, 'carrinho')
    }

    const [ idProdutoCarrinho, setCarrinhoExiste ] = useState(false)

    useEffect(() => {
        existeProduto()
        recarregarProdutos()
    }, [])

    function existeProduto(){
        if(carrinho.length !== 0){
           setCarrinhoExiste(true)
        }else{
            setCarrinhoExiste(false)
        }
    }    


    function comprar(){  

        let existeTodos = true

        let produtosSemEstoque = []
        let produtosEmEstoque = []
        let idDoProd = carrinho.map(tudo => tudo.produto)

        let produtoNoCart = produtos.filter(tudo => idDoProd.includes(tudo.id))

        for(let i = 0; i < produtoNoCart.length; i++){
            if(produtoNoCart[i].quantidade > 0 ){
                produtosEmEstoque.push(produtoNoCart)
            }else{
                existeTodos = false
                produtosSemEstoque.push(produtoNoCart[i].id)
            }
        }

        if(existeTodos){
            produtoNoCart.forEach(todos => {
                let carrinhoDoProduto = carrinho.filter(car => car.produto === todos.id )
                 
                let novaQuantidade = todos.quantidade - carrinhoDoProduto[0].quantidade
                editarPartes(todos.id, {quantidade: novaQuantidade}, 'produtos')
            })

            carrinho.map(todos => remover(todos.id))

        }else{
            abrirMensagem('Algum produto do seu carrinho se esgotou', 'ruim')
            let carrinhoProdVazio = carrinho.filter(tudo => produtosSemEstoque.includes(tudo.produto))
            
            carrinhoProdVazio.forEach(produtoZerado => {
                remover(produtoZerado.id)
            })
            
        }

    }
    

    return (
        <div className={styles.fundoCarrinho}>
            <h1>Carrinho</h1>
            <hr className={styles.hr} />
            {visivel && (<div className={styles.headerCarrinhos}>
                <Mensagem msg={msg} tipo={tipo}/>
            </div>)}
            {idProdutoCarrinho &&(
            <div className={styles.headerCarrinhos}>
                <div className={styles.produtoHeader}><p>Produtos</p></div>
                <div className={styles.precoHeader}><p>Preço</p></div>
                <div className={styles.quantidadeHeader}><p>Quantidade</p></div>
                <div className={styles.totalHeader}><p>Total</p></div>
            </div>)}
            
            {idProdutoCarrinho ? carrinho.map(total => (
                <div key={total.id}>
                    <ItensCarinho abrirMensagem={abrirMensagem} editar={editar} removerCarrinho={removerCarrinho} carrinhoProduto={total} produtos={produtos} />
                </div>
            )): (<div className={styles.carrinhoVazio}>Seu carrinho está vazio...</div>)}
                
            {idProdutoCarrinho && (
                <TotalCarinho produtos={produtos} carrinho={carrinho} comprar={comprar}/>
            )}
        </div>
    )
}

export default Carrinho
