import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import { X } from "@phosphor-icons/react";
import { toastAlerta } from "../../utils/toastAlerta"

interface SidebarProps {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isSidebarOpen, toggleSidebar }) => {
  const { handleLogout } = useContext(AuthContext);
  const navigate = useNavigate();

  function logout() {
    handleLogout();
    toastAlerta('Usuário deslogado com sucesso', 'info');
    navigate('/');
  }

  const sidebarClasses = `bg-rose-500 h-screen w-64 fixed top-0 left-0 overflow-y-auto transform transition-transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
    }`;

  return (
    <div className={sidebarClasses}>
      <div className="p-0">
        <h1 className="text-white text-2xl font-bold">Menu</h1>
      </div>
      <ul className="space-y-4 mt-6">
        <li>
          <Link to='/login' className="text-white block hover:bg-rose-300 px-4 py-2 rounded">
            Login</Link>

        </li>
        <li>
          <Link to='/' className="text-white block hover:bg-rose-300 px-4 py-2 rounded">
            Home</Link>

        </li>
        <li>
          <Link to='/produtos' className="text-white block hover:bg-rose-300 px-4 py-2 rounded">
            Produtos</Link>

        </li>
        {/* <li>
          <Link to='/categorias' className="text-white block hover:bg-rose-300 px-4 py-2 rounded">
            Categorias</Link>

        </li>
        <li>
          <Link to='/cadastroCategoria' className="text-white block hover:bg-rose-300 px-4 py-2 rounded">
            Cadastrar Categoria</Link>

        </li> */}
        <li>
          <Link to='/perfil' className="text-white block hover:bg-rose-300 px-4 py-2 rounded">
            Perfil</Link>

        </li>
        <li>
          <Link to='' onClick={logout} className="text-white block hover:bg-rose-300 px-4 py-2 rounded">
            Sair</Link>

        </li>
      </ul>
      <button
        className="text-white block hover:bg-rose-300 px-4 py-2 rounded mt-4 align-middle"
        onClick={toggleSidebar}
      >
        <X size={32} />
      </button>
    </div>
  );
};

export default Sidebar;