import { AppDataSource } from "../config/data-source";
import { Categoria } from "../entities/Categoria";
import { Queries } from "./queries";

export class CategoriaService {

    async listarCategoriasPorUsuario(usuarioId: number){
        Queries.obterCategoriaPorUsuario(usuarioId);
    }

    async obterCategoriaPorId(id: number){
        Queries.obterCategoriaPorId(id);
    };
}