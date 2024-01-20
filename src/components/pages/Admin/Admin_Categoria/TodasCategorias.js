import { useEffect, useMutation } from "react"
import CategoriaLista from "./CategoriaLista"
import { useQuery } from 'react-query'
import axios from 'axios'

function TodasCategorias({categorias,recarregarProdutos, excluir, editar, oque}){

    
  // const { data, isLoading } = useQuery("categorias", () => {
  //   return axios.get('http://localhost:5000/categorias')
  //     .then(response => response.data)
  // })

  // if(isLoading){
  //   return console.log('carregando ainda')

  // }


    return (
        <div>
            <h1>Suas Categorias</h1>
            <CategoriaLista oque={oque} categorias={categorias} excluir={excluir} editar={editar}/>
        </div>
    )
}

export default TodasCategorias