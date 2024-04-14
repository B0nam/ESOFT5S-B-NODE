import { AppDataSource } from "../config/data-source";
import { Categoria } from "../entities/Categoria";
import { Cor } from "../enums/cores";
import { CategoriaData } from "../enums/interfaces";
import { Queries } from "./queries";

export class CategoriaService {

    categoriaRepository = AppDataSource.getRepository(Categoria)

    async criarCategoria(data: CategoriaData){
        const categoria = new Categoria(data.nome, Cor[data.cor as keyof typeof Cor]);
        await AppDataSource.manager.save(categoria);
        console.log("[+] Uma nova categoria foi criada.");
        return categoria;
    }
    
    async obterCategorias(){
        const categorias = await this.categoriaRepository.find()
        return categorias;
    }
    
    async obterCategoriaId(categoriaId: number){
        const categoria = await this.categoriaRepository.findOneBy({id: categoriaId});
        return categoria;
    }

    async atualizarCategoria(categoriaId: number, data: CategoriaData){
        const categoria = await this.categoriaRepository.save({id: categoriaId, nome: data.nome, cor: Cor[data.cor as keyof typeof Cor]});
        return categoria;
    }

    async removerCategoria(categoriaId: number){
        const categoria = await this.categoriaRepository.findOneBy({id: categoriaId});
        await this.categoriaRepository.delete(categoriaId);
        return categoria
    }
}