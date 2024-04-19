import { Between } from "typeorm";
import { AppDataSource } from "../config/data-source";
import { Categoria } from "../entities/Categoria";
import { Tarefa } from "../entities/Tarefa";
import { Usuario } from "../entities/Usuario";
import { Cor } from "../enums/cores";
import { TarefaData } from "../enums/interfaces";
import { Status } from "../enums/status";
import { Tipo } from "../enums/tipos";
import usuarioService from "./usuarioService";
import categoriaService from "./categoriaService";

class TarefaService {

    tarefaRepository = AppDataSource.getRepository(Tarefa)

    async criarTarefa(data: TarefaData){
        const usuario = await usuarioService.obterUsuarioId(data.usuario);
        if (!usuario) {
            throw new Error('[-] Usuário não encontrado');
        }
    
        const categoriasIds = Array.isArray(data.categoria) ? data.categoria : [data.categoria];
        const categorias = await Promise.all(categoriasIds.map(async (categoriaId) => {
            const categoria = await categoriaService.obterCategoriaId(categoriaId);
            if (!categoria) {
                throw new Error(`[-] Categoria com ID ${categoriaId} não encontrada`);
            }
            return categoria;
        }));
    
        const tarefa = new Tarefa(data.titulo, data.descricao, data.dt_criacao, data.dt_conclusao, Status[data.status as keyof typeof Status], Tipo[data.tipo as keyof typeof Tipo],categorias, usuario);
        await AppDataSource.manager.save(tarefa);
        console.log("[+] Uma nova tarefa foi criada.");
        return tarefa;
    }
    
    async obterTarefas(){
        const tarefas = await this.tarefaRepository.find()
        return tarefas;
    }
    
    async obterTarefaId(tarefaId: number){
        const tarefa = await this.tarefaRepository.findOneBy({id: tarefaId});
        return tarefa;
    }

    async obterTarefasPorIdUsuario(usuario: Usuario){
        const tarefas = await this.tarefaRepository.find({ where: { usuario: usuario }})
        return tarefas
    }

    async obterTarefasPorCategoria(categoria: Categoria){
        const tarefas = await this.tarefaRepository.find({ where: { categoria: categoria }})
        return tarefas
    }

    async obterTarefasConcluidas(){
        const tarefas = await this.tarefaRepository.find({ where: { status: Status.CONCLUIDO}});
        return tarefas
    }

    async obterTarefasPendentes(){
        const tarefas = await this.tarefaRepository.find({ where: { status: Status.PENDENTE}});
        return tarefas
    }

    async atualizarTarefa(tarefaId: number, data: TarefaData){
        const tarefa = await this.tarefaRepository.findOneBy({id: tarefaId});
        if (!tarefa) {
            throw new Error(`Tarefa com o ID ${tarefaId} não encontrada.`);
        }
        tarefa.titulo = data.titulo;
        tarefa.descricao = data.descricao;
        tarefa.dt_criacao = data.dt_criacao;
        tarefa.dt_conclusao = data.dt_conclusao;
        tarefa.status = Status[data.status as keyof typeof Status];
        tarefa.tipo = Tipo[data.tipo as keyof typeof Tipo];

        const tarefaAtualizada = await this.tarefaRepository.save(tarefa);
        
        return tarefaAtualizada;
    }
    

    async removerTarefa(tarefaId: number){
        const tarefa = await this.tarefaRepository.findOneBy({id: tarefaId});
        await this.tarefaRepository.delete(tarefaId);
        return tarefa
    }

    async obterTarefasVencendoNoPeriodo(dataInicial: Date, dataFinal: Date){
        const tarefas = await this.tarefaRepository.find();
        const tarefasVencendo = tarefas.filter(tarefa => {
            const dataConclusao = new Date(tarefa.dt_conclusao);
            return dataConclusao >= dataInicial && dataConclusao <= dataFinal && tarefa.status === Status.PENDENTE;
        });
        return tarefasVencendo;
    }

    async contarTotalTarefasUsuario(usuario: Usuario){
        const tarefas = await this.tarefaRepository.find({
            where: { usuario }
        });
        return tarefas.length;
    }

    async encontrarTarefaMaisRecente(usuario: Usuario){
        const tarefasUsuario = await this.tarefaRepository.find({ where: { usuario } });

        if (tarefasUsuario.length === 0) {
            return undefined;
        }

        const tarefaMaisRecente = tarefasUsuario.reduce((maisRecente, tarefa) => {
            return tarefa.dt_criacao > maisRecente.dt_criacao ? tarefa : maisRecente;
        });

        return tarefaMaisRecente;
    }

    async calcularMediaConclusao(usuario: Usuario){
        const tarefasUsuario = await this.tarefaRepository.find({ where: { usuario } });

        if (tarefasUsuario.length === 0) {
            return 0;
        }

        const totalTarefas = tarefasUsuario.length;
        const totalConcluidas = tarefasUsuario.filter(tarefa => tarefa.status === Status.CONCLUIDO).length;

        return totalConcluidas / totalTarefas;
    }

    async encontrarTarefaDescricaoMaisLonga(usuario: Usuario){
        const tarefasUsuario = await this.tarefaRepository.find({ where: { usuario } });

        if (tarefasUsuario.length === 0) {
            return undefined;
        }

        let tarefaDescricaoMaisLonga = tarefasUsuario[0];
        tarefasUsuario.forEach(tarefa => {
            if (tarefa.descricao.length > tarefaDescricaoMaisLonga.descricao.length) {
                tarefaDescricaoMaisLonga = tarefa;
            }
        });

        return tarefaDescricaoMaisLonga;
    }

    async encontrarTarefaMaisAntiga(usuario: Usuario){
        const tarefasUsuario = await this.tarefaRepository.find({ where: { usuario }, order: { dt_criacao: "ASC" } });

        if (tarefasUsuario.length === 0) {
            return undefined;
        }

        return tarefasUsuario[0];
    }

}

export default new TarefaService()