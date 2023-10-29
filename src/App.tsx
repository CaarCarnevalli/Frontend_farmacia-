import { useState } from 'react';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import Login from './paginas/login/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { ToastContainer } from 'react-toastify';
import Cadastro from './paginas/cadastro/Cadastro';
import SideBar from './components/sideBar/SideBar';
import Home from './paginas/home/Home';
import Footer from './components/footer/Footer';
import ListaCategorias from './components/produto/listaProdutos/ListaProdutos';
import FormularioCategoria from './components/produto/formularioProduto/FormularioProduto';
import DeletarCategoria from './components/produto/deletarProduto/DeletarProduto';
import ListaProdutos from './components/produto/listaProdutos/ListaProdutos';
import FormularioProduto from './components/produto/formularioProduto/FormularioProduto';
import { List } from '@phosphor-icons/react'
import Perfil from './paginas/perfil/Perfil';
import DeletarProduto from './components/produto/deletarProduto/DeletarProduto';

const App: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <AuthProvider>
        <ToastContainer />
      <BrowserRouter>
        <div className="flex">
          <div className={`w-64 bg-gray-200 ${isSidebarOpen ? '' : 'hidden'}`}>
            <SideBar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
          </div>
          <div className="flex-1">
            <button
              className="text-rose-500 px-1000 py-1000 fixed top-4 left-4"
              onClick={toggleSidebar}
            >
              {isSidebarOpen ? "" : <List size={48} />}
            </button>
            <div className="p-0">
              <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cadastrar" element={<Cadastro />} />
            <Route path="/home" element={<Home />} />
            <Route path="/categorias" element={<ListaCategorias />} />
            <Route path="/cadastroCategoria" element={<FormularioCategoria />} />
            <Route path="/editarCategoria/:id" element={<FormularioCategoria />} />
            <Route path="/deletarCategoria/:id" element={<DeletarCategoria />} />
            <Route path="/produtos" element={<ListaProdutos />} />
            <Route path="/cadastroProduto" element={<FormularioProduto />} />
            <Route path="/editarProduto/:id" element={<FormularioProduto />} />
            <Route path="/deletarProduto/:id" element={<DeletarProduto />} />
            <Route path="/perfil" element={<Perfil />} />
            </Routes>
          </div>
        </div>
        </div>
        <Footer />
      </BrowserRouter>
    </AuthProvider>
        );
}
export default App;