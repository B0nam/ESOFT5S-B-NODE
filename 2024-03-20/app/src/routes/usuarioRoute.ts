import { FastifyInstance } from "fastify";
import { UsuarioController } from "../controllers/usuarioController";

const usuarioController = new UsuarioController();

export default function usuarioRoute(app: FastifyInstance) {
    // Obter todos os usuários
    app.get('/usuario', (request, reply) => {
        usuarioController.obterTodosUsuarios(request, reply);
    });

    // Obter usuário por ID
    app.get('/usuario/:id', (request, reply) => {
        usuarioController.obterUsuarioPorId(request, reply);
    });

    // Criar usuário
    app.post('/usuario', (request, reply) => {
        usuarioController.criarUsuario(request, reply);
    });

    // Remover usuário
    app.delete('/usuario/:id', (request, reply) => {
        usuarioController.removerUsuario(request, reply);
    });

    // Atualizar usuário
    app.put('/usuario/:id', (request, reply) => {
        usuarioController.atualizarUsuario(request, reply);
    });
}