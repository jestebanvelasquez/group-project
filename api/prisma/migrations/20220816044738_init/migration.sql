/*
  Warnings:

  - You are about to drop the column `priceDay` on the `Eventos` table. All the data in the column will be lost.
  - You are about to drop the column `priceTime` on the `Eventos` table. All the data in the column will be lost.
  - Added the required column `price` to the `Eventos` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Tiempo" AS ENUM ('dias', 'horas', 'minutos');

-- AlterTable
ALTER TABLE "Eventos" DROP COLUMN "priceDay",
DROP COLUMN "priceTime",
ADD COLUMN     "price" REAL NOT NULL,
ADD COLUMN     "tiempo" "Tiempo" NOT NULL DEFAULT 'horas';
