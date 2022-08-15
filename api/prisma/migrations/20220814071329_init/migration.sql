/*
  Warnings:

  - The primary key for the `EventosCompras` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The required column `id` was added to the `EventosCompras` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `idUsuario` to the `EventosCompras` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "EventosCompras" DROP CONSTRAINT "EventosCompras_pkey",
ADD COLUMN     "id" TEXT NOT NULL,
ADD COLUMN     "idUsuario" TEXT NOT NULL,
ADD CONSTRAINT "EventosCompras_pkey" PRIMARY KEY ("id");

-- AddForeignKey
ALTER TABLE "EventosCompras" ADD CONSTRAINT "EventosCompras_idUsuario_fkey" FOREIGN KEY ("idUsuario") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
