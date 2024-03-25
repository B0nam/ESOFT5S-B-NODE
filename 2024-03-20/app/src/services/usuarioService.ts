import prisma from "../../prisma/prisma";
import { UserData } from "../enums/interfaces";

export class UsuarioService {
    async obterUsuarioById(id: number) {
        return await prisma.usuario.findUnique({
            where: { id }
        });
    }

    async obterUsuario() {
        return await prisma.usuario.findMany();
    }

    async criarUsuario(usuarioData: UserData) {
        const user = await prisma.usuario.create({
            data: usuarioData
        })
    }

    async removerUsuario(id: number) {
        const usuarioExiste = await prisma.usuario.findUnique({where: {id: id}});
        await prisma.usuario.delete({where: {id: id}});
    }

    async atualizarUsuario(id: number, usuarioData: UserData) {
        const usuarioAtualizado = await prisma.usuario.update({where: {id: id}, data: usuarioData});
        return usuarioAtualizado;
    }
}
