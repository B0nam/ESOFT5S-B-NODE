import { FastifyInstance } from "fastify";
import { CategoriaController } from "../controllers/categoriaController";

const categoriaController = new CategoriaController();

export default function categoriaRoute (app: FastifyInstance) {
    // CRIAR NOVA CATEGORIA

    // ATUALIZAR CATEGORIA EXISTENTE

    // EXCLUIR CATEGORIA

    //LISTAR TODAS AS CATEGORIAS DE UM USUARIO
    app.get('/categoria/:userId', (request, reply) => {
        categoriaController.listarCategoriasPorUsuario(request, reply);
    });

    // OBTER DETALHES DE UMA CATEGORIA ESPECIFICA
    app.get('/categoria/:id', (request, reply) => {
        categoriaController.obterCategoriaPorId(request, reply);
    });
}