import { Categoria } from "../../src/entities/Categoria";
import { Tarefa } from "../../src/entities/Tarefa";
import { Usuario } from "../../src/entities/Usuario";
import { Status } from "../../src/enums/status";
import { dataAtual, dataConclusao } from "../index.test";

export default abstract class TarefaTeste {
    static deveCriarUmaTarefa(categoria: Categoria, usuario: Usuario) {
        const novaTarefa = new Tarefa(1, 'Tarefa Teste', 'Tarefa Teste', dataAtual, dataConclusao, Status.ANDAMENTO, categoria, usuario);
        test('Criação de uma Tarefa teste', () => {
            expect(novaTarefa.id).toBe(1);
            expect(novaTarefa.titulo).toBe('Tarefa Teste');
            expect(novaTarefa.descricao).toBe('Tarefa Teste');
            expect(novaTarefa.dt_criacao).toBe(dataAtual);
            expect(novaTarefa.dt_conclusao).toBe(dataConclusao);
            expect(novaTarefa.status).toBe(Status.ANDAMENTO);
            expect(novaTarefa.categoria).toBe(categoria);
            expect(novaTarefa.usuario).toBe(usuario);
        })
    }
}