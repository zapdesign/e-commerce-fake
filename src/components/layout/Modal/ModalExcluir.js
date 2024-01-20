import styles from './ModalExcluir.module.css'

function ModalExcluir({fecharModal, excluir, id, prod}){
    return(
        <div className={styles.modalGeral}>
            <p className={styles.excluirTexto}>Tem certeza que deseja excluir?</p>
            <div className={styles.separarBotoes}>
                <button className={styles.botaoConfirmar} onClick={(e) => excluir(id, prod)}>Confirmar</button>
                <button className={styles.botaoCancelar} onClick={fecharModal}>Cancelar</button>
            </div>
        </div>
    )
}

export default ModalExcluir