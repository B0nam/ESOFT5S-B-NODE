import { DataSource } from "typeorm";
import { Categoria } from "../entities/Categoria";
import { Tarefa } from "../entities/Tarefa";
import { Usuario } from "../entities/Usuario";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "root",
    password: "Abacate123",
    database: "postgres",
    synchronize: true,
    logging: false,
    entities: [Categoria, Tarefa, Usuario],
    subscribers: [],
    migrations: [],
})

AppDataSource.initialize().then(() => {

}).catch((error) => console.log(error))