import { FastifyInstance } from "fastify";
import { UsuarioController } from "../controllers/usuarioController";

const usuarioController = new UsuarioController(); 

export default function usuarioRoute (app: FastifyInstance) {
    // CRIAR NOVO USUARIO
    app.post('/usuario', (request, reply) => {
        usuarioController.criarUsuario(request, reply);
    })
    // OBTER USUARIO POR ID
    app.get('/usuario/:id', (request, reply) => {
        usuarioController.obterUsuarioId(request, reply);
    })
    // OBTER USUARIOS
    app.get('/usuario', (request, reply) => {
        usuarioController.obterUsuario(request, reply);
    })
    // ATUALIZAR USUARIO EXISTENTE
    app.put('/usuario/:id', (request, reply) => {
        usuarioController.atualizarUsuario(request, reply);
    })
    // EXCLUIR USUARIO
    app.delete('/usuario/:id', (request, reply) => {
        usuarioController.removerUsuario(request, reply);
    })

}