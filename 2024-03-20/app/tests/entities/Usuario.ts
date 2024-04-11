import { Usuario } from "../../src/entities/Usuario";

export default abstract class UsuarioTeste {
    static deveCriarUmUsuario() {
        const novoUsuario = new Usuario(1, 'Usuario Teste', 1, 'senha', 'teste@teste.com');
        test('Criação de um Usuario teste', () => {
            expect(novoUsuario.id).toBe(1);
            expect(novoUsuario.username).toBe('Usuario Teste');
            expect(novoUsuario.peso).toBe(1);
            expect(novoUsuario.senha).toBe('senha');
            expect(novoUsuario.email).toBe('teste@teste.com');
        });
    }
}