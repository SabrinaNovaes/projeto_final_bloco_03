import type Produto from "./Produtos"

export default interface Categoria {
    id: number 
    nome: string
    produto: Produto | null 
}