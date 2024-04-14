import { FastifyReply, FastifyRequest } from "fastify";
import { TarefaData } from "../enums/interfaces";
import { TarefaService } from "../services/tarefaService";

export class TarefaController {
    private tarefaService: TarefaService;

    constructor(){
        this.tarefaService = new TarefaService();
    }

    // CREATE
    async criarTarefa(request:FastifyRequest, reply:FastifyReply){
        try {
            const data = request.body as TarefaData;
            const novaTarefa = await this.tarefaService.criarTarefa(data);
            reply.send(novaTarefa);
        } catch (error: any) {
            console.error("Erro: ", error);
            reply.status(500).send("Erro interno no servidor");
        }
    }
    // READ
    async obterTarefa(request:FastifyRequest, reply:FastifyReply){
        try {
            const tarefas = await this.tarefaService.obterTarefas();
            reply.send(tarefas);
        } catch (error: any) {
            console.error("Erro: ", error);
            reply.status(500).send("Erro interno no servidor");
        }
    }
    // READ BY ID
    async obterTarefaId(request:FastifyRequest, reply:FastifyReply){
        try {
            const tarefaId = Number((request.params as { id: string }).id);
            const tarefa = await this.tarefaService.obterTarefaId(tarefaId);
            reply.send(tarefa);
        } catch (error: any) {
            console.error("Erro: ", error);
            reply.status(500).send("Erro interno no servidor");
        }
    }

    // UPDATE
    async atualizarTarefa(request:FastifyRequest, reply:FastifyReply){
        try {
            const tarefaId = Number((request.params as { id: string }).id);
            const data = request.body as TarefaData;
            const tarefa = await this.tarefaService.atualizarTarefa(tarefaId, data);
            reply.send(tarefa);

        } catch (error: any) {
            console.error("Erro: ", error);
            reply.status(500).send("Erro interno no servidor");
        }
    }
    // DELETE
    async removerTarefa(request:FastifyRequest, reply:FastifyReply){
        try {
            const tarefaId = Number((request.params as { id: string }).id);
            const tarefa = await this.tarefaService.removerTarefa(tarefaId);
            reply.send(tarefa);
            reply.send( { "message": "Tarefa removida."});
        } catch (error: any) {
            console.error("Erro: ", error);
            reply.status(500).send("Erro interno no servidor");
        }
    }
}