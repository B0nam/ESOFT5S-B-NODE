import { Categoria } from "../../src/entities/Categoria";
import { Cor } from "../../src/enums/cores";
import { test, expect } from '@jest/globals';

export default abstract class CategoriaTeste {

    static deveCriarUmaCategoria() {
        const novaCategoria = new Categoria(1, 'Categoria Teste', Cor.BRANCO);
        test('Criação de uma Categoria teste', () => {
            expect(novaCategoria.id).toBe(1);
            expect(novaCategoria.nome).toBe('Categoria Teste');
            expect(novaCategoria.cor).toBe('BRANCO');
        });
    }

}
