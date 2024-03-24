import { Categoria } from "./Categoria"
import { Usuario } from "./Usuario"

export class Tarefa {
    id: number
    titulo: string
    descricao: string
    dt_criacao: Date
    dt_conclusao: Date
    tipo: number
    categoria: Categoria
    status: number
    usuario: Usuario
}