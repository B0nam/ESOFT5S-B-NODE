import { AppDataSource } from "../config/data-source"
import { Categoria } from "../entities/Categoria";
import { Tarefa } from "../entities/Tarefa";

export abstract class Queries {
    static async obterCategoriaPorId(id: number) {
        return await AppDataSource
        .getRepository(Categoria)
        .createQueryBuilder('categoria')
        .where(`categoria.id = ${id}`)
    }

    static async obterCategoriaPorUsuario(usuarioId: number) {
        return await AppDataSource
        .getRepository(Tarefa)
        .createQueryBuilder('tarefa')
    }
}