/*
  Warnings:

  - Added the required column `lugar` to the `Eventos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Eventos" ADD COLUMN     "lugar" VARBIT(255) NOT NULL;
