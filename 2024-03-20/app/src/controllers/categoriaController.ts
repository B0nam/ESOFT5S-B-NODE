import { FastifyReply, FastifyRequest } from "fastify";
import { CategoriaData } from "../enums/interfaces";
import categoriaService from "../services/categoriaService";

export class CategoriaController {
    // CREATE
    async criarCategoria(request:FastifyRequest, reply:FastifyReply){
        try {
            const data = request.body as CategoriaData;
            const novaCategoria = await categoriaService.criarCategoria(data);
            reply.send(novaCategoria);
        } catch (error: any) {
            console.error("Erro: ", error);
            reply.status(500).send("Erro interno no servidor");
        }
    }
    // READ
    async obterCategorias(request:FastifyRequest, reply:FastifyReply){
        try {
            const categorias = await categoriaService.obterCategorias();
            reply.send(categorias);
        } catch (error: any) {
            console.error("Erro: ", error);
            reply.status(500).send("Erro interno no servidor");
        }
    }
    // READ BY ID
    async obterCategoriaId(request:FastifyRequest, reply:FastifyReply){
        try {
            const categoriaId = Number((request.params as { id: string }).id);
            const categoria = await categoriaService.obterCategoriaId(categoriaId);
            reply.send(categoria);
        } catch (error: any) {
            console.error("Erro: ", error);
            reply.status(500).send("Erro interno no servidor");
        }
    }

    // UPDATE
    async atualizarCategoria(request:FastifyRequest, reply:FastifyReply){
        try {
            const categoriaId = Number((request.params as { id: string }).id);
            const data = request.body as CategoriaData;
            const categoria = await categoriaService.atualizarCategoria(categoriaId, data);
            reply.send(categoria);

        } catch (error: any) {
            console.error("Erro: ", error);
            reply.status(500).send("Erro interno no servidor");
        }
    }
    // DELETE
    async removerCategoria(request:FastifyRequest, reply:FastifyReply){
        try {
            const categoriaId = Number((request.params as { id: string }).id);
            const categoria = await categoriaService.removerCategoria(categoriaId);
            reply.send(categoria);
            reply.send( { "message": "Categoria removida."});
        } catch (error: any) {
            console.error("Erro: ", error);
            reply.status(500).send("Erro interno no servidor");
        }
    }
}