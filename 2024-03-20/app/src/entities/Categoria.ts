import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm"
import { Tarefa } from "./Tarefa"

@Entity()
export class Categoria {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    nome!: string;

    @Column()
    cor!: number;
}