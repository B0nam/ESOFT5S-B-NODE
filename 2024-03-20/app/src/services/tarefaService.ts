import { AppDataSource } from "../config/data-source";
import { Tarefa } from "../entities/Tarefa";
import { Usuario } from "../entities/Usuario";
import { Cor } from "../enums/cores";
import { TarefaData } from "../enums/interfaces";
import { Status } from "../enums/status";
import { Tipo } from "../enums/tipos";
import { CategoriaService } from "./categoriaService";
import { Queries } from "./queries";
import { UsuarioService } from "./usuarioService";

export class TarefaService {

    tarefaRepository = AppDataSource.getRepository(Tarefa)
    categoriaService = new CategoriaService()
    usuarioService = new UsuarioService()

    async criarTarefa(data: TarefaData){
        const usuario = await this.usuarioService.obterUsuarioId(data.usuario);
        if (!usuario) {
            throw new Error('[-] Usuário não encontrado');
        }
    
        const categoriasIds = Array.isArray(data.categoria) ? data.categoria : [data.categoria];
        const categorias = await Promise.all(categoriasIds.map(async (categoriaId) => {
            const categoria = await this.categoriaService.obterCategoriaId(categoriaId);
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
}