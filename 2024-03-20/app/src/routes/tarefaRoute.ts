import { FastifyInstance } from "fastify";
import { TarefaController } from "../controllers/tarefaController";

const tarefaController = new TarefaController();

export default function tarefaRoute(app: FastifyInstance) {
    // Obter todas as tarefas
    app.get('/tarefa', (request, reply) => {
        tarefaController.obterTodasTarefas(request, reply);
    });

    // Obter tarefa por ID
    app.get('/tarefa/:id', (request, reply) => {
        tarefaController.obterTarefaPorId(request, reply);
    });

    // Criar tarefa
    app.post('/tarefa', (request, reply) => {
        tarefaController.criarTarefa(request, reply);
    });

    // Remover tarefa
    app.delete('/tarefa/:id', (request, reply) => {
        tarefaController.removerTarefa(request, reply);
    });

    // Atualizar tarefa
    app.put('/tarefa/:id', (request, reply) => {
        tarefaController.atualizarTarefa(request, reply);
    });
}