import IProduct from "./Product";

export default interface ICategory {
    id: number,
    nome: string,
    descricao: string,
    product?: IProduct | null
}