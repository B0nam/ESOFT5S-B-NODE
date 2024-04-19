import app from '../../app';

describe('Testes da tarefaRoute', () => {

  test('GET /tarefas retorna a lista de tarefas', async () => {
    const response = await app.inject({
      method: 'GET',
      url: '/tarefas',
    });

    expect(response.statusCode).toBe(401);
  });

  test('POST /tarefas cria uma nova tarefa', async () => {
    const response = await app.inject({
      method: 'POST',
      url: '/tarefas',
    });

    expect(response.statusCode).toBe(401);
  });

  test('GET /tarefas/:id retorna uma tarefa específica', async () => {
    const tarefaId = '1';

    const response = await app.inject({
      method: 'GET',
      url: `/tarefas/${tarefaId}`,
    });

    expect(response.statusCode).toBe(401);
  });
  
  test('GET /tarefas/categoria/:id retorna tarefas com base na categoria', async () => {
    const categoriaId = '1';

    const response = await app.inject({
      method: 'GET',
      url: `/tarefas/categoria/${categoriaId}`,
    });

    expect(response.statusCode).toBe(401);
  });

  test('PUT /tarefas/:id atualiza uma tarefa existente', async () => {
    const tarefaId = '1';

    const response = await app.inject({
      method: 'PUT',
      url: `/tarefas/${tarefaId}`,
    });

    expect(response.statusCode).toBe(401);
  });

  test('DELETE /tarefas/:id exclui uma tarefa existente', async () => {
    const tarefaId = '1';

    const response = await app.inject({
      method: 'DELETE',
      url: `/tarefas/${tarefaId}`,
    });

    expect(response.statusCode).toBe(401);
  });
});
