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
}