import { FastifyReply, FastifyRequest } from "fastify";
import { TarefaService } from "../services/tarefaService";
import { TarefaData } from "../enums/interfaces";

export class TarefaController {
    private tarefaService: TarefaService;

    constructor(){
        this.tarefaService = new TarefaService();
    }

    async obterTodasTarefas(request: FastifyRequest, reply: FastifyReply) {
        try {
            const tarefa = await this.tarefaService.obterTarefa();
            reply.send(tarefa);
        } catch (error: any) {
            console.error("Erro:", error);
            reply.status(500).send("Erro interno do servidor");
        }
    }

    async obterTarefaPorId(request: FastifyRequest, reply: FastifyReply) {
        try {
            const tarefaId = Number(request.id);
            const tarefa = await this.tarefaService.obterTarefaById(tarefaId);
            reply.send(tarefa);   
        } catch (error: any) {
            console.error("Erro:", error);
            reply.status(500).send("Erro interno do servidor");
        }
    }

    async criarTarefa(request: FastifyRequest, reply: FastifyReply) {
        try {
            const data = request.body as TarefaData;
            const novaTarefa = await this.tarefaService.criarTarefa( data );
            reply.send(novaTarefa);
        } catch (error: any) {
            console.error("Erro:", error);
            reply.status(500).send("Erro interno do servidor");
        }

    }

    async removerTarefa(request: FastifyRequest, reply: FastifyReply) {
        try {
            const tarefaId = Number(request.id);
            const tarefa = await this.tarefaService.removerTarefa(tarefaId);
        } catch (error: any) {
            console.error("Erro:", error);
            reply.status(500).send("Erro interno do servidor");
        }
    }

    async atualizarTarefa(request: FastifyRequest, reply: FastifyReply) {
        try {
            const tarefaId = Number(request.id);
            const data = request.body as TarefaData;
            const tarefa = await this.tarefaService.atualizarTarefa(tarefaId, data);
        } catch (error: any) {
            console.error("Erro:", error);
            reply.status(500).send("Erro interno do servidor");
        }
    }

}