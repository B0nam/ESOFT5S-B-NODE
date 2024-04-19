import { FastifyReply, FastifyRequest } from "fastify";
import { TarefaData, UsuarioData } from "../enums/interfaces";
import { TarefaService } from "../services/tarefaService";
import { UsuarioService } from "../services/usuarioService";
import { CategoriaService } from "../services/categoriaService";

export class TarefaController {
    private tarefaService: TarefaService;
    private usuarioService: UsuarioService;
    private categoriaService: CategoriaService;

    constructor(){
        this.tarefaService = new TarefaService();
        this.usuarioService = new UsuarioService();
        this.categoriaService = new CategoriaService();
    }

    // CREATE
    async criarTarefa(request:FastifyRequest, reply:FastifyReply){
        try {
            const data = request.body as TarefaData;
            const novaTarefa = await this.tarefaService.criarTarefa(data);
            const usuario = await this.usuarioService
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
    // OBTER TAREFAS DE UM USUARIO
    async obterTarefasPorIdUsuario(request:FastifyRequest, reply:FastifyReply){
        try {
            const data = request.body as TarefaData;
            const usuario = await this.usuarioService.obterUsuarioId(data.usuario);

            if (!usuario) {
                reply.status(404).send("Usuário não encontrado");
                return;
            }

            const tarefas = await this.tarefaService.obterTarefasPorIdUsuario(usuario);
            return tarefas
        } catch (error: any) {
            console.error("Erro: ", error);
            reply.status(500).send("Erro interno no servidor");
        }
    }

    // OBTER TAREFAS POR CATEGORIA
    async obterTarefasPorCategoriaId(request:FastifyRequest, reply:FastifyReply){
        try {
            const categoriaId = Number((request.params as { id: string }).id);
            const categoria = await this.categoriaService.obterCategoriaId(categoriaId);

            if (!categoria) {
                reply.status(404).send("Categoria não encontrada");
                return;
            }

            const tarefas = await this.tarefaService.obterTarefasPorCategoria(categoria);
            reply.send(tarefas);
        } catch (error: any) {
            console.error("Erro: ", error);
            reply.status(500).send("Erro interno no servidor");
        }
    }

    // OBTER TAREFAS CONCLUIDAS
    async obterTarefasConcluidas(request:FastifyRequest, reply:FastifyReply){
        try {
            const tarefas = await this.tarefaService.obterTarefasConcluidas( );
            reply.send(tarefas);
        } catch (error: any) {
            console.error("Erro: ", error);
            reply.status(500).send("Erro interno no servidor");
        }
    }

    // OBTER TAREFAS PENDENTES
    async obterTarefasPendentes(request:FastifyRequest, reply:FastifyReply){
        try {
            const tarefas = await this.tarefaService.obterTarefasPendentes();
            reply.send(tarefas);
        } catch (error: any) {
            console.error("Erro: ", error);
            reply.status(500).send("Erro interno no servidor");
        }
    }

    // ENCONTRAR TAREFA MAIS ANTIGA
async encontrarTarefaMaisAntiga(request: FastifyRequest, reply: FastifyReply) {
    try {
        const usuarioId = Number((request.params as { id: string }).id);
        const usuario = await this.usuarioService.obterUsuarioId(usuarioId);

        if (!usuario) {
            reply.status(404).send("Usuário não encontrado");
            return;
        }

        const tarefaMaisAntiga = await this.tarefaService.encontrarTarefaMaisAntiga(usuario);
        reply.send(tarefaMaisAntiga);
    } catch (error: any) {
        console.error("Erro: ", error);
        reply.status(500).send("Erro interno no servidor");
    }
}

// ENCONTRAR TAREFA COM DESCRIÇÃO MAIS LONGA
async encontrarTarefaDescricaoMaisLonga(request: FastifyRequest, reply: FastifyReply) {
    try {
        const usuarioId = Number((request.params as { id: string }).id);
        const usuario = await this.usuarioService.obterUsuarioId(usuarioId);

        if (!usuario) {
            reply.status(404).send("Usuário não encontrado");
            return;
        }

        const tarefaDescricaoMaisLonga = await this.tarefaService.encontrarTarefaDescricaoMaisLonga(usuario);
        reply.send(tarefaDescricaoMaisLonga);
    } catch (error: any) {
        console.error("Erro: ", error);
        reply.status(500).send("Erro interno no servidor");
    }
}

// CALCULAR MÉDIA DE CONCLUSÃO DE TAREFAS
async calcularMediaConclusao(request: FastifyRequest, reply: FastifyReply) {
    try {
        const usuarioId = Number((request.params as { id: string }).id);
        const usuario = await this.usuarioService.obterUsuarioId(usuarioId);

        if (!usuario) {
            reply.status(404).send("Usuário não encontrado");
            return;
        }

        const mediaConclusao = await this.tarefaService.calcularMediaConclusao(usuario);
        reply.send({ mediaConclusao });
    } catch (error: any) {
        console.error("Erro: ", error);
        reply.status(500).send("Erro interno no servidor");
    }
}

// ENCONTRAR TAREFA MAIS RECENTE
async encontrarTarefaMaisRecente(request: FastifyRequest, reply: FastifyReply) {
    try {
        const usuarioId = Number((request.params as { id: string }).id);
        const usuario = await this.usuarioService.obterUsuarioId(usuarioId);

        if (!usuario) {
            reply.status(404).send("Usuário não encontrado");
            return;
        }

        const tarefaMaisRecente = await this.tarefaService.encontrarTarefaMaisRecente(usuario);
        reply.send(tarefaMaisRecente);
    } catch (error: any) {
        console.error("Erro: ", error);
        reply.status(500).send("Erro interno no servidor");
    }
}

// CONTAR TOTAL DE TAREFAS DE UM USUÁRIO
async contarTotalTarefasUsuario(request: FastifyRequest, reply: FastifyReply) {
    try {
        const usuarioId = Number((request.params as { id: string }).id);
        const usuario = await this.usuarioService.obterUsuarioId(usuarioId);

        if (!usuario) {
            reply.status(404).send("Usuário não encontrado");
            return;
        }

        const totalTarefas = await this.tarefaService.contarTotalTarefasUsuario(usuario);
        reply.send({ totalTarefas });
    } catch (error: any) {
        console.error("Erro: ", error);
        reply.status(500).send("Erro interno no servidor");
    }
}

    // OBTER TAREFAS VENCENDO NO PERÍODO
    async obterTarefasVencendoNoPeriodo(request: FastifyRequest, reply: FastifyReply) {
        try {
            const { dataInicial, dataFinal } = request.body as { dataInicial: Date, dataFinal: Date };

            if (!dataInicial || !dataFinal) {
                reply.status(400).send("Os campos 'dataInicial' e 'dataFinal' são obrigatórios.");
                return;
            }

            const tarefasVencendo = await this.tarefaService.obterTarefasVencendoNoPeriodo(dataInicial, dataFinal);
            reply.send(tarefasVencendo);
        } catch (error: any) {
            console.error("Erro: ", error);
            reply.status(500).send("Erro interno no servidor");
        }
    }

}