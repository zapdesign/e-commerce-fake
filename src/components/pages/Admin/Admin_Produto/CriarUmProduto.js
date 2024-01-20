import { useEffect, useState } from "react"
import styles from "./CriarUmProduto.module.css"
import Mensagem from "../../../layout/Mensagem"

function CriarUmProduto({categorias,recarregarProdutos, criar, oque}){
    useEffect(()=>{
        recarregarProdutos()
    }, [])

    
    const [produto, setProduto] = useState([])

    const [msg, setVisible] = useState(false)
    const [msgText, setmsgText] = useState()
    const [tipoMsg, setTipoMsg] = useState()

    function abrirMensagem(texto, tipo){
        setmsgText(texto)
        setTipoMsg(tipo)
        setVisible(true)

        const timer = setTimeout(() => {
            setVisible(false)
        }, 4000)

    }


    const submit = (e) => {
        e.preventDefault()
        setVisible(false)
        if(produto.categoria === undefined || produto.categoria === 'sem-categoria' || produto.categoria === null){
            abrirMensagem('Selecione uma categoria!', 'ruim')
        }else{
            handleChange(e)
            criar(produto, oque)
            abrirMensagem('Seu produto foi criado com suesso!', 'bom')
        }
    }

    function handleChange(e){
        setProduto({...produto, [e.target.name]: e.target.value})
    }

    return (
        <div>
            <h1>Faça a criação de um novo Produto</h1>
            <br></br>
            {msg && <Mensagem msg={msgText} tipo={tipoMsg}/>}
            <form onSubmit={submit} className={styles.form}>
                <input className={styles.inputForms} type="text" name="nome" placeholder="Nome do produto" onChange={handleChange} required/>
                <input className={styles.inputForms} type="text" name="desc" placeholder="Descrição" onChange={handleChange} required/>
                <input className={styles.inputForms} type="number" name="preco" placeholder="Preço" onChange={handleChange} required/>
                <div className={styles.quebradoForms}>
                    <label htmlFor="disponiveis">Quantidade:</label>
                    <input className={`${styles.inputDisponivel} ${styles.inputForms}`} type="number" name="quantidade" placeholder="0" onChange={handleChange} required/>
                </div>
                <input className={styles.inputForms} type="text" name="img" placeholder="Link da foto" onChange={handleChange} required/>
                <select className={styles.inputForms} name="categoria" onChange={handleChange}>
                    <option value="sem-categoria">Selecione uma categoria</option>
                    {categorias.map((cat) => (
                        <option value={cat.id} name="categoria" key={cat.id}>{cat.nome}</option>
                    ))}
                </select>
                <input className={styles.botaoCriarProduto} type="submit" value="Criar Produto"/>
            </form>
        </div>
    )
}

export default CriarUmProduto