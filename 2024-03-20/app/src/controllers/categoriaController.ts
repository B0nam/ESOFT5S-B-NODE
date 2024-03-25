import { FastifyReply, FastifyRequest } from "fastify";
import { CategoriaService } from "../services/categoriaService";
import { CategoriaData } from "../enums/interfaces";

export class CategoriaController {
    private categoriaService: CategoriaService;

    constructor(){
        this.categoriaService = new CategoriaService();
    }

    async obterTodasCategorias(request: FastifyRequest, reply: FastifyReply) {
        try {
            const categoria = await this.categoriaService.obterCategoria();
            reply.send(categoria);
        } catch (error: any) {
            console.error("Erro:", error);
            reply.status(500).send("Erro interno do servidor");
        }
    }

    async obterCategoriaPorId(request: FastifyRequest, reply: FastifyReply) {
        try {
            const categoriaId = Number(request.id);
            const categoria = await this.categoriaService.obterCategoriaById(categoriaId);
            reply.send(categoria);   
        } catch (error: any) {
            console.error("Erro:", error);
            reply.status(500).send("Erro interno do servidor");
        }
    }

    async criarCategoria(request: FastifyRequest, reply: FastifyReply) {
        try {
            const data = request.body as CategoriaData;
            const novaCategoria = await this.categoriaService.criarCategoria( data );
            reply.send(novaCategoria);
        } catch (error: any) {
            console.error("Erro:", error);
            reply.status(500).send("Erro interno do servidor");
        }

    }

    async removerCategoria(request: FastifyRequest, reply: FastifyReply) {
        try {
            const categoriaId = Number(request.id);
            const categoria = await this.categoriaService.removerCategoria(categoriaId);
        } catch (error: any) {
            console.error("Erro:", error);
            reply.status(500).send("Erro interno do servidor");
        }
    }

    async atualizarCategoria(request: FastifyRequest, reply: FastifyReply) {
        try {
            const categoriaId = Number(request.id);
            const data = request.body as CategoriaData;
            const categoria = await this.categoriaService.atualizarCategoria(categoriaId, data);
        } catch (error: any) {
            console.error("Erro:", error);
            reply.status(500).send("Erro interno do servidor");
        }
    }

}