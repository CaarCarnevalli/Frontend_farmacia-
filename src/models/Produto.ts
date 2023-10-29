import Categoria from './Categoria';
import Usuario from './Usuario';

export default interface Produto {
  id: number;
  nome: string;
  descricao: string;
  categoria: Categoria | null;
  usuario: Usuario | null;
}