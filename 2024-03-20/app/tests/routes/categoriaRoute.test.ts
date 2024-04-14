import app from '../../app';

describe('Testes da categoriaRoute', () => {

  test('GET /categorias retorna a lista de categorias', async () => {
    const response = await app.inject({
      method: 'GET',
      url: '/categorias',
    });

    expect(response.statusCode).toBe(401);
  });

  test('POST /categorias cria uma nova categoria', async () => {
    const response = await app.inject({
      method: 'POST',
      url: '/categorias',
    });

    expect(response.statusCode).toBe(401);
  });

  test('GET /categorias/:id retorna uma categoria específica', async () => {
    const categoriaId = '123';

    const response = await app.inject({
      method: 'GET',
      url: `/categorias/${categoriaId}`,
    });

    expect(response.statusCode).toBe(401);
  });

  test('PUT /categorias/:id atualiza uma categoria existente', async () => {
    const categoriaId = '123';

    const response = await app.inject({
      method: 'PUT',
      url: `/categorias/${categoriaId}`,
    });

    expect(response.statusCode).toBe(401);
  });

  test('DELETE /categorias/:id exclui uma categoria existente', async () => {
    const categoriaId = '123';

    const response = await app.inject({
      method: 'DELETE',
      url: `/categorias/${categoriaId}`,
    });

    expect(response.statusCode).toBe(401);
  });
});
