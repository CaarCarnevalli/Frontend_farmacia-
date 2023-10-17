import ICategoria from "./Category";
import IUser from "./User";

export default interface IProduct {
    id: number,
    nome: string,
    preco: string,
    descricao: string,
    categoria: ICategoria | null,
    usuario: IUser | null, 
    foto: string 
}