import { Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { Categoria } from "./Categoria"
import { Usuario } from "./Usuario"

@Entity()
export class Tarefa {
    @PrimaryGeneratedColumn()
    id!: number;
    
    @Column()
    titulo!: string;

    @Column()
    descricao!: string;

    @Column()
    dt_criacao!: Date;

    @Column()
    dt_conclusao!: Date;

    @Column()
    tipo!: number;

    @Column()
    status!: number;

    @ManyToMany(() => Categoria)
    @JoinTable()
    categoria!: Categoria;

    @ManyToOne(() => Usuario, (usuario) => usuario.tarefas)
    usuario!: Usuario;
}