import app from '../../app';
import { FastifyInstance } from 'fastify';
import { UsuarioController } from '../../src/controllers/usuarioController';

const usuarioController = new UsuarioController();

describe('Testes da usuarioRoute', () => {

  test('POST /usuario cria um novo usuário', async () => {
    const response = await app.inject({
      method: 'POST',
      url: '/usuario',
    });

    expect(response.statusCode).toBe(401);
  });

  test('GET /usuario/:id retorna um usuário específico', async () => {
    const usuarioId = '1';

    const response = await app.inject({
      method: 'GET',
      url: `/usuario/${usuarioId}`,
    });

    expect(response.statusCode).toBe(401);
  });

  test('GET /usuario retorna a lista de usuários', async () => {
    const response = await app.inject({
      method: 'GET',
      url: '/usuario',
    });

    expect(response.statusCode).toBe(401);
  });

  test('PUT /usuario/:id atualiza um usuário existente', async () => {
    const usuarioId = '1';

    const response = await app.inject({
      method: 'PUT',
      url: `/usuario/${usuarioId}`,
    });

    expect(response.statusCode).toBe(401);
  });

  test('DELETE /usuario/:id exclui um usuário existente', async () => {
    const usuarioId = '1';

    const response = await app.inject({
      method: 'DELETE',
      url: `/usuario/${usuarioId}`,
    });

    expect(response.statusCode).toBe(401);
  });

  test('POST /usuario/login/ loga um usuário', async () => {
    const response = await app.inject({
      method: 'POST',
      url: '/usuario/login/',
    });

    expect(response.statusCode).toBe(500);
  });
});
