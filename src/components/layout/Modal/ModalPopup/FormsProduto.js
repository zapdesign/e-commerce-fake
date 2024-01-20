import { useEffect, useState } from 'react'
import styles from './ModalPopup.module.css'

function FormsProduto({idDoClicado,produtos, submit, oque, categorias}){
    useEffect(() => {
        const produtoAtual = produtos.filter(todos => todos.id === idDoClicado)
        atribuir(produtoAtual)
    }, [])

    function atribuir(atual){
        setAlteracoes(atual[0])

    }

    const [alterados, setAlteracoes ] = useState({
        nome: "",
        desc: "",
        preco: "",
        img: "",
        quantidade: "",
        categoria: "",
      })

    const handleSubmit = (e) => {
        e.preventDefault()
        submit(idDoClicado, alterados, oque )
    }

    function handleChange(e){
        setAlteracoes({...alterados, [e.target.name]: e.target.value})
    } 


    return (
        <>
            <p className={styles.texto}>Altere os dados do seu produto</p>
            <form onSubmit={handleSubmit} className={styles.form}>
                <input className={styles.inputForms} type="text" name="nome" value={alterados.nome} placeholder="Nome do produto" onChange={handleChange} required/>
                <input className={styles.inputForms} type="text" name="desc" value={alterados.desc} placeholder="Descrição" onChange={handleChange} required/>
                <input className={styles.inputForms} type="number" name="preco" value={alterados.preco} placeholder="Preço" onChange={handleChange} required/>
                <div className={styles.quebradoForms}>
                    <label htmlFor="disponiveis">Quantidade:</label>
                    <input className={`${styles.inputDisponivel} ${styles.inputForms}`} type="number" value={alterados.quantidade} name="quantidade" placeholder="0" onChange={handleChange} required/>
                </div>
                <input className={styles.inputForms} type="text" name="img" value={alterados.img} placeholder="Link da foto" onChange={handleChange} required/>
                <select className={styles.inputForms} name="categoria" value={alterados.categoria} onChange={handleChange}>
                    <option value="sem-categoria">Selecione uma categoria</option>
                    {categorias.map((cat) => (
                        <option value={cat.id} name="categoria" key={cat.id}>{cat.nome}</option>
                    ))}
                </select>
                <input className={styles.botaoCriar} type="submit" value="Atualizar Produto"/>
            </form>
        </>
    )
}

export default FormsProduto