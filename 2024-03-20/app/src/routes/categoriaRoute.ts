import { FastifyInstance } from "fastify";
import { CategoriaController } from "../controllers/categoriaController";

const categoriaController = new CategoriaController();

export default function categoriaRoute(app: FastifyInstance) {
    // Obter todas as categorias
    app.get('/categoria', (request, reply) => {
        categoriaController.obterTodasCategorias(request, reply);
    });

    // Obter categoria por ID
    app.get('/categoria/:id', (request, reply) => {
        categoriaController.obterCategoriaPorId(request, reply);
    });

    // Criar categoria
    app.post('/categoria', (request, reply) => {
        categoriaController.criarCategoria(request, reply);
    });

    // Remover categoria
    app.delete('/categoria/:id', (request, reply) => {
        categoriaController.removerCategoria(request, reply);
    });

    // Atualizar categoria
    app.put('/categoria/:id', (request, reply) => {
        categoriaController.atualizarCategoria(request, reply);
    });
}