import { useEffect, useState } from 'react';
import styles from './Carrinho.module.css'
import { BsCart4 } from "react-icons/bs";

function TotalCarinho({comprar, carrinho, produtos}){

    // const cada = []
    // const [total, setTotal] = useState(0)

    // function somar(a, b){
    //     return Number(a) + Number(b)
    // }
    
    // useEffect(() =>{
    //     juntarDados()
    // })

    // function atualizarDados(){
    //     console.log(cada.reduce(somar))
    // }

    // function juntarDados(){
    //     const idDoProd = carrinho.map(tudo => tudo.produto)
    //     const estaEmCarrinho = produtos.filter(tudo => idDoProd.includes(tudo.id))

    //     estaEmCarrinho.forEach((tudo) =>{
    //         carrinho.forEach(geral => {
    //             if(geral.produto === tudo.id){
    //                 cada.push(Number(tudo.preco) * Number(geral.quantidade))
    //             }
    //         })
    //        atualizarDados()
    //     })
       
        
    // }
    

    return (
        <div className={styles.geralResultados}>
            <div className={styles.fundoValoresResultados}>
                <div className={styles.fundoValoresCedula01}>
                    <p>Subtotal</p>
                </div>
                <div className={styles.fundoValoresCedula02}>
                    <p className={styles.totalValoresProduto}>Em breve</p>
                </div>
            </div>

            <div className={styles.fundoValoresResultados}>
                <div className={styles.fundoValoresCedula03}>
                    <p>Entrega</p>
                </div>
                <div className={styles.fundoValoresCedula04}>
                    <p className={styles.totalValoresProduto}>calcular</p>
                </div>
            </div>

            <div className={styles.fundoValoresResultados}>
                <div className={styles.fundoValoresCedula03}>
                    <p>Total</p>
                </div>
                <div className={styles.fundoValoresCedula04}>
                    <p className={styles.totalValoresProduto}>Em breve</p>
                </div>
            </div>

            <div>
                <button className={styles.botaoComprar} onClick={comprar}><BsCart4 /> Comprar Agora</button>
            </div>
        </div>
    )
}

export default TotalCarinho