import { Link } from 'react-router-dom'

import { FaCartArrowDown } from "react-icons/fa";
import styles from './Menu.module.css'

function SimbolCart({carrinho}){
    
    return (
        <div>
            <div className={styles.quantidadeCart}>{carrinho.length}</div>
            <Link to="/carrinho"><FaCartArrowDown className={styles.iconesMenu}/> </Link>
        </div>
    )
}

export default SimbolCart