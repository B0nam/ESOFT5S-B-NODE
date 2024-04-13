import { FastifyReply, FastifyRequest } from "fastify";
import { CategoriaService } from "../services/categoriaService";

export class CategoriaController {
    private categoriaService: CategoriaService;

    constructor(){
        this.categoriaService = new CategoriaService();
    }

    async listarCategoriasPorUsuario(request:FastifyRequest, reply:FastifyReply){
        try {
            const usuarioId = Number(request.id);
            const categorias = await this.categoriaService.listarCategoriasPorUsuario(usuarioId)
        } catch (error: any) {
            console.error("Erro: ", error);
            reply.status(500).send("Erro interno no servidor");
        }
    }

    async obterCategoriaPorId(request:FastifyRequest, reply:FastifyReply) {
        try{
            const categoriaId = Number(request.id);
            const categorias = await this.categoriaService.obterCategoriaPorId(categoriaId);
            reply.send(categorias);
        } catch (error: any) {
            console.error("Erro: ", error);
            reply.status(500).send("Erro interno no servidor");
        }
    }
}