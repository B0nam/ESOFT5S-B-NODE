import app from '../../app'; // Importe seu aplicativo Fastify aqui
import { AppDataSource } from '../../src/config/data-source';

describe('Health Route', () => {
    it('deve retornar "It\'s Alive!"', async () => {
        const response = await app.inject({
            method: 'GET',
            url: '/',
        });
        expect(response.statusCode).toBe(200);
        expect(response.json()).toEqual({ message: "It's Alive!" });
    });
    afterAll(async () => {
        // Aguarde a inicialização do banco de dados antes de finalizar os testes
        await AppDataSource.initialize();
      });
});
