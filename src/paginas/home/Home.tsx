import home from '../../assets/bonequinho.jpg' 
import ListaCategoria from '../../components/categoria/listaCategoria/ListaCategoria';



function Home() {
    return (
        <>
        <div className="bg-red-500 flex justify-center">
          <div className='container grid grid-cols-2 text-white'>
            <div className="flex flex-col gap-4 items-center justify-center py-4">
              <h2 className='text-5xl text-black font-bold'>Bem vindo</h2>
              <p className='text-xl text-black'>No que podemos te ajudar hoje?</p>
  
              <div className="flex justify-around gap-4">
              
              <button className='rounded bg-white text-blue-800 py-2 px-4'>Ver Produtos</button>
            </div>
            </div>
            <div className="flex justify-center ">
              <img src={home} alt="" className='w-2/3' />
            </div>
          </div>
        </div>
        <ListaCategoria/>
      </>
    );
}

export default Home;