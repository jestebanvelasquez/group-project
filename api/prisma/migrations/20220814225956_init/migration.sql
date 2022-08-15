/*
  Warnings:

  - Added the required column `token` to the `Usuario` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Usuario" ADD COLUMN     "token" VARCHAR(255) NOT NULL;
