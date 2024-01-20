import { useEffect, useState } from 'react'
import styles from './Produto.module.css'

function Produto({adicionarCarrinho, editar, carrinho, produtos, produtoAtual}){

    const [ temEstoque, setEstoque ] = useState(false)

    useEffect(() => {
        if(produtoAtual.quantidade > 0){
            setEstoque(true)
        }
    })

    const carrinhoTodos = carrinho.map(todos => todos.produto)



    const nome = produtos.nome.slice(0, 20)
    const desc = produtos.desc.slice(0, 65)
    const preco = Number(produtos.preco).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    
    function carrinhoAdd(){
        if(produtos.quantidade !== 0){
            if(!carrinhoTodos.includes(produtos.id)){
                adicionarCarrinho({produto: produtos.id, quantidade: 1}, 'carrinho')
            }else{
                let carrinhoAtual = carrinho.filter(todos => todos.produto === produtos.id)
                let novaQuantidade = Number(carrinhoAtual[0].quantidade + 1)
                if(novaQuantidade <= produtos.quantidade){
                    editar(carrinhoAtual[0].id ,{id: carrinhoAtual[0].id, produto: produtos.id, quantidade: novaQuantidade}, 'carrinho')
                }else{
                    console.log('futura mensagem de erro: Não existe mais itens desse produto.')
                }
            }
        }else{console.log('Futura mensagem de erro: Esse produto não tem mais em estoque')}}

    return (
        <>
         {temEstoque ? 
            (
            <div className={styles.fundo}> 
        
                <img src={produtos.img} className={styles.imgCategorias}/>

                <div className={styles.organizarDados}>
                    <h4 className={styles.preco}>{preco}</h4>
                </div>

                <div className={styles.organizarDados}>

                    <h3>{nome}</h3>
                    <p className={styles.max}>{desc}</p>

                    <div className={styles.alinharBotoes}>
                        <button className={styles.verBotao}>Ver mais</button>
                        <button className={styles.carrinhoBotao} onClick={carrinhoAdd}>Adicionar ao carrinho</button>
                    </div>

                </div>
            </div>
            ) : (
                <div className={styles.fundo}> 
        
                <img src={produtos.img} className={styles.imgCategorias}/>

                <div className={styles.organizarDados}>
                    <h4 className={styles.preco}>{preco}</h4>
                </div>

                <div className={styles.organizarDados}>

                    <h3>{nome}</h3>
                    <p className={styles.max}>{desc}</p>

                    <div className={styles.alinharBotoes}>
                        <p className={styles.semEstoque}>Sem estoque</p>
                    </div>

                </div>
            </div>)
        }
        </>
    )
}

export default Produto