import { Categoria } from "../src/entities/Categoria";
import { Tarefa } from "../src/entities/Tarefa";
import { Usuario } from "../src/entities/Usuario";
import { Cor } from "../src/enums/cores";
import { Status } from "../src/enums/status";
import CategoriaTeste from "./entities/Categoria";
import TarefaTeste from "./entities/Tarefa";
import UsuarioTeste from "./entities/Usuario";

// GLOBAL CONST
export const dataAtual = new Date();
export const dataConclusao = new Date(7777, 10, 10, 22, 22, 22, 22);

// GLOBAL OBJECTS
const categoria = new Categoria(1, 'Categoria Teste', Cor.BRANCO);
const usuario = new Usuario(1, 'Usuario Teste', 1, 'senha', 'teste@teste.com', );
const primeiraTarefa = new Tarefa(1, 'Primeira Tarefa Teste', 'Primeira Tarefa Teste', dataAtual, dataConclusao, Status.ANDAMENTO, categoria, usuario);
const segundaTarefa = new Tarefa(2, 'Segunda Tarefa Teste', 'Segunda Tarefa Teste', dataAtual, dataConclusao, Status.ANDAMENTO, categoria, usuario);


CategoriaTeste.deveCriarUmaCategoria();
UsuarioTeste.deveCriarUmUsuario()
TarefaTeste.deveCriarUmaTarefa(categoria, usuario);