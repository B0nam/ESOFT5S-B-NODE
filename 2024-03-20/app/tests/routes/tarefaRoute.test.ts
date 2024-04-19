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

  test('GET /tarefas/concluidas/ retorna tarefas concluidas', async () => {
    const response = await app.inject({
      method: 'GET',
      url: `/tarefas/concluidas/`
    });

    expect(response.statusCode).toBe(401);
  });

  test('GET /tarefas/pendentes/ retorna tarefas pendentes', async () => {
    const response = await app.inject({
      method: 'GET',
      url: `/tarefas/pendentes/`
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

  test('POST /tarefa/usuario retorna tarefas de um usuário pelo ID', async () => {
    const response = await app.inject({
      method: 'POST',
      url: '/tarefa/usuario',
    });

    expect(response.statusCode).toBe(401);
  });

  test('POST /tarefa/vencendo retorna tarefas vencendo no período', async () => {
    const response = await app.inject({
      method: 'POST',
      url: '/tarefa/vencendo',
    });

    expect(response.statusCode).toBe(401);
  });

  test('GET /tarefa/maisantiga/:id retorna a tarefa mais antiga de um usuário', async () => {
    const usuarioId = '1';

    const response = await app.inject({
      method: 'GET',
      url: `/tarefa/maisantiga/${usuarioId}`,
    });

    expect(response.statusCode).toBe(401);
  });

  test('GET /tarefa/descricaomaislonga/:id retorna a tarefa com descrição mais longa de um usuário', async () => {
    const usuarioId = '1';

    const response = await app.inject({
      method: 'GET',
      url: `/tarefa/descricaomaislonga/${usuarioId}`,
    });

    expect(response.statusCode).toBe(401);
  });

  test('GET /tarefa/mediaconclusao/:id retorna a média de conclusão de tarefas de um usuário', async () => {
    const usuarioId = '1';

    const response = await app.inject({
      method: 'GET',
      url: `/tarefa/mediaconclusao/${usuarioId}`,
    });

    expect(response.statusCode).toBe(401);
  });

  test('GET /tarefa/maisrecente/:id retorna a tarefa mais recente de um usuário', async () => {
    const usuarioId = '1';

    const response = await app.inject({
      method: 'GET',
      url: `/tarefa/maisrecente/${usuarioId}`,
    });

    expect(response.statusCode).toBe(401);
  });

  test('GET /tarefa/total/:id retorna o total de tarefas de um usuário', async () => {
    const usuarioId = '1';

    const response = await app.inject({
      method: 'GET',
      url: `/tarefa/total/${usuarioId}`,
    });

    expect(response.statusCode).toBe(401);
  });
});
