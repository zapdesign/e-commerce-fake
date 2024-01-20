import { useEffect, useState } from "react"
import styles from "./CriarUmaCategoria.module.css"
import Mensagem from "../../../layout/Mensagem"

function CriarUmaCategoria({categorias,recarregarProdutos, criar, oque}){
    useEffect(()=>{
        recarregarProdutos()
    }, [])
    const [categoria, setCategoria] = useState([])

    const [msg, setVisible] = useState(false)

    function abrirMensagem(){

        setVisible(true)

        const timer = setTimeout(() => {
            setVisible(false)
        }, 4000)

    }

    const submit = (e) =>{
        e.preventDefault()
        criar(categoria, oque)
        abrirMensagem()
    }

    return (
        <>
            <h1>Crie uma nova categoria</h1>
            <br></br>
            {msg && <Mensagem msg={'Sua categoria foi criada com sucesso'} tipo={'bom'}/>}
            <form onSubmit={submit} className={styles.form}>
                <input className={styles.inputForms} type="text" name="nome" placeholder="Nome da categoria" onChange={(e) => setCategoria({nome: e.target.value})} required/>
                <input className={styles.botaoCriarCategoria} type="submit" value="Criar Categoria"/>
            </form>            
        </>
        )
}

export default CriarUmaCategoria