import { FastifyReply, FastifyRequest } from "fastify";
import { UsuarioService } from "../services/usuarioService";
import { UserData } from "../enums/interfaces";

export class UsuarioController {
    private usuarioService: UsuarioService;

    constructor(){
        this.usuarioService = new UsuarioService();
    }

    async obterTodosUsuarios(request: FastifyRequest, reply: FastifyReply) {
        try {
            const usuarios = await this.usuarioService.obterUsuario();
            reply.send(usuarios);
        } catch (error: any) {
            console.error("Erro:", error);
            reply.status(500).send("Erro interno do servidor");
        }
    }

    async obterUsuarioPorId(request: FastifyRequest, reply: FastifyReply) {
        try {
            const usuarioId = Number(request.id);
            const usuario = await this.usuarioService.obterUsuarioById(usuarioId);
            reply.send(usuario);   
        } catch (error: any) {
            console.error("Erro:", error);
            reply.status(500).send("Erro interno do servidor");
        }
    }

    async criarUsuario(request: FastifyRequest, reply: FastifyReply) {
        try {
            const data = request.body as UserData;
            const novoUsuario = await this.usuarioService.criarUsuario( data );
            reply.send(novoUsuario);
        } catch (error: any) {
            console.error("Erro:", error);
            reply.status(500).send("Erro interno do servidor");
        }

    }

    async removerUsuario(request: FastifyRequest, reply: FastifyReply) {
        try {
            const usuarioId = Number(request.id);
            const usuario = await this.usuarioService.removerUsuario(usuarioId);
        } catch (error: any) {
            console.error("Erro:", error);
            reply.status(500).send("Erro interno do servidor");
        }
    }

    async atualizarUsuario(request: FastifyRequest, reply: FastifyReply) {
        try {
            const usuarioId = Number(request.id);
            const data = request.body as UserData;
            const usuario = await this.usuarioService.atualizarUsuario(usuarioId, data);
        } catch (error: any) {
            console.error("Erro:", error);
            reply.status(500).send("Erro interno do servidor");
        }
    }

}