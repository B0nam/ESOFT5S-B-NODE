import { FastifyInstance } from "fastify";
import { TarefaController } from "../controllers/tarefaController";

const tarefaController = new TarefaController();

export default function tarefaRoute (app: FastifyInstance) {
    // CRIAR NOVA TAREFA
    app.post('/tarefa', (request, reply) => {
        tarefaController.criarTarefa(request, reply);
    })
    // OBTER TAREFA POR ID
    app.get('/tarefa/:id', (request, reply) => {
        tarefaController.obterTarefaId(request, reply);
    })
    // OBTER TAREFAS
    app.get('/tarefa', (request, reply) => {
        tarefaController.obterTarefa(request, reply);
    })
    // ATUALIZAR TAREFA EXISTENTE
    app.put('/tarefa/:id', (request, reply) => {
        tarefaController.atualizarTarefa(request, reply);
    })
    // EXCLUIR TAREFA
    app.delete('/tarefa/:id', (request, reply) => {
        tarefaController.removerTarefa(request, reply);
    })
    // LISTAR TODAS AS TAREFAS POR CATEGORIA
    app.get('/tarefa/categoria/:id', (request, reply) => {
        tarefaController.obterTarefasPorCategoriaId(request, reply);
    })
}