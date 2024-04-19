import { FastifyReply, FastifyRequest } from "fastify";
import { LoginData, UsuarioData } from "../enums/interfaces";
import { SERVER_KEY } from "../../app";
import usuarioService from "../services/usuarioService";
import categoriaService from "../services/categoriaService";
import tarefaService from "../services/tarefaService";

export class UsuarioController {
    // CREATE
    async criarUsuario(request:FastifyRequest, reply:FastifyReply){
        try {
            const data = request.body as UsuarioData;
            const novoUsuario = await usuarioService.criarUsuario(data);
            reply.send(novoUsuario);
        } catch (error: any) {
            console.error("Erro: ", error);
            reply.status(500).send("Erro interno no servidor");
        }
    }
    // READ
    async obterUsuario(request:FastifyRequest, reply:FastifyReply){
        try {
            const usuarios = await usuarioService.obterUsuarios();
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
            const usuario = await usuarioService.obterUsuarioId(usuarioId);
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
            const usuario = await usuarioService.atualizarUsuario(usuarioId, data);
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
            const usuario = await usuarioService.removerUsuario(usuarioId);
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
            const usuario = await usuarioService.logarUsuario(data);
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
            const usuario = await usuarioService.obterUsuarioId(usuarioId);

            if (!usuario) {
                reply.status(404).send("Usuário não encontrado");
                return;
            }

            const categorias = await categoriaService.obterCategoriasPorIdUsuario(usuario);
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
            const usuario = await usuarioService.obterUsuarioId(usuarioId);

            if (!usuario) {
                reply.status(404).send("Usuário não encontrado");
                return;
            }

            const tarefas = await tarefaService.obterTarefasPorIdUsuario(usuario);
            reply.send(tarefas);
        } catch (error: any) {
            console.error("Erro: ", error);
            reply.status(500).send("Erro interno no servidor");
        }
    }
}