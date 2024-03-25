-- AlterTable
CREATE SEQUENCE categoria_id_seq;
ALTER TABLE "Categoria" ALTER COLUMN "id" SET DEFAULT nextval('categoria_id_seq');
ALTER SEQUENCE categoria_id_seq OWNED BY "Categoria"."id";

-- AlterTable
CREATE SEQUENCE tarefa_id_seq;
ALTER TABLE "Tarefa" ALTER COLUMN "id" SET DEFAULT nextval('tarefa_id_seq');
ALTER SEQUENCE tarefa_id_seq OWNED BY "Tarefa"."id";

-- AlterTable
CREATE SEQUENCE usuario_id_seq;
ALTER TABLE "Usuario" ALTER COLUMN "id" SET DEFAULT nextval('usuario_id_seq');
ALTER SEQUENCE usuario_id_seq OWNED BY "Usuario"."id";
