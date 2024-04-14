import { Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { Categoria } from "./Categoria"
import { Usuario } from "./Usuario"
import { Status } from "../enums/status"
import { Tipo } from "../enums/tipos"


@Entity()
export class Tarefa {
    @PrimaryGeneratedColumn()
    id!: number;
    
    @Column()
    titulo!: string;

    @Column()
    descricao!: string;

    @Column()
    dt_criacao!: string;

    @Column()
    dt_conclusao!: string;

    @Column({type: "varchar", enum:Tipo})
    tipo!: Tipo;

    @Column({type: "varchar", enum:Status})
    status!: Status;

    @ManyToMany(() => Categoria)
    @JoinTable()
    categoria!: Categoria[];

    @ManyToOne(() => Usuario, (usuario) => usuario.tarefas)
    usuario!: Usuario;

    constructor(titulo: string, descricao: string, dt_criacao: string, dt_conclusao: string, status: Status, tipo: Tipo, categorias: Categoria[], usuario: Usuario) {
        this.titulo = titulo;
        this.descricao = descricao;
        this.dt_criacao = dt_criacao;
        this.dt_conclusao = dt_conclusao;
        this.status = status;
        this.tipo = tipo;
        this.categoria = categorias;
        this.usuario = usuario;
    }
}