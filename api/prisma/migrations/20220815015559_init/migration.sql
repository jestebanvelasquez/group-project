/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `Persona` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[lastname]` on the table `Persona` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Persona_name_key" ON "Persona"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Persona_lastname_key" ON "Persona"("lastname");
