import FormsCategoria from './FormsCategoria'
import FormsProduto from './FormsProduto'
import styles from './ModalPopup.module.css'

function ModalPopup({fechar, produtos, idDoClicado, editar, oque, categorias}){
    
    function submit(id, alterados, oque){
        editar(id, alterados, oque)
        fechar()

    }
    return (
        <div className={styles.fundoModalForm}>
            <div className={styles.fundoFormsModal} >
                {oque === 'categorias' ?
                <FormsCategoria oque={oque} submit={submit} idDoClicado={idDoClicado}/> 
                : <FormsProduto produtos={produtos} oque={oque} submit={submit} idDoClicado={idDoClicado} categorias={categorias} />}
                <p className={styles.cancelar} onClick={fechar}>Cancelar</p>
            </div>
        </div>
    )
}

export default ModalPopup