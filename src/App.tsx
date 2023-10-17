import './App.css';
import Home from './paginas/home/Home';
import Navbar from './components/navBar/NavBar';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/footer/Footer';
import ListaCategoria from './components/categoria/listaCategoria/ListaCategoria';
import FormularioCategoria from './components/categoria/formularioCategoria/FormularioCategoria';
import DeletarCategoria from './components/categoria/deletarCategoria/DeletarCategoria';



function App() {
    return (
        <>
            <Navbar />
            <div className='min-h-[80vh]'>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/categoria" element={<ListaCategoria />} />
                    <Route path="/cadastroCategoria" element={<FormularioCategoria />} />
                    <Route path="/editarCategoria/:id" element={<FormularioCategoria />} />
                    <Route path="/deletarCategoria/:id" element={<DeletarCategoria />} />
                </Routes>
            </div>
            <Footer />
        </>
    )
}



export default App; 
