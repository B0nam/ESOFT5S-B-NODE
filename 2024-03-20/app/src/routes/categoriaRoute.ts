import { FastifyInstance } from "fastify";
import { CategoriaController } from "../controllers/categoriaController";

const categoriaController = new CategoriaController();

export default function categoriaRoute (app: FastifyInstance) {
    // CRIAR NOVA CATEGORIA
    app.post('/categoria', (request, reply) => {
        categoriaController.criarCategoria(request, reply);
    })

    // OBTER CATEGORIA POR ID
    app.get('/categoria/:id', (request, reply) => {
        categoriaController.obterCategoriaId(request, reply);
    })

    // OBTER CATEGORIAS
    app.get('/categoria', (request, reply) => {
        categoriaController.obterCategorias(request, reply);
    })

    // ATUALIZAR CATEGORIA EXISTENTE
    app.put('/categoria/:id', (request, reply) => {
        categoriaController.atualizarCategoria(request, reply);
    })

    // EXCLUIR CATEGORIA
    app.delete('/categoria/:id', (request, reply) => {
        categoriaController.removerCategoria(request, reply);
    })
}