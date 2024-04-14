import { Categoria } from "../entities/Categoria"
import { Usuario } from "../entities/Usuario"
import { Cor } from "./cores"
import { Status } from "./status"

export interface CategoriaData {
    nome: string
    cor: string
}

export interface TarefaData {
    titulo: string
    descricao: string
    dt_criacao: string
    dt_conclusao: string
    tipo: string
    status: string
    categoria: number[]
    usuario: number
}

export interface UsuarioData {
    username: string
    peso: number
    senha: string
    email: string
}