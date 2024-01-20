import { useState, useEffect } from 'react'
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import { BrowserRouter as Router, Routes, Route, Outlet} from 'react-router-dom'


import Categoria from './components/pages/Loja/Categorias/Categoria.js';
import Menu from './components/layout/Menu';
import Home from './components/pages/Loja/Home/Home.js';

//Admin
import Admin from './components/pages/Admin/Admin.js';
import AdminMenu from './components/layout/AdminMenu.js';
import CriarUmProduto from './components/pages/Admin/Admin_Produto/CriarUmProduto.js';
import CriarUmaCategoria from './components/pages/Admin/Admin_Categoria/CriarUmaCategia.js';
import TodasCategorias from './components/pages/Admin/Admin_Categoria/TodasCategorias.js';
import TodosProdutos from './components/pages/Admin/Admin_Produto/TodosProdutos.js';
import Carrinho from './components/pages/Loja/Carrinho/Carrinho.js';
import TodosPedidos from './components/pages/Admin/Admin_Pedidos/TodosPedidos.js';
import CriarPedido from './components/pages/Admin/Admin_Pedidos/CriarPedido.js';

function App() {

  const queryClient = new QueryClient()


  //Aplicação inicia
  const [ categorias, setCategorias ] = useState([])
  const [ produtos, setProdutos ] = useState([])
  const [ carrinho, setCarrinho ] = useState([])

  useEffect(() => {
    recarregarPagina()
  }, []);

  function recarregarPagina(){
    recarregarProdutos()
    recarregarCategorias()
    recarregarCarrinhos()
  }

  function recarregarProdutos(filter = '', order = ''){
    fetch(`http://localhost:5000/produtos${order}${filter}`)
    .then(resposta => resposta.json())
    .then(data => setProdutos(data))
    .catch(error => console.error(`Erro: ${error}`));
  }
  function recarregarCategorias(order = '', filter = ''){
    fetch(`http://localhost:5000/categorias${order}${filter}`)
    .then(resposta => resposta.json())
    .then(data => setCategorias(data))
    .catch(error => console.error(`Erro: ${error}`));
  }
  function recarregarCarrinhos(order = '', filter = ''){
    fetch(`http://localhost:5000/carrinho${order}${filter}`)
    .then(resposta => resposta.json())
    .then(data => setCarrinho(data))
    .catch(error => console.error(`Erro: ${error}`));
  }

  function criar(conteudo, oque){
  
      fetch(`http://localhost:5000/${oque}`, {
        method: 'POST',
        body: JSON.stringify(conteudo),
      })
        .then(recarregarPagina)
        .catch(console.error)
  }

  

  function excluir(id, oque){
      fetch(`http://localhost:5000/${oque}/${id}`,{
          method: 'DELETE'
      })
      .then(recarregarPagina)
      .catch(console.error)
  }

  function editar(id, novosDados, oque){
      fetch(`http://localhost:5000/${oque}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(novosDados),
      })
      .then(recarregarPagina)
      .catch(err => console.error(`Erro: ${err}`))
  }

  function editarPartes(id, novosDados, oque){
      fetch(`http://localhost:5000/${oque}/${id}`, {
        method: 'PATCH',
        body: JSON.stringify(novosDados),
      })
      .then(recarregarPagina)
      .catch(err => console.error(`Erro: ${err}`))
  }




  return (
    <Router>
      <QueryClientProvider client={queryClient}>
          <Routes> 
              <Route
                path="/"
                element={
                  <Menu carrinho={carrinho}>
                    <Outlet />
                  </Menu>
                }
              >
                <Route index element={<Home recarregarProdutos={recarregarProdutos} categorias={categorias} produtos={produtos} />} />

                <Route path="/categorias"  element={<Categoria recarregarProdutos={recarregarProdutos} recarregarPagina={recarregarPagina} adicionarCarrinho={criar} editar={editar} categorias={categorias} carrinho={carrinho} produtos={produtos} />} />
                <Route path='/carrinho' element={<Carrinho  recarregarProdutos={recarregarProdutos} removerCarrinho={excluir} editar={editar} editarPartes={editarPartes} categorias={categorias} carrinho={carrinho} produtos={produtos}/>} />
              </Route>
              <Route 
                path='/admin'
                element={
                  <AdminMenu>
                    <Outlet />
                  </AdminMenu>
                }
                >
                  <Route index element={<Admin categorias={categorias} />} />

                  <Route path='criar-produto'  element={<CriarUmProduto oque={'produtos'} recarregarProdutos={recarregarProdutos} criar={criar} categorias={categorias}/>}/>
                  <Route path='criar-categoria' element={<CriarUmaCategoria recarregarProdutos={recarregarProdutos} oque={'categorias'} criar={criar} categorias={categorias}/>}/>

                  <Route path='criar-pedidos'  element={<CriarPedido oque={'pedidos'} criar={criar} categorias={categorias}/>}/>
                  <Route path='todos-os-pedidos' element={<TodosPedidos oque={'pedidos'} criar={criar} categorias={categorias}/>}/>


                  <Route path='todos-os-produtos' element={<TodosProdutos recarregarProdutos={recarregarProdutos} oque={'produtos'} produtos={produtos} categorias={categorias} excluir={excluir} editar={editar}/>}/>
                  <Route path='todas-as-categorias' element={<TodasCategorias recarregarProdutos={recarregarProdutos} oque={'categorias'} categorias={categorias} excluir={excluir} editar={editar}/>}/>
                </Route>
          </Routes>
        </QueryClientProvider>
    </Router>
  );
}

export default App;
