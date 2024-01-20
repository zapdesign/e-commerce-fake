import { useEffect, useState } from 'react'
import styles from './ModalPopup.module.css'

function FormsCategoria({idDoClicado, submit, oque}){

    useEffect(() => {
        atribuir(idDoClicado)
    },[])

    function atribuir(atual){
        setAlteracoes(atual)

    }
    const [alterados, setAlteracoes ] = useState({
        nome: ""
      })

      

    const handleSubmit = (e) => {
        e.preventDefault()
        submit(idDoClicado.id, alterados, oque )
    }


    return (
        <>
            <p className={styles.texto}>Altere sua categoria</p>
                <form onSubmit={handleSubmit} className={styles.form}>
                    <input className={styles.inputForms} name='nome' type="text" value={alterados.nome} onChange={(e) => setAlteracoes({[e.target.name]: e.target.value})}/>
                    <input className={styles.botaoCriar}  type="submit" value="Salvar Mudanças" />
                </form>
        </>
    )
}

export default FormsCategoria