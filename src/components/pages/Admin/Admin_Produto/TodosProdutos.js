import { useEffect } from "react"
import ProdutoLista from "./ProdutoLista"

function TodosProdutos({produtos,editar,recarregarProdutos, excluir, categorias}){
    useEffect(()=>{
        recarregarProdutos()
    }, [])

    return <div>
        <h1>Todos os produtos</h1>
        <ProdutoLista produtos={produtos} editar={editar} categorias={categorias} excluir={excluir}/>
    </div>
}

export default TodosProdutos