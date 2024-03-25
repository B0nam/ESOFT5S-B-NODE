-- AlterTable
ALTER TABLE "Categoria" ALTER COLUMN "id" DROP DEFAULT;
DROP SEQUENCE "Categoria_id_seq";

-- AlterTable
ALTER TABLE "Tarefa" ALTER COLUMN "id" DROP DEFAULT;
DROP SEQUENCE "Tarefa_id_seq";

-- AlterTable
ALTER TABLE "Usuario" ALTER COLUMN "id" DROP DEFAULT;
DROP SEQUENCE "Usuario_id_seq";
