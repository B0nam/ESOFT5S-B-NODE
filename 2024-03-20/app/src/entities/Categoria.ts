import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm"
import { Cor } from "../enums/cores";

@Entity()
export class Categoria {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    nome!: string;

    @Column({type: "varchar", enum:Cor})
    cor!: Cor;

    constructor(id: number, nome: string, cor: Cor){
        this.id = id;
        this.nome = nome;
        this.cor = cor;
    }
}