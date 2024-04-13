import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { Tarefa } from "./Tarefa"

@Entity()
export class Usuario {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    username!: string;

    @Column()
    peso!: number;

    @Column()
    senha!: string;

    @Column()
    email!: string;
    
    @OneToMany(() => Tarefa, (tarefa) => tarefa.usuario)
    tarefas!: Tarefa[]

    constructor(id: number, username: string, peso: number, senha: string, email: string) {
        this.id = id;
        this.username = username;
        this.peso = peso;
        this.senha = senha;
        this.email = email;
    }

    atribuirTarefa(novaTarefa: Tarefa) {
        this.tarefas.push(novaTarefa);
    }
}