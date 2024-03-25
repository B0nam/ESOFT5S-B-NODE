import prisma from "../../prisma/prisma";
import { TarefaData } from "../enums/interfaces";

export class TarefaService {
    async obterTarefaById(id: number) {
        return await prisma.tarefa.findUnique({
            where: { id }
        });
    }

    async obterTarefa() {
        return await prisma.tarefa.findMany();
    }

    async criarTarefa(tarefaData: TarefaData) {
        const user = await prisma.tarefa.create({
            data: tarefaData
        })
    }

    async removerTarefa(id: number) {
        const tarefaExiste = await prisma.tarefa.findUnique({where: {id: id}});
        await prisma.tarefa.delete({where: {id: id}});
    }

    async atualizarTarefa(id: number, tarefaData: TarefaData) {
        const tarefaAtualizada = await prisma.tarefa.update({where: {id: id}, data: tarefaData});
        return tarefaAtualizada;
    }
}
