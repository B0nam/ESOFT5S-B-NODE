import { FastifyInstance } from "fastify";
import { TarefaController } from "../controllers/tarefaController";

const tarefaController = new TarefaController();

export default function tarefaRoute(app: FastifyInstance) {
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

    // OBTER TAREFAS CONCLUIDAS
    app.get('/tarefa/concluidas', (request, reply) => {
        tarefaController.obterTarefasConcluidas(request, reply);
    })

    // OBTER TAREFAS PENDENTES
    app.get('/tarefa/pendentes', (request, reply) => {
        tarefaController.obterTarefasPendentes(request, reply);
    })

    // ATUALIZAR TAREFA EXISTENTE
    app.put('/tarefa/:id', (request, reply) => {
        tarefaController.atualizarTarefa(request, reply);
    })

    // EXCLUIR TAREFA
    app.delete('/tarefa/:id', (request, reply) => {
        tarefaController.removerTarefa(request, reply);
    })

    // OBTER TAREFAS DE UM USUÁRIO PELO ID
    app.post('/tarefa/usuario', (request, reply) => {
        tarefaController.obterTarefasPorIdUsuario(request, reply);
    })

    // OBTER TAREFAS POR CATEGORIA
    app.get('/tarefa/categoria/:id', (request, reply) => {
        tarefaController.obterTarefasPorCategoriaId(request, reply);
    })

    // ENCONTRAR TAREFA MAIS ANTIGA DE UM USUÁRIO
    app.get('/tarefa/maisantiga/:id', (request, reply) => {
        tarefaController.encontrarTarefaMaisAntiga(request, reply);
    })

    // ENCONTRAR TAREFA COM DESCRIÇÃO MAIS LONGA DE UM USUÁRIO
    app.get('/tarefa/descricaomaislonga/:id', (request, reply) => {
        tarefaController.encontrarTarefaDescricaoMaisLonga(request, reply);
    })

    // CALCULAR MÉDIA DE CONCLUSÃO DE TAREFAS DE UM USUÁRIO
    app.get('/tarefa/mediaconclusao/:id', (request, reply) => {
        tarefaController.calcularMediaConclusao(request, reply);
    })

    // ENCONTRAR TAREFA MAIS RECENTE DE UM USUÁRIO
    app.get('/tarefa/maisrecente/:id', (request, reply) => {
        tarefaController.encontrarTarefaMaisRecente(request, reply);
    })

    // CONTAR TOTAL DE TAREFAS DE UM USUÁRIO
    app.get('/tarefa/total/:id', (request, reply) => {
        tarefaController.contarTotalTarefasUsuario(request, reply);
    })

    // OBTER TAREFAS VENCENDO NO PERÍODO
    app.post('/tarefa/vencendo', (request, reply) => {
        tarefaController.obterTarefasVencendoNoPeriodo(request, reply);
    })
}
