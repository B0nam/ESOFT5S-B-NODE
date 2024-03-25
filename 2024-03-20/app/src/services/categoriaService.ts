import prisma from "../../prisma/prisma";
import { CategoriaData } from "../enums/interfaces";

export class CategoriaService {
    async obterCategoriaById(id: number) {
        return await prisma.categoria.findUnique({
            where: { id }
        });
    }

    async obterCategoria() {
        return await prisma.categoria.findMany();
    }

    async criarCategoria(categoriaData: CategoriaData) {
        const user = await prisma.categoria.create({
            data: categoriaData
        })
    }

    async removerCategoria(id: number) {
        const categoriaExiste = await prisma.categoria.findUnique({where: {id: id}});
        await prisma.categoria.delete({where: {id: id}});
    }

    async atualizarCategoria(id: number, categoriaData: CategoriaData) {
        const categoriaAtualizado = await prisma.categoria.update({where: {id: id}, data: categoriaData});
        return categoriaAtualizado;
    }
}
