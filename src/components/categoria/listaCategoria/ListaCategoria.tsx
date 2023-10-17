import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../contexts/AuthContext';
//import Categoria from '../../../models/Category';
import { buscar } from '../../../service/Service';
import CardCategoria from '../cardCategoria/CardCategoria';
import Util from '../../../utils/Util';
import ICategory from '../../../models/Category';

function ListaCategoria() {
  const [categoria, setCategoria] = useState<ICategory[]>(Util as ICategory[]);

  /*const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;*/

  async function buscarCategoria() {
    try {
      await buscar('/categoria', setCategoria, {
        headers: { Authorization: token },
      });
    } catch (error: any) {
      if(error.toString().includes('403')) {
        alert('O token expirou, favor logar novamente')
        handleLogout()
      }
    }
  }

 /* useEffect(() => {
    if (token === '') {
      alert('Você precisa estar logado');
      navigate('/login');
    }
  }, [token]);*/

  /*useEffect(() => {
    buscarCategoria();
  }, [categoria.length]);*/

  return (
    <>
      <div className="flex justify-center w-full my-4">
        <div className="container flex flex-col">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categoria.map((categoria) => (
              <>
                <CardCategoria key={categoria.id} categoria={categoria} />
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ListaCategoria;