import { Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { Categoria } from "./Categoria"
import { Usuario } from "./Usuario"
import { Status } from "../enums/status"

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

    @Column({type: "varchar", enum:Status})
    status!: Status;

    @ManyToMany(() => Categoria)
    @JoinTable()
    categoria!: Categoria;

    @ManyToOne(() => Usuario, (usuario) => usuario.tarefas)
    usuario!: Usuario;

    constructor(id: number, titulo: string, descricao: string, dt_criacao: Date, dt_conclusao: Date, status: Status, categoria: Categoria, usuario: Usuario) {
        this.id = id;
        this.titulo = titulo;
        this.descricao = descricao;
        this.dt_criacao = dt_criacao;
        this.dt_conclusao = dt_conclusao;
        this.status = status;
        this.categoria = categoria;
        this.usuario = usuario;
    }
}