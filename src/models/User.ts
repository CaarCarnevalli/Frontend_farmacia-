import IProduct from "./Product";

export default interface IUser {
    id: number,
    nome: string,
    usuario: string,
    senha: string,
    produto: IProduct | null,
    foto: string
}