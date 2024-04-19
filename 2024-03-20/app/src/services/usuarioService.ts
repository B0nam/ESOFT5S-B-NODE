import { AppDataSource } from "../config/data-source";
import { Usuario } from "../entities/Usuario";
import { LoginData, UsuarioData } from "../enums/interfaces";

class UsuarioService {

    usuarioRepository = AppDataSource.getRepository(Usuario)

    async criarUsuario(data: UsuarioData){
        const usuario = new Usuario(data.username, data.peso, data.senha, data.email);
        await AppDataSource.manager.save(usuario);
        console.log("[+] Um novo usuario foi criada.");
        return usuario;
    }
    
    async obterUsuarios(){
        const usuarios = await this.usuarioRepository.find()
        return usuarios;
    }
    
    async obterUsuarioId(usuarioId: number){
        const usuario = await this.usuarioRepository.findOneBy({id: usuarioId});
        return usuario;
    }

    async atualizarUsuario(usuarioId: number, data: UsuarioData){
        const usuario = await this.usuarioRepository.save({id: usuarioId, username: data.username, senha: data.senha, email: data.email});
        return usuario;
    }

    async removerUsuario(usuarioId: number){
        const usuario = await this.usuarioRepository.findOneBy({id: usuarioId});
        await this.usuarioRepository.delete(usuarioId);
        return usuario;
    }

    async logarUsuario(data: LoginData){
        const usuario = await this.usuarioRepository.findOneBy({username: data.username, email: data.email, senha: data.senha});
        return usuario;
    }
}

export default new UsuarioService()