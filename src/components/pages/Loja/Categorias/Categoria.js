import { useEffect, useState } from 'react'
import Produto from '../../../produtos/Mostruario/Produto.js'
import styles from './Categoria.module.css'


function Categoria({adicionarCarrinho,recarregarPagina, recarregarProdutos, carrinho,editar, categorias, produtos}){
  useEffect(() => {
    recarregarPagina()
  }, [])


  const [ cat, setCat ] = useState('')
  const [ sort, setSort ] = useState('')
  
  function trocarDados(){
    recarregarProdutos(`${cat}`, `${sort}` )
    console.log(cat, sort)
  }

  async function atualizarCategoria(novaCat) {
    return new Promise(resolve => {
      setCat(novaCat);
      resolve();
    });
  }

  async function trocarCat(categoria){
    await atualizarCategoria(categoria === '' ? '' : `?categoria=${categoria}`);
    trocarDados()

  }

  function trocarOrd(){

  }

    return (
        <div className={styles.geral}>
          <div className={styles.alinharHeader}>
            <h1>Categorias</h1>
            <div className={styles.alinharHeader}>
              <p>Filtre Aqui</p>
              <select onChange={e => trocarCat(e.target.value)} className={styles.select}>
                <option value=''>Todas as categorias</option>
                {categorias.map(todas => (
                  <option key={todas.id} value={todas.id}>{todas.nome}</option>
                ))}
              </select>
              <p>Ordem:</p>
              <select onChange={e => trocarOrd(e.target.value)} className={styles.select}>
                <option value="">Sem Ordem</option>
              </select>
              </div>
          </div>
          <div className={styles.alinhar}>
            {produtos.map(dados => (
              <div key={dados.id} className={styles.produtoTamanho}>
                <Produto produtoAtual={dados} editar={editar} carrinho={carrinho} adicionarCarrinho={adicionarCarrinho} categoria={dados.id} produtos={dados}/>
              </div>  
            ))}
          </div>
        </div>
    )
}

export default Categoria