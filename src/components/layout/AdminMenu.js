import { Link } from 'react-router-dom'

import styles from './AdminMenu.module.css'

import { FaCartArrowDown } from "react-icons/fa";
import { FaCaretLeft } from "react-icons/fa";


const AdminMenu = ({children}) => {
    return (
        <>
           <menu className={styles.menuAdmin}>
                <div>
                    <Link to="/admin"className={styles.logoAdmin}><FaCartArrowDown className={styles.logo} /></Link>
                    <ul className={styles.alinharNavAdmin}>

                        <div className={styles.ItensCadaSessao}>
                            <p className={styles.itensMenuAdmin}>Pedidos</p>
                            <li><Link className={styles.itensMenuLink} to="/admin/criar-pedidos">Criar Pedidos</Link></li>
                            <li><Link className={styles.itensMenuLink} to="/admin/todos-os-pedidos">Todos os Pedidos</Link></li>
                        </div>

                        <div className={styles.ItensCadaSessao}>
                            <p className={styles.itensMenuAdmin}>Produto</p>
                            <li><Link className={styles.itensMenuLink} to="/admin/criar-produto">Criar Produto</Link></li>
                            <li><Link className={styles.itensMenuLink} to="/admin/todos-os-produtos">Todos os Produto</Link></li>
                        </div>

                        <div className={styles.ItensCadaSessao}>
                            <p className={styles.itensMenuAdmin}>Categoria</p>
                            <li><Link className={styles.itensMenuLink} to="/admin/criar-categoria">Criar Categoria</Link></li>
                            <li><Link className={styles.itensMenuLink} to="/admin/todas-as-categorias">Suas Categoria</Link></li>
                        </div>



                    </ul>
                </div>
                <Link to="/" className={styles.sairAdm}><FaCaretLeft />Sair</Link>
            </menu> 
            
            <div className={styles.conteudoAcessado}>{children}</div>
        </>
    )
}

export default AdminMenu
