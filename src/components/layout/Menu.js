import { Link } from 'react-router-dom'

import { FaCartArrowDown } from "react-icons/fa";
import { SiInstacart } from "react-icons/si";


import styles from './Menu.module.css'
import SimbolCart from './SimbolCart';



const Menu = ({children, carrinho}) => {

    return (
    <>
        <menu className={styles.menuSite}>
            <SiInstacart className={styles.iconesMenu} />
            <ul className={styles.menuPrincipal}>
                <li><Link className={styles.itensMenuPrincipal} to="/">Home</Link></li>
                <li><Link className={styles.itensMenuPrincipal} to="/categorias">Categorias</Link></li>
                <li><Link className={styles.itensMenuPrincipal} >Novas Peças</Link></li>
                <li><Link className={styles.itensMenuPrincipal} >Contato</Link></li>
                <li><Link className={styles.itensMenuPrincipal} target='blank' to="/admin">Admin</Link></li>
            </ul>
            <SimbolCart carrinho={carrinho}/>
       </menu>

       {children}
    </>
    )
}

export default Menu