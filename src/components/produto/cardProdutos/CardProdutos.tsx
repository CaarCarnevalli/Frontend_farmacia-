import React from 'react'
import { Link } from 'react-router-dom'
import Produto from '../../../models/Produto'

interface CardProdutoProps {
  produto: Produto
}

function CardProdutos({ produto }: CardProdutoProps) {
  return (
    <div className='border-rose-900 border flex flex-col rounded overflow-hidden justify-between'>
      <div>
        <div className='p-4'>
          <h4 className='text-lg font-semibold uppercase'>{produto.nome}</h4>
          <div className='flex justify-center items-center'>
            <img src={produto.descricao} className='h-24' alt="Imagem do Produto" />
          </div>
          <p>Categoria: {produto.categoria?.descricao}</p>
        </div>
      </div>
      <div className="flex">
        <Link to={'/'} className='w-full text-white bg-rose-400 hover:bg-rose-800 flex items-center justify-center py-2'>
          <button>Comprar</button>
        </Link>
      </div>
    </div>
  )
}

export default CardProdutos