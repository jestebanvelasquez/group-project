-- CreateTable
CREATE TABLE "Roles" (
    "id" TEXT NOT NULL,
    "nombre" VARCHAR(255) NOT NULL,

    CONSTRAINT "Roles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RolesUsuarios" (
    "idRol" TEXT NOT NULL,
    "idUsuario" TEXT NOT NULL,

    CONSTRAINT "RolesUsuarios_pkey" PRIMARY KEY ("idRol","idUsuario")
);

-- AddForeignKey
ALTER TABLE "RolesUsuarios" ADD CONSTRAINT "RolesUsuarios_idRol_fkey" FOREIGN KEY ("idRol") REFERENCES "Roles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RolesUsuarios" ADD CONSTRAINT "RolesUsuarios_idUsuario_fkey" FOREIGN KEY ("idUsuario") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
