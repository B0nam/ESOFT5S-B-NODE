import { FastifyReply, FastifyRequest } from "fastify";
import { UsuarioService } from "../services/usuarioService";
import { LoginData, UsuarioData } from "../enums/interfaces";
import { SERVER_KEY } from "../../app";
import { TarefaService } from "../services/tarefaService";
import { CategoriaService } from "../services/categoriaService";
import { Usuario } from "../entities/Usuario";

export class UsuarioController {
    private usuarioService: UsuarioService;
    private tarefaService: TarefaService;
    private categoriaService: CategoriaService;

    constructor(){
        this.usuarioService = new UsuarioService();
        this.tarefaService = new TarefaService();
        this.categoriaService = new CategoriaService();
    }

    // CREATE
    async criarUsuario(request:FastifyRequest, reply:FastifyReply){
        try {
            const data = request.body as UsuarioData;
            const novoUsuario = await this.usuarioService.criarUsuario(data);
            reply.send(novoUsuario);
        } catch (error: any) {
            console.error("Erro: ", error);
            reply.status(500).send("Erro interno no servidor");
        }
    }
    // READ
    async obterUsuario(request:FastifyRequest, reply:FastifyReply){
        try {
            const usuarios = await this.usuarioService.obterUsuarios();
            reply.send(usuarios);
        } catch (error: any) {
            console.error("Erro: ", error);
            reply.status(500).send("Erro interno no servidor");
        }
    }
    // READ BY ID
    async obterUsuarioId(request:FastifyRequest, reply:FastifyReply){
        try {
            const usuarioId = Number((request.params as { id: string }).id);
            const usuario = await this.usuarioService.obterUsuarioId(usuarioId);
            reply.send(usuario);
        } catch (error: any) {
            console.error("Erro: ", error);
            reply.status(500).send("Erro interno no servidor");
        }
    }

    // UPDATE
    async atualizarUsuario(request:FastifyRequest, reply:FastifyReply){
        try {
            const usuarioId = Number((request.params as { id: string }).id);
            const data = request.body as UsuarioData;
            const usuario = await this.usuarioService.atualizarUsuario(usuarioId, data);
            reply.send(usuario);

        } catch (error: any) {
            console.error("Erro: ", error);
            reply.status(500).send("Erro interno no servidor");
        }
    }
    // DELETE
    async removerUsuario(request:FastifyRequest, reply:FastifyReply){
        try {
            const usuarioId = Number((request.params as { id: string }).id);
            const usuario = await this.usuarioService.removerUsuario(usuarioId);
            reply.send(usuario);
            reply.send( { "message": "Usuario removido."});
        } catch (error: any) {
            console.error("Erro: ", error);
            reply.status(500).send("Erro interno no servidor");
        }
    }

    // LOGAR USUARIO
    async logarUsuario(request:FastifyRequest, reply:FastifyReply){
        try {
            const data = request.body as LoginData;
            const usuario = await this.usuarioService.logarUsuario(data);
            if(!usuario){
                reply.status(403).send("Acesso não autorizado.");
                return;
            }
            reply.send({usuario, SERVER_KEY});
        } catch (error: any) {
            console.error("Erro: ", error);
            reply.status(500).send("Erro interno no servidor");
        }
    }

    // OBTER CATEGORIAS
    async obterCategorias(request:FastifyRequest, reply:FastifyReply){
        try {
            const usuarioId = Number((request.params as { id: string }).id);
            const usuario = await this.usuarioService.obterUsuarioId(usuarioId);

            if (!usuario) {
                reply.status(404).send("Usuário não encontrado");
                return;
            }

            const categorias = await this.categoriaService.obterCategoriasPorIdUsuario(usuario);
            reply.send(categorias);
        } catch (error: any) {
            console.error("Erro: ", error);
            reply.status(500).send("Erro interno no servidor");
        }
    }

    // OBTER TAREFAS DE UM USUARIO
    async obterTarefasPorUsuario(request:FastifyRequest, reply:FastifyReply){
        try {
            const usuarioId = Number((request.params as { id: string }).id);
            const usuario = await this.usuarioService.obterUsuarioId(usuarioId);

            if (!usuario) {
                reply.status(404).send("Usuário não encontrado");
                return;
            }

            const tarefas = await this.tarefaService.obterTarefasPorIdUsuario(usuario);
            reply.send(tarefas);
        } catch (error: any) {
            console.error("Erro: ", error);
            reply.status(500).send("Erro interno no servidor");
        }
    }
}